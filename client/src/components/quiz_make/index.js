import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createQuiz } from '../../redux/reducers/quizzes';

const QuizMake = ({ navigation }) => {
	const { theme } = useSelector((state) => state.global);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const dispatch = useDispatch();
	const handleSubmit = () => {
		let obj = {
			title,
			description,
			image: 'https://i.ytimg.com/vi/fWpzkACkiTs/maxresdefault.jpg',
			categoryId: '5959e34adf833e1451a00005',
			questions: [
				{
					title: '¿Cual es el numero cuatro?',
					options: [
						{
							title: '1',
							result: false,
						},
						{
							title: '2',
							result: false,
						},
						{
							title: '3',
							result: true,
						},
						{
							title: '4',
							result: false,
						},
					],
					time: 20,
					score: 5,
				},
			],
		};
		dispatch(createQuiz(obj));
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
					<Text>Indicanos el nombre de tu quiz perra</Text>
					<TextInput
						style={{
							height: 40,
							borderColor: 'gray',
							borderWidth: 1,
						}}
						onChangeText={(text) => setTitle(text)}
						value={title}
					/>
					<Text>Descripcion</Text>
					<TextInput
						style={{
							height: 40,
							borderColor: 'gray',
							borderWidth: 1,
						}}
						onChangeText={(text) => setDescription(text)}
						value={description}
					/>
					<Text>Imagen</Text>
					<Text>Categorias</Text>
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
