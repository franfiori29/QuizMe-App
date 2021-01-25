import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useSelector } from 'react-redux';

//==> Styles
import styled, { ThemeProvider } from 'styled-components/native';
import { RadioButton } from 'react-native-paper';

//==> Components
import ButtonPpal from '@components/utils/ButtonPpal';
import NavBar from '@components/utils/NavBar';

//==>Assets
import strings from './strings';

const QuizMakeQuestions = ({ navigation, route: { params } }) => {
	const { theme, language } = useSelector((state) => state.global);
	const s = strings[language];

	const [question, setQuestion] = useState('');
	const [option1, setOption1] = useState('');
	const [option2, setOption2] = useState('');
	const [option3, setOption3] = useState('');
	const [option4, setOption4] = useState('');
	const [checked, setChecked] = useState('1');

	const handleNext = (submit) => {
		let objQuestion = {
			title: question,
			options: [
				{
					title: option1,
					result: false,
				},
				{
					title: option2,
					result: false,
				},
				{
					title: option3,
					result: false,
				},
				{
					title: option4,
					result: false,
				},
			],
			score: 5,
		};
		objQuestion.options[checked - 1].result = true;

		let quiz = {
			...params.quiz,
		};
		quiz.questions.push(objQuestion);
		if (submit === 'submit') {
			handleSubmit(quiz);
		} else {
			setQuestion('');
			setOption1('');
			setOption2('');
			setOption3('');
			setOption4('');
			setChecked('1');
		}
	};

	const handleSubmit = (quiz) => {
		navigation.navigate('QuizMakeDetails', { quiz });
	};

	return (
		<ThemeProvider theme={theme}>
			<Screen centerContent={true}>
				<NavBar
					string={s.nav}
					nav1={() => navigation.navigate('Home')}
					icon1='ios-close'
					icon2=''
				/>
				<Title>
					<Text
						style={{
							fontSize: 28,
							fontWeight: 'bold',
							color: theme.text,
							textAlign: 'center',
						}}
					>
						{s.title2}
					</Text>
					<Text
						style={{
							alignSelf: 'center',
							color: '#ccc',
							fontSize: 18,
							marginTop: 5,
						}}
					>
						{s.title2_1}
					</Text>
				</Title>
				<FormContainer>
					<QuizInput
						placeholder={s.question}
						placeholderTextColor={theme.text}
						onChangeText={(text) => setQuestion(text)}
						value={question}
					/>
					<QuizInput
						placeholder={s.option1}
						placeholderTextColor={theme.text}
						onChangeText={(text) => setOption1(text)}
						value={option1}
					/>
					<QuizInput
						placeholder={s.option2}
						placeholderTextColor={theme.text}
						onChangeText={(text) => setOption2(text)}
						value={option2}
					/>
					<QuizInput
						placeholder={s.option3}
						placeholderTextColor={theme.text}
						onChangeText={(text) => setOption3(text)}
						value={option3}
					/>
					<QuizInput
						placeholder={s.option4}
						placeholderTextColor={theme.text}
						onChangeText={(text) => setOption4(text)}
						value={option4}
					/>
					<Text
						style={{
							color: theme.text,
							alignSelf: 'center',
							fontSize: 18,
							marginTop: 5,
							marginBottom: 5,
						}}
					>
						{s.correct}
					</Text>
					<View
						style={{
							width: '95%',
							alignSelf: 'center',
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}
					>
						<View
							style={{
								width: 40,
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<Text style={{ fontSize: 20, color: theme.text }}>
								1
							</Text>
							<RadioButton
								uncheckedColor={theme.text}
								value='1'
								status={
									checked === '1' ? 'checked' : 'unchecked'
								}
								onPress={() => setChecked('1')}
							/>
						</View>
						<View
							style={{
								width: 40,
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<Text style={{ fontSize: 20, color: theme.text }}>
								2
							</Text>
							<RadioButton
								uncheckedColor={theme.text}
								value='2'
								status={
									checked === '2' ? 'checked' : 'unchecked'
								}
								onPress={() => setChecked('2')}
							/>
						</View>
						<View
							style={{
								width: 40,
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<Text style={{ fontSize: 20, color: theme.text }}>
								3
							</Text>
							<RadioButton
								uncheckedColor={theme.text}
								value='3'
								status={
									checked === '3' ? 'checked' : 'unchecked'
								}
								onPress={() => setChecked('3')}
							/>
						</View>
						<View
							style={{
								width: 40,
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<Text style={{ fontSize: 20, color: theme.text }}>
								4
							</Text>
							<RadioButton
								uncheckedColor={theme.text}
								value='4'
								status={
									checked === '4' ? 'checked' : 'unchecked'
								}
								onPress={() => setChecked('4')}
							/>
						</View>
					</View>
					<View style={{ marginTop: 10 }}>
						<ButtonPpal
							string={s.next}
							onSubmit={handleNext}
							navigation={navigation}
							nav=''
						/>
					</View>
					{params.quiz.questions.length >= 3 && (
						<View style={{ marginTop: 10, marginBottom: 10 }}>
							<ButtonPpal
								string={s.finish}
								onSubmit={() => handleNext('submit')}
								navigation={navigation}
								nav=''
							/>
						</View>
					)}
				</FormContainer>
			</Screen>
		</ThemeProvider>
	);
};

// QuizMakeQuestions.defaultProps = {
// 	routes: {
// 		params: {
// 			quiz: {
// 				categoryId: '5959e34adf833e1451a00005',
// 				description: 'Demuestra que tan fan eres de rapido y furioso',
// 				image:
// 					'https://therubyhub.com/wp-content/uploads/2019/09/Quiz.jpg',
// 				questions: [],
// 				time: 10,
// 				title: 'Eres fan de Rapido y furioso?',
// 			},
// 		},
// 	},
// };

const Screen = styled.ScrollView`
	flex: 1;
	background-color: ${(props) => props.theme.bg};
`;

const Title = styled.View`
	width: 95%;
	align-self: center;
	margin: 20px 0;
`;

const FormContainer = styled.View`
	width: 95%;
	align-self: center;
	border-radius: 10px;
`;

const QuizInput = styled.TextInput`
	width: 95%;
	align-self: center;
	height: 40px;
	border-color: #ccc;
	border-width: 1px;
	border-radius: 5px;
	color: ${(props) => props.theme.text};
	margin-bottom: 20px;
	padding: 10px;
`;
export default QuizMakeQuestions;
