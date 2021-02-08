import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
	View,
	Text,
	Dimensions,
	TouchableWithoutFeedback,
	Vibration,
	TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Speech from 'expo-speech';
import * as Animatable from 'react-native-animatable';
import { Audio } from 'expo-av';
import { completeQuiz } from '@redux/reducers/user.js';
import { updateHighscore, getSuggestedQuizzes } from '@redux/reducers/quizzes';

//==>Styles
import styled, { ThemeProvider } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { shaking, bounceInDisappear, rotation } from './animations';

//==>Utils
import { shuffle } from '@utils/shuffle';
import { VibratePattern } from '@utils/vibration';

//==>Assets
import successSound from '@assets/audio/success.wav';
import wrongSound from '@assets/audio/wrong.wav';
import timerSound from '@assets/audio/timer.m4a';
import themeSound from '@assets/audio/samba-theme-loop.wav';
import { clearHighscoreBadge } from '../../redux/reducers/quizzes';

const TIME = 10;
const SFX_VOL = 0.03;
const THEME_MAX_VOL = 0.03;
const THEME_MIN_VOL = 0.01;
const MAX_POINTS = 1000;
const { width: WIDTH } = Dimensions.get('window');
const ERROR_COLOR = '#D53051';
const AnimatedHourglass = Animatable.createAnimatableComponent(Icon);

const Quiz = ({ navigation, route: { params, playTheme, stopTheme } }) => {
	const { theme, language, sound, vibration } = useSelector(
		(state) => state.global
	);
	const { completedQuiz } = useSelector((state) => state.user);
	const questions = useMemo(() => shuffle(params.questions), [
		params.questions,
	]);

	const [current, setCurrent] = useState(0);
	const question = questions[current];
	const shuffledOptions = useMemo(() => shuffle(question.options), [
		question,
	]);

	const [correct, setCorrect] = useState(0);
	const [tts, setTts] = useState(false);
	const [ricky, setRicky] = useState(0);
	const totalTime = params.time || TIME;
	const [timer, setTimer] = useState({ time: totalTime, on: true });
	const [points, setPoints] = useState(0);
	const iconRef = useRef();
	const barRef = useRef();
	const buttonRefArray = [
		{ b: useRef(), t: useRef() },
		{ b: useRef(), t: useRef() },
		{ b: useRef(), t: useRef() },
		{ b: useRef(), t: useRef() },
	];
	const dispatch = useDispatch();

	const [selected, setSelected] = useState({ id: -1, correct: false });
	const [sounds, setSounds] = useState({
		success: null,
		wrong: null,
		timer: null,
		theme: null,
	});

	const nextQuestion = (result) => {
		if (current >= questions.length - 1) {
			const wasCompleted = completedQuiz.some(
				(quiz) => quiz._id === params.id
			);
			let newPoints = Math.floor(
				points + (timer.time / totalTime) * MAX_POINTS * Number(result)
			);
			if (!wasCompleted) {
				dispatch(completeQuiz(params.id));
				newPoints &&
					dispatch(
						updateHighscore({
							quizId: params.id,
							score: newPoints,
						})
					);
				dispatch(getSuggestedQuizzes(language === 'en'));
			}
			navigation.replace('QuizResults', {
				correct: result ? correct + 1 : correct,
				total: questions.length,
				imageQuiz: params.imageQuiz,
				points: newPoints,
				quizId: params.id,
			});
		} else {
			setTimer({ time: totalTime, on: true });
			if (result) {
				setPoints((prevPoints) => {
					return Math.floor(
						prevPoints + (timer.time / totalTime) * MAX_POINTS
					);
				});
				setCorrect((c) => c + 1);
			}
			setCurrent((curr) => curr + 1);
		}
	};

	useEffect(() => {
		let i;
		if (current < questions.length && timer.on) {
			buttonRefArray.forEach(
				(e, i) =>
					i < shuffledOptions.length &&
					e.b.current.animate(
						{
							from: {
								translateX: -WIDTH,
							},
							to: {
								translateX: 0,
							},
							easing: 'ease-out',
						},
						600 + i * 100
					)
			);
			barRef.current.animate(
				{
					0: { width: WIDTH, backgroundColor: theme.primary },
					0.5: { backgroundColor: '#e2ca12' },
					1: { width: 0, backgroundColor: ERROR_COLOR },
					easing: 'linear',
				},
				totalTime * 1000
			);
			i = setInterval(() => {
				setTimer((t) => ({ ...t, time: t.time - 1 }));
			}, 1000);
		}

		return () => clearInterval(i);
	}, [current, timer.on]);

	useEffect(() => {
		if (timer.time === 3) {
			VibratePattern(100, 400, 100, vibration);
			buttonRefArray.forEach(
				(e, i) =>
					i < shuffledOptions.length &&
					e.t.current.animate(shaking, 3000)
			);
			sounds.timer?.playFromPositionAsync(3500);
		}

		if (timer.time <= 0 && timer.on) {
			Vibration.cancel();
			startTimeout(false);
		}
	}, [timer]);

	const handleOptionPress = (result, i) => {
		if (timer.on) {
			setSelected({ id: i, correct: result });
			startTimeout(result);
			Vibration.cancel();
			iconRef.current.animate(bounceInDisappear, 1000);
			buttonRefArray.forEach(
				(e, i) =>
					i < shuffledOptions.length &&
					e.b.current.animate(
						{
							from: {
								translateX: 0,
							},
							to: {
								translateX: WIDTH,
							},
							easing: 'ease-in',
						},
						600 + i * 100
					)
			);
		}
		setTts(false);
		Speech.stop();
	};

	const startTimeout = (result) => {
		if (sound) {
			sounds.timer?.stopAsync();
			sounds.theme?.setVolumeAsync(THEME_MIN_VOL);
		}
		result
			? sounds.success?.playFromPositionAsync(0)
			: sounds.wrong?.playFromPositionAsync(0);
		barRef.current.stopAnimation();
		buttonRefArray.forEach(
			(e, i) => i < shuffledOptions.length && e.t.current.stopAnimation()
		);
		setTts(false);
		Speech.stop();
		setTimer({ time: totalTime, on: false });
		setTimeout(() => {
			sounds.theme?.setVolumeAsync(THEME_MAX_VOL);
			setSelected({ id: -1, correct: false });
			nextQuestion(result);
		}, 1000);
	};

	useEffect(() => {
		stopTheme();
		dispatch(clearHighscoreBadge());
		let s1;
		let s2;
		let s3;
		let s4;
		let soundList;
		async function loadSounds() {
			try {
				s1 = new Audio.Sound.createAsync(successSound, {
					volume: SFX_VOL,
				});
				s2 = new Audio.Sound.createAsync(wrongSound, {
					volume: SFX_VOL,
				});
				s3 = new Audio.Sound.createAsync(timerSound, {
					volume: SFX_VOL,
				});
				s4 = new Audio.Sound.createAsync(themeSound, {
					volume: THEME_MAX_VOL,
					isLooping: true,
				});
				Promise.all([s1, s2, s3, s4]).then((snds) => {
					if (sound) {
						soundList = snds.map((n) => n.sound);
						soundList[3].playAsync();
						setSounds({
							success: soundList[0],
							wrong: soundList[1],
							timer: soundList[2],
							theme: soundList[3],
						});
					}
				});
			} catch (err) {
				console.log('sound loading error' + err);
			}
		}
		loadSounds();
		return () => {
			if (sound) {
				soundList.forEach((snd) => snd?.unloadAsync());
				playTheme();
			}
			Vibration.cancel();
		};
	}, []);

	if (!question) return null;

	const handleRicky = () => {
		setRicky(ricky + 1);
		setTimeout(() => {
			setRicky(0);
		}, 1000);
		if (ricky > 5) {
			navigation.navigate('Ricky');
		}
	};
	return (
		<ThemeProvider theme={theme}>
			<Screen>
				<Header>
					<Exit
						onPress={() => {
							Speech.stop();
							navigation.goBack();
						}}
					>
						<Icon name='ios-close' color={theme.text} size={28} />
						<Text
							style={{
								color: theme.text,
								fontFamily: 'Nunito_600SemiBold',
							}}
						>
							{language === 'es' ? 'Abandonar' : 'Leave'}
						</Text>
					</Exit>
					<Text
						style={{
							width: '33%',
							textAlign: 'center',
							color: theme.text,
							fontFamily: 'Nunito_600SemiBold',
						}}
					>
						{points}
					</Text>
					<Text
						style={{
							width: '33%',
							textAlign: 'center',
							color: theme.text,
							fontFamily: 'Nunito_600SemiBold',
						}}
					>
						{current + 1}/{questions.length}
					</Text>
				</Header>
				<View style={{ position: 'relative' }}>
					<TimeBar ref={barRef} theme={theme}></TimeBar>
					<View
						style={{ flexDirection: 'row', alignItems: 'center' }}
					>
						<AnimatedHourglass
							color={theme.text}
							{...hourglassOptions}
						/>
						<Text
							style={{
								color: theme.text,
								fontFamily: 'Nunito_800ExtraBold',
								fontSize: 20,
								paddingLeft: 10,
							}}
						>
							{Math.floor(timer.time / 60)}:
							{(timer.time % 60).toString().padStart(2, '0')}
						</Text>
					</View>
				</View>
				<MiddleScreen>
					<QuestionTitle>{question.title}</QuestionTitle>
					<TouchableWithoutFeedback onPress={handleRicky}>
						<View
							style={{
								flex: 1,
								width: '100%',
								height: '100%',
								position: 'relative',
							}}
						>
							<QuizImg
								source={{
									uri: question.image
										? question.image
										: params.imageQuiz,
								}}
							/>
							<ThumbsIconContainer>
								<AnimatedIcon
									ref={iconRef}
									name={`ios-thumbs-${
										selected.correct ? 'up' : 'down'
									}-outline`}
									color={theme.white}
									size={28}
									correct={selected.correct}
									theme={theme}
								/>
							</ThumbsIconContainer>
						</View>
					</TouchableWithoutFeedback>
				</MiddleScreen>
				<BottomScreen>
					{shuffledOptions.map((option, i) => (
						<Option
							selectedColor={
								selected.id === i
									? selected.correct
										? theme.primary
										: ERROR_COLOR
									: false
							}
							theme={theme}
							key={i}
							onPress={() => handleOptionPress(option.result, i)}
							ref={buttonRefArray[i].b}
							useNativeDriver={true}
						>
							<Animatable.Text
								direction={i % 2 === 0 ? 'normal' : 'reverse'}
								ref={buttonRefArray[i].t}
								style={{
									width: '85%',
									alignSelf: 'center',
									color: theme.text,
									textAlign: 'center',
									fontFamily: 'Nunito_800ExtraBold',
								}}
								useNativeDriver={true}
							>
								{option.title}
							</Animatable.Text>
							{!tts ? (
								<TtsButtons
									onPress={() => {
										Speech.speak(option.title, {
											language:
												params.language === 'es'
													? 'es-ES'
													: 'en-US',
											onDone: () => setTts(false),
										});
										setTts(true);
									}}
								>
									<Icon
										color={theme.text}
										name='ios-play'
										size={30}
										style={{ justifyContent: 'center' }}
									/>
								</TtsButtons>
							) : (
								<TtsButtons
									onPress={() => {
										Speech.stop();
										setTts(false);
									}}
								>
									<Icon
										color={theme.text}
										name='ios-pause'
										size={30}
										style={{ justifyContent: 'center' }}
									/>
								</TtsButtons>
							)}
						</Option>
					))}
				</BottomScreen>
			</Screen>
		</ThemeProvider>
	);
};

const hourglassOptions = {
	name: 'ios-hourglass-outline',
	animation: rotation,
	duration: 3000,
	delay: 500,
	easing: 'ease-in-out',
	iterationCount: 'infinite',
	size: 28,
	useNativeDriver: true,
	style: { marginLeft: 10 },
};

const Screen = styled.View`
	flex: 1;
	border: 1px solid black;
	background-color: ${(props) => props.theme.bg};
`;

const Header = styled.View`
	width: 100%;
	height: 8%;
	padding: 10px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.theme.bg};
`;

const QuestionTitle = styled.Text`
	margin-top: 30px;
	font-family: 'Nunito_800ExtraBold';
	font-size: 20px;
	color: ${({ theme }) => theme.text};
	max-width: 95%;
	align-self: center;
	margin-bottom: 15px;
	text-align: center;
`;

const AnimatableTouchableOpacity = Animatable.createAnimatableComponent(
	TouchableOpacity
);
const Option = styled(AnimatableTouchableOpacity)`
	width: 95%;
	align-self: center;
	margin: 6px 0px;
	border-width: 2px;
	border-color: ${({ selectedColor, theme }) =>
		selectedColor || theme.primary};
	border-radius: 4px;
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: ${({ selectedColor }) => selectedColor || 'transparent'};
	flex-direction: row;
`;

const TimeBar = styled(Animatable.View)`
	background-color: ${(props) => props.theme.primary};
	height: 20px;
	width: 100%;
	border-bottom-right-radius: 100px;
	border-top-right-radius: 100px;
`;

const QuizImg = styled.Image`
	height: 100%;
`;

const ThumbsIconContainer = styled.View`
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	align-items: center;
`;

const ThumbsIcon = styled(Icon)`
	color: white;
	font-size: 60px;
	padding: 20px;
	opacity: 0;
	background-color: ${({ correct, theme }) =>
		correct ? theme.primary : ERROR_COLOR};
	border-radius: 999px;
`;
const AnimatedIcon = Animatable.createAnimatableComponent(ThumbsIcon);

const MiddleScreen = styled.View`
	height: 40%;
	width: 100%;
	align-items: center;
	justify-content: space-between;
`;

const BottomScreen = styled.View`
	background-color: ${(props) => props.theme.bg};
	height: 40%;
	width: 100%;
	margin-top: auto;
	margin-bottom: 10px;
	align-items: center;
	justify-content: space-between;
`;

const Exit = styled.TouchableOpacity`
	width: 33%;
	align-items: center;
	justify-content: center;
`;

const TtsButtons = styled.TouchableOpacity`
	width: 15%;
	align-self: center;
	align-items: center;
	justify-content: center;
`;
export default Quiz;
