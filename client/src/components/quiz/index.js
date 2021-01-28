import React, { useState, useEffect, useRef } from 'react';
import {
	View,
	Text,
	Dimensions,
	TouchableWithoutFeedback,
	Vibration,
	Platform,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import successSound from '@assets/audio/success.wav';
import wrongSound from '@assets/audio/wrong.wav';
import timerSound from '@assets/audio/timer.m4a';
import themeSound from '@assets/audio/samba-theme-loop.wav';
import { Audio } from 'expo-av';
import { completeQuiz } from '@redux/reducers/user.js';

//Styles ==>
import styled, { ThemeProvider } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { shaking } from './animations';
import { updateHighscore } from './../../redux/reducers/quizzes';

const TIME = 10;
const THEME_MAX_VOL = 0.15;
const THEME_MIN_VOL = 0.05;
const MAX_POINTS = 1000;

const { width: WIDTH } = Dimensions.get('window');
const Quiz = ({ navigation, route: { params } }) => {
	const { theme, language } = useSelector((state) => state.global);
	const { completedQuiz } = useSelector((state) => state.user);
	const questions = params.questions;
	const [current, setCurrent] = useState(0);
	const [correct, setCorrect] = useState(0);
	const [ricky, setRicky] = useState(0);
	const totalTime = params.time || TIME;
	const [timer, setTimer] = useState({ time: totalTime, on: true });
	const [points, setPoints] = useState(0);
	const barRef = useRef();
	const button0 = useRef();
	const button1 = useRef();
	const button2 = useRef();
	const button3 = useRef();
	const buttonRefArray = [button0, button1, button2, button3];
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
				(quiz) => quiz._id === params.id,
			);
			let newPoints =
				points + (timer.time / totalTime) * MAX_POINTS * Number(result);
			if (!wasCompleted) {
				dispatch(completeQuiz(params.id));
				dispatch(
					updateHighscore({ quizId: params.id, score: newPoints }),
				);
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
					return prevPoints + (timer.time / totalTime) * MAX_POINTS;
				});
				setCorrect((c) => c + 1);
			}
			setCurrent((curr) => curr + 1);
		}
	};

	useEffect(() => {
		let i;
		if (current < questions.length && timer.on) {
			barRef.current.animate(
				{
					0: { width: WIDTH, backgroundColor: 'rgba(0,255,0,1)' },
					1: { width: 0, backgroundColor: 'rgba(255,0,0,1)' },
					easing: 'linear',
				},
				totalTime * 1000,
			);
			i = setInterval(() => {
				setTimer((t) => ({ ...t, time: t.time - 1 }));
			}, 1000);
		}

		return () => clearInterval(i);
	}, [current, timer.on]);

	useEffect(() => {
		if (timer.time === 3) {
			if (Platform.OS === 'android') {
				Vibration.vibrate([100, 400, 100], true);
			}

			buttonRefArray.forEach((e) => e.current.animate(shaking, 3000));
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
		}
	};

	const startTimeout = (result) => {
		sounds.timer?.stopAsync();
		sounds.theme?.setVolumeAsync(THEME_MIN_VOL);
		result
			? sounds.success?.playFromPositionAsync(0)
			: sounds.wrong?.playFromPositionAsync(0);
		barRef.current.stopAnimation();
		buttonRefArray.forEach((e) => e.current.stopAnimation());
		setTimer({ time: totalTime, on: false });
		setTimeout(() => {
			sounds.theme?.setVolumeAsync(THEME_MAX_VOL);
			setSelected({ id: -1, correct: false });
			nextQuestion(result);
		}, 1000);
	};

	useEffect(() => {
		const sound1 = new Audio.Sound();
		const sound2 = new Audio.Sound();
		const sound3 = new Audio.Sound();
		const sound4 = new Audio.Sound();
		async function loadSounds() {
			try {
				setSounds({
					success: sound1,
					wrong: sound2,
					timer: sound3,
					theme: sound4,
				});
				sound1.loadAsync(successSound);
				sound2.loadAsync(wrongSound);
				sound3.loadAsync(timerSound);
				sound4
					.loadAsync(themeSound)
					.then(() => {
						return sound4.setStatusAsync({
							volume: THEME_MAX_VOL,
							isLooping: true,
						});
					})
					.then(() => {
						sound4.playAsync();
					});
			} catch {
				console.log('sound loading error');
			}
		}
		loadSounds();
		return () => {
			sound1?.unloadAsync();
			sound2?.unloadAsync();
			sound3?.unloadAsync();
			sound4?.unloadAsync();
		};
	}, []);

	const question = questions[current];
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
							navigation.goBack(), Vibration.cancel();
						}}
					>
						<Icon name='ios-close' color={theme.text} size={28} />
						<Text style={{ color: theme.text }}>
							{language === 'es' ? 'Abandonar' : 'Leave'}
						</Text>
					</Exit>
					<Text
						style={{
							width: '33%',
							textAlign: 'center',
							color: theme.text,
						}}
					>
						{points}
					</Text>
					<Text
						style={{
							width: '33%',
							textAlign: 'center',
							color: theme.text,
						}}
					>
						{current + 1}/{questions.length}
					</Text>
				</Header>
				<View style={{ position: 'relative' }}>
					<TimeBar ref={barRef}></TimeBar>
					<Text
						style={{
							position: 'absolute',
							right: 10,
							color: theme.text,
						}}
					>
						{timer.time}
					</Text>
				</View>
				<MiddleScreen>
					<Text
						style={{
							marginTop: 30,
							fontWeight: 'bold',
							fontSize: 20,
							color: theme.text,
							maxWidth: '95%',
							alignSelf: 'center',
							marginBottom: 15,
							textAlign: 'center',
						}}
					>
						{question.title}
					</Text>
					<TouchableWithoutFeedback onPress={handleRicky}>
						<QuizImg
							source={{
								uri: question.image
									? question.image
									: params.imageQuiz,
							}}
						/>
					</TouchableWithoutFeedback>
				</MiddleScreen>
				<BottomScreen>
					{question.options.map((option, i) => (
						<Option
							selectedColor={
								selected.id === i
									? selected.correct
										? '#0f0'
										: '#f00'
									: false
							}
							key={i}
							onPress={() => handleOptionPress(option.result, i)}
						>
							<Animatable.Text
								direction={i % 2 === 0 ? 'normal' : 'reverse'}
								ref={buttonRefArray[i]}
								style={{
									width: '100%',
									alignSelf: 'center',
									color: theme.text,
									textAlign: 'center',
								}}
							>
								{option.title}
							</Animatable.Text>
						</Option>
					))}
				</BottomScreen>
			</Screen>
		</ThemeProvider>
	);
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

const Option = styled.TouchableOpacity`
	width: 95%;
	align-self: center;
	border-top-width: 1px;
	border-top-color: #ccc;
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: ${(props) =>
		props.selectedColor ? props.selectedColor : 'transparent'};
`;

const TimeBar = styled(Animatable.View)`
	background-color: #0f0;
	height: 20px;
	width: 100%;
`;

const QuizImg = styled.Image`
	z-index: 3;
	height: 70%;
	width: 95%;
`;

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
	align-items: center;
	justify-content: space-between;
`;

const Exit = styled.TouchableOpacity`
	width: 33%;
	align-items: center;
	justify-content: center;
`;

export default Quiz;
