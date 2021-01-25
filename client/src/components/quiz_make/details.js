import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components/native';
import NavBar from '@components/utils/NavBar';
import ButtonPpal from '../utils/ButtonPpal';
import { createQuiz } from '@redux/reducers/quizzes';

const QuizMakeDetails = ({ navigation, route: { params } }) => {
	const dispatch = useDispatch();
	const { theme } = useSelector((state) => state.global);
	const quiz = params.quiz;
	const handleSubmit = () => {
		dispatch(createQuiz(quiz));
		navigation.navigate('Home');
	};
	return (
		<ThemeProvider theme={theme}>
			<Screen centerContent={true}>
				<NavBar
					string='QuizMeApp'
					nav1={() => navigation.navigate('UserMenu')}
					nav2={() => navigation.navigate('UserMenu')}
					icon1='ios-menu-outline'
					icon2='ios-search-outline'
				/>
				<View>
					<Text
						style={{
							fontSize: 30,
							fontWeight: 'bold',
							color: theme.text,
							textAlign: 'center',
						}}
					>
						Detalle de tu quiz
					</Text>
					<View>
						<Text style={{ fontSize: 20, color: theme.primary }}>
							Titulo: {quiz.title}
						</Text>
						<Text style={{ fontSize: 20, color: theme.primary }}>
							Descripción: {quiz.description}
						</Text>
						<Image
							style={{ width: 200, height: 200 }}
							source={{ uri: quiz.image }}
						/>
						<Text style={{ fontSize: 20, color: theme.primary }}>
							Tiempo en cada pregunta: {quiz.time}
						</Text>
						<Text style={{ fontSize: 20, color: theme.primary }}>
							Preguntas
						</Text>
						{quiz.questions.map((question, i) => {
							return (
								<View key={i}>
									<Text
										style={{
											fontSize: 20,
											color: theme.primary,
										}}
									>
										Pregunta: {question.title}
									</Text>
									<Text
										style={{
											fontSize: 20,
											color: theme.primary,
										}}
									>
										Respuesta Correcta:
										{
											question.options.find(
												(option) =>
													option.result === true
											).title
										}
									</Text>
								</View>
							);
						})}
						<ButtonPpal
							string='Finalizar'
							onSubmit={handleSubmit}
							navigation={navigation}
							nav=''
						/>
					</View>
				</View>
			</Screen>
		</ThemeProvider>
	);
};

// PASARLE LA PROPS ROUTES NO ROUTE
// QuizMakeDetails.defaultProps = {
// 	routes: {
// 		params: {
// 			quiz: {
// 				categoryId: '5959e34adf833e1451a00005',
// 				description: 'Demuestra que tan fan eres de rapido y furioso',
// 				image:
// 					'https://therubyhub.com/wp-content/uploads/2019/09/Quiz.jpg',
// 				questions: [
// 					{
// 						title: 'Es la a',
// 						options: [
// 							{
// 								title: 'a',
// 								result: true,
// 							},
// 							{
// 								title: 'b',
// 								result: false,
// 							},
// 							{
// 								title: 'c',
// 								result: false,
// 							},
// 							{
// 								title: 'd',
// 								result: false,
// 							},
// 						],
// 						score: 5,
// 					},
// 					{
// 						title: 'Es la b',
// 						options: [
// 							{
// 								title: 'a',
// 								result: false,
// 							},
// 							{
// 								title: 'b',
// 								result: true,
// 							},
// 							{
// 								title: 'c',
// 								result: false,
// 							},
// 							{
// 								title: 'd',
// 								result: false,
// 							},
// 						],
// 						score: 5,
// 					},
// 					{
// 						title: 'Es la c',
// 						options: [
// 							{
// 								title: 'a',
// 								result: false,
// 							},
// 							{
// 								title: 'b',
// 								result: false,
// 							},
// 							{
// 								title: 'c',
// 								result: true,
// 							},
// 							{
// 								title: 'd',
// 								result: false,
// 							},
// 						],
// 						score: 5,
// 					},
// 					{
// 						title: 'Es la d',
// 						options: [
// 							{
// 								title: 'a',
// 								result: false,
// 							},
// 							{
// 								title: 'b',
// 								result: false,
// 							},
// 							{
// 								title: 'c',
// 								result: false,
// 							},
// 							{
// 								title: 'd',
// 								result: true,
// 							},
// 						],
// 						score: 5,
// 					},
// 				],
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

export default QuizMakeDetails;
