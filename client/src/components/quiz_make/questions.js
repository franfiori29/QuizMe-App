import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import styled, { ThemeProvider } from 'styled-components/native';
import { RadioButton } from 'react-native-paper';

const QuizMakeQuestions = ({ navigation, route: { params } }) => {
	const { theme } = useSelector((state) => state.global);

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
				<Header>
					<HeaderButton onPress={() => navigation.navigate('Home')}>
						<Icon
							name='ios-close'
							color={theme.primary}
							size={28}
						/>
					</HeaderButton>
					<StyledText style={{ fontSize: 20, color: theme.primary }}>
						QuizMeApp
					</StyledText>
					<Text></Text>
				</Header>
				<View>
					<Text
						style={{
							fontSize: 30,
							fontWeight: 'bold',
							color: theme.text,
							textAlign: 'center',
						}}
					>
						¿Que preguntas quieres hacer? (Minimo de 4 preguntas)
					</Text>
				</View>
				<FormContainer>
					<Text style={{ fontSize: 20, color: theme.text }}>
						Pregunta
					</Text>
					<TextInput
						style={{
							height: 40,
							borderColor: 'gray',
							borderWidth: 1,
							color: theme.text,
						}}
						onChangeText={(text) => setQuestion(text)}
						value={question}
					/>
					<Text style={{ fontSize: 20, color: theme.text }}>
						Opcion 1
					</Text>
					<TextInput
						style={{
							height: 40,
							borderColor: 'gray',
							borderWidth: 1,
							color: theme.text,
						}}
						onChangeText={(text) => setOption1(text)}
						value={option1}
					/>
					<Text style={{ fontSize: 20, color: theme.text }}>
						Opcion 2
					</Text>
					<TextInput
						style={{
							height: 40,
							borderColor: 'gray',
							borderWidth: 1,
							color: theme.text,
						}}
						onChangeText={(text) => setOption2(text)}
						value={option2}
					/>
					<Text style={{ fontSize: 20, color: theme.text }}>
						Opcion 3
					</Text>
					<TextInput
						style={{
							height: 40,
							borderColor: 'gray',
							borderWidth: 1,
							color: theme.text,
						}}
						onChangeText={(text) => setOption3(text)}
						value={option3}
					/>
					<Text style={{ fontSize: 20, color: theme.text }}>
						Opcion 4
					</Text>
					<TextInput
						style={{
							height: 40,
							borderColor: 'gray',
							borderWidth: 1,
							color: theme.text,
						}}
						onChangeText={(text) => setOption4(text)}
						value={option4}
					/>
					<Text style={{ fontSize: 20, color: theme.text }}>
						Indica el numero de la opcion correcta
					</Text>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}
					>
						<View style={{ width: 40, flexDirection: 'row' }}>
							<Text style={{ fontSize: 20, color: theme.text }}>
								1
							</Text>
							<RadioButton
								value='1'
								status={
									checked === '1' ? 'checked' : 'unchecked'
								}
								onPress={() => setChecked('1')}
							/>
						</View>
						<View style={{ width: 40, flexDirection: 'row' }}>
							<Text style={{ fontSize: 20, color: theme.text }}>
								2
							</Text>
							<RadioButton
								value='2'
								status={
									checked === '2' ? 'checked' : 'unchecked'
								}
								onPress={() => setChecked('2')}
							/>
						</View>
						<View style={{ width: 40, flexDirection: 'row' }}>
							<Text style={{ fontSize: 20, color: theme.text }}>
								3
							</Text>
							<RadioButton
								value='3'
								status={
									checked === '3' ? 'checked' : 'unchecked'
								}
								onPress={() => setChecked('3')}
							/>
						</View>
						<View style={{ width: 40, flexDirection: 'row' }}>
							<Text style={{ fontSize: 20, color: theme.text }}>
								4
							</Text>
							<RadioButton
								value='4'
								status={
									checked === '4' ? 'checked' : 'unchecked'
								}
								onPress={() => setChecked('4')}
							/>
						</View>
					</View>
					<Button title='Siguiente' onPress={handleNext} />
					{params.quiz.questions.length >= 3 && (
						<Button
							title='Finalizar'
							onPress={() => handleNext('submit')}
						/>
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

const FormContainer = styled.View`
	margin: 0 20px;
	border: 1px solid red;
	border-radius: 10px;
`;

const StyledText = styled.Text`
	color: ${(props) => props.theme.text};
`;

const Header = styled.View`
	width: 100%;
	height: 65px;
	padding: 10px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
`;

const HeaderButton = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
`;

export default QuizMakeQuestions;
