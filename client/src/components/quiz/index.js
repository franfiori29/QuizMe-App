import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import successSound from '@assets/audio/success.wav';
import wrongSound from '@assets/audio/wrong.wav';
import timerSound from '@assets/audio/timer.m4a';
import { Audio } from 'expo-av';
//Styles ==>
import styled, { ThemeProvider } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { shaking } from './animations';
const TIME = 10;

const { width: WIDTH } = Dimensions.get('window');
const Quiz = ({ navigation, route: { params } }) => {
	const { theme } = useSelector((state) => state.global);
	const questions = params.questions;
	const [current, setCurrent] = useState(0);
	const [correct, setCorrect] = useState(0);
	const time = params.time || TIME;
	const [timer, setTimer] = useState({ time: time, on: true });
	const barRef = useRef();
	const button0 = useRef();
	const button1 = useRef();
	const button2 = useRef();
	const button3 = useRef();
	const buttonRefArray = [button0, button1, button2, button3];

	const [selected, setSelected] = useState({ id: -1, correct: false });
	const [sounds, setSounds] = useState({
		success: null,
		wrong: null,
		timer: null,
	});

	const nextQuestion = (result) => {
		if (current >= questions.length - 1) {
			navigation.replace('QuizResults', {
				correct: result ? correct + 1 : correct,
				total: questions.length,
				imageQuiz: params.imageQuiz,
			});
		} else {
			setTimer({ time: time, on: true });
			if (result) {
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
				time * 1000
			);
			i = setInterval(() => {
				setTimer((t) => ({ ...t, time: t.time - 1 }));
			}, 1000);
		}

		return () => clearInterval(i);
	}, [current, timer.on]);

	useEffect(() => {
		if (timer.time === 3) {
			buttonRefArray.forEach((e) => e.current.animate(shaking, 3000));
			sounds.timer?.playFromPositionAsync(3500);
		}
		if (timer.time <= 0 && timer.on) {
			sounds.wrong?.playFromPositionAsync(0);
			nextQuestion(false);
		}
	}, [timer]);

	const handleOptionPress = (result, i) => {
		if (timer.on) {
			setSelected({ id: i, correct: result });
			sounds.timer?.stopAsync();
			result
				? sounds.success?.playFromPositionAsync(0)
				: sounds.wrong?.playFromPositionAsync(0);
			barRef.current.stopAnimation();
			buttonRefArray.forEach((e) => e.current.stopAnimation());
			setTimer({ time: time, on: false });
			setTimeout(() => {
				setSelected({ id: -1, correct: false });
				nextQuestion(result);
			}, 1000);
		}
	};

	useEffect(() => {
		const sound1 = new Audio.Sound();
		const sound2 = new Audio.Sound();
		const sound3 = new Audio.Sound();
		async function loadSounds() {
			try {
				await sound1.loadAsync(successSound);
				await sound2.loadAsync(wrongSound);
				await sound3.loadAsync(timerSound);
				setSounds({ success: sound1, wrong: sound2, timer: sound3 });
			} catch {
				console.log('sound loading error');
			}
		}
		loadSounds();
		return () => {
			sound1.unloadAsync();
			sound2.unloadAsync();
			sound3.unloadAsync();
		};
	}, []);

	const question = questions[current];
	if (!question) return null;
	return (
		<ThemeProvider theme={theme}>
			<Screen>
				<Header>
					<Exit onPress={() => navigation.goBack()}>
						<Icon name='ios-close' color={theme.text} size={28} />
						<Text style={{ color: theme.text }}>Abandonar!</Text>
					</Exit>
					<Text
						style={{
							width: '33%',
							textAlign: 'center',
							color: theme.text,
						}}
					>
						2600
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
					<QuizImg
						source={{
							uri: question.image
								? question.image
								: params.imageQuiz,
						}}
					/>
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
									alignSelf: 'center',
									color: theme.text,
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
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
	border-top-width: 1px;
	border-top-color: #ccc;
	flex: 1;
	justify-content: center;
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
