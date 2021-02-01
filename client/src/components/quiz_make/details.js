import React from 'react';
import {
	Image,
	Text,
	TouchableOpacity,
	View,
	Platform,
	Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import fb from '@root/src/firebase';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

//==> Styles
import styled, { ThemeProvider } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

//==> Components
import { createQuiz } from '@redux/reducers/quizzes';
import ButtonPpal from '@components/utils/ButtonPpal';
import NavBar from '@components/utils/NavBar';

//==> Assets
import strings from './strings';

const QuizMakeDetails = ({ navigation, route: { params } }) => {
	const dispatch = useDispatch();
	const { theme, language } = useSelector((state) => state.global);
	const s = strings[language];
	const quiz = params.quiz;

	const handleSubmit = async () => {
		let url;
		let randomID = uuidv4();
		if (quiz.image) {
			try {
				const blob = await new Promise((resolve, reject) => {
					const xhr = new XMLHttpRequest();
					xhr.onload = function () {
						resolve(xhr.response);
					};
					xhr.onerror = function (e) {
						reject(new TypeError('Network request failed'));
					};
					xhr.responseType = 'blob';
					xhr.open('GET', quiz.image, true);
					xhr.send(null);
				});
				const ref = fb.storage().ref(`QuizImage/${randomID}`);
				const snapshot = await ref.put(blob);
				url = await snapshot.ref.getDownloadURL();
				if (Platform.OS !== 'web') {
					blob.close();
				}
			} catch (err) {
				console.log(err);
			}
		}
		quiz.image =
			url || 'https://therubyhub.com/wp-content/uploads/2019/09/Quiz.jpg';
		dispatch(createQuiz(quiz));
		navigation.navigate('Home');
	};

	const confirmSubmit = () => {
		if (Platform.OS === 'web') {
			if (window.confirm(s.youSure)) return handleSubmit();
		} else {
			Alert.alert(s.youSure, s.noEdit, [
				{
					text: 'OK',
					onPress: () => handleSubmit(),
				},
				{
					text: s.cancel,
					style: 'cancel',
				},
			]);
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Screen centerContent={true}>
				<NavBar string={s.nav2} />
				<View>
					<TouchableOpacity
						onPress={() =>
							navigation.navigate('QuizMake', { quiz })
						}
					>
						<Text
							style={{
								fontSize: 28,
								color: theme.text,
								textAlign: 'center',
								marginTop: 20,
								marginBottom: 20,
								fontWeight: 'bold',
								width: '90%',
								alignSelf: 'center',
							}}
						>
							{quiz.title}
						</Text>
					</TouchableOpacity>
					<View>
						<Image
							style={{
								width: '100%',
								height: 200,
								marginBottom: 20,
							}}
							source={{
								uri:
									quiz.image ||
									'https://therubyhub.com/wp-content/uploads/2019/09/Quiz.jpg',
							}}
						/>
						<View
							style={{
								width: '95%',
								alignSelf: 'center',
								alignItems: 'center',
							}}
						>
							<Text
								style={{
									fontSize: 20,
									color: theme.text,
									textAlign: 'center',
									marginBottom: 20,
								}}
							>
								{quiz.description}
							</Text>
							<Text
								style={{
									fontSize: 20,
									color: theme.text,
									marginBottom: 20,
								}}
							>
								{quiz.time} {s.seconds}
							</Text>
							<Text
								style={{
									fontSize: 22,
									fontWeight: 'bold',
									color: theme.text,
									marginBottom: 20,
								}}
							>
								{s.ques}
							</Text>
							{quiz.questions.map((question, i) => {
								return (
									<TouchableOpacity
										key={i}
										onPress={() =>
											navigation.navigate(
												'QuizMakeQuestions',
												{ quiz, edit: i }
											)
										}
									>
										<QuizScreen>
											<View
												style={{
													paddingRight: 10,
													paddingLeft: 10,
													flex: 1,
												}}
											>
												<Text
													style={{
														fontSize: 20,
														color: theme.text,
													}}
												>
													{question.title}
												</Text>
											</View>
											<View
												style={{
													paddingRight: 10,
													paddingLeft: 10,
													flex: 1,
												}}
											>
												<Text
													style={{
														fontSize: 20,
														color: theme.text,
														paddingRight: 20,
													}}
												>
													{
														question.options.find(
															(option) =>
																option.result ===
																true
														).title
													}
												</Text>
												<Icon
													name='checkmark-circle-outline'
													size={20}
													style={{
														color: theme.primary,
														position: 'absolute',
														top: 5,
														right: 5,
													}}
												/>
											</View>
										</QuizScreen>
									</TouchableOpacity>
								);
							})}
						</View>
						<View style={{ marginBottom: 20 }}>
							<ButtonPpal
								string={s.fin}
								onSubmit={confirmSubmit}
							/>
						</View>
					</View>
				</View>
			</Screen>
		</ThemeProvider>
	);
};

//PASARLE LA PROPS ROUTES NO ROUTE
// QuizMakeDetails.defaultProps = {
// 	routes: {
// 		params: {
// 			quiz: {
// 				categoryId: '5959e34adf833e1451a00005',
// 				description: 'Demuestra que tan fan eres de rapido y furioso',
// 				image:
// 					'https://therubyhub.com/wp-content/uploads/2019/09/Quiz.jpg',
// 				language: 'es',
// 				questions: [
// 					{
// 						title: 'Cual es A?',
// 						options: [
// 							{
// 								title: 'A',
// 								result: true,
// 							},
// 							{
// 								title: 'B',
// 								result: false,
// 							},
// 							{
// 								title: 'C',
// 								result: false,
// 							},
// 							{
// 								title: 'D',
// 								result: false,
// 							},
// 						],
// 						score: 5,
// 					},
// 					{
// 						title: 'Cual es B?',
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
// 								title: 'Verdadero',
// 								result: true,
// 							},
// 							{
// 								title: 'Falso',
// 								result: false,
// 							},
// 						],
// 						score: 5,
// 					},
// 					{
// 						title: 'Es la d',
// 						options: [
// 							{
// 								title: 'Verdadero',
// 								result: false,
// 							},
// 							{
// 								title: 'Falso',
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

const QuizScreen = styled.View`
	width: 95%;
	align-self: center;
	margin-bottom: 20px;
	justify-content: flex-start;
	align-items: center;
	flex-direction: row;
`;

export default QuizMakeDetails;
