import React, { useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createQuiz } from '../../redux/reducers/quizzes';
import ScrollCategory from '../utils/ScrollCategory';

const QuizMake = ({ navigation }) => {
	const { theme } = useSelector((state) => state.global);
	const { categories } = useSelector((state) => state.quiz);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [questions, setQuestions] = useState([]);
	const [time, setTime] = useState(0);
	const [question, setQuestion] = useState('');
	const [option1, setOption1] = useState('');
	const [option2, setOption2] = useState('');
	const [option3, setOption3] = useState('');
	const [option4, setOption4] = useState('');

	const dispatch = useDispatch();
	const handleSubmit = () => {
		let obj = {
			title,
			description,
			image: 'https://i.ytimg.com/vi/fWpzkACkiTs/maxresdefault.jpg',
			categoryId: category,
			questions: [
				{
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
							result: true,
						},
						{
							title: option4,
							result: false,
						},
					],
					score: 5,
				},
			],
			time: Number(time),
		};
		dispatch(createQuiz(obj));
		navigation.navigate('Home');
	};

	const handleSelect = (select) => {
		setCategory(select);
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
				<View style={{ paddingHorizontal: 10 }}>
					<Text
						style={{
							fontSize: 30,
							color: theme.text,
							textAlign: 'center',
						}}
					>
						Empecemos a crear tu propia quiz
					</Text>
					<Text style={{ fontSize: 20, color: theme.text }}>
						Titulo
					</Text>
					<TextInput
						style={{
							height: 40,
							borderColor: 'gray',
							borderWidth: 1,
							color: theme.text,
						}}
						onChangeText={(text) => setTitle(text)}
						value={title}
					/>
					<Text style={{ fontSize: 20, color: theme.text }}>
						Descripción
					</Text>
					<TextInput
						style={{
							height: 40,
							borderColor: 'gray',
							borderWidth: 1,
							color: theme.text,
						}}
						onChangeText={(text) => setDescription(text)}
						value={description}
					/>
					<Text style={{ fontSize: 20, color: theme.text }}>
						Imagen (Opcional)
					</Text>
					<Text style={{ fontSize: 20, color: theme.text }}>
						Categorias
					</Text>
					<ScrollCategory
						categories={categories}
						handleSelect={handleSelect}
					/>
					<Text style={{ fontSize: 20, color: theme.text }}>
						Tiempo de cada pregunta
					</Text>
					<TextInput
						style={{
							height: 40,
							borderColor: 'gray',
							borderWidth: 1,
							color: theme.text,
						}}
						keyboardType='numeric'
						onChangeText={(text) => setTime(text)}
						value={time.toString()}
					/>
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
					<Button title='Submit' onPress={handleSubmit} />
				</View>
			</Screen>
		</ThemeProvider>
	);
};

const Screen = styled.ScrollView`
	flex: 1;
	background-color: ${(props) => props.theme.bg};
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

const IntroContainer = styled.View`
	height: 300px;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	margin: 50px 0;
`;

const IntroTitle = styled.Text`
	font-size: 24px;
	font-weight: bold;
	text-align: center;
	color: ${(props) => props.theme.primary};
	padding: 0px 10px;
`;

export default QuizMake;
