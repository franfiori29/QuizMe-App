import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import * as Animatable from 'react-native-animatable';

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

	const nextQuestion = (result) => {
		if (current >= questions.length - 1) {
			navigation.navigate('QuizResults', {
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
		if (timer.time === 2) {
			buttonRefArray.forEach((e) => e.current.animate(shaking, 2000));
		}
		if (timer.time <= 0 && timer.on) {
			nextQuestion(false);
		}
	}, [timer]);

	const handleOptionPress = (result, i) => {
		setSelected({ id: i, correct: result });
		barRef.current.stopAnimation();
		buttonRefArray.forEach((e) => e.current.stopAnimation());
		if (timer.on) {
			setTimer({ time: time, on: false });
			setTimeout(() => {
				setSelected({ id: -1, correct: false });
				nextQuestion(result);
			}, 1000);
		}
	};

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
