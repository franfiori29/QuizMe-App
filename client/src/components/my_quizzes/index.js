import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

/* --- Styles --- */
import styled, { ThemeProvider } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Feather';

//==> Components
import NavBar from '@components/utils/NavBar';

//==>Utils
import s from './strings';

const MyQuizzes = ({ navigation, route: { params } }) => {
	const { language, theme } = useSelector((state) => state.global);
	console.log(params.quizzes);
	return (
		<ThemeProvider theme={theme}>
			<Screen
				contentContainerStyle={{ flexGrow: 1 }}
				centerContent={true}
			>
				<NavBar
					string='QuizMeApp'
					nav1={() => navigation.goBack()}
					nav2={() => navigation.navigate('SearchScreen')}
					icon1='ios-close'
					icon2='ios-search-outline'
				/>
				<IntroContainer>
					<IntroTitle>
						¡Aqui veras las quizzes que hayas creado!
					</IntroTitle>
				</IntroContainer>
				<View style={{ flex: 1 }}>
					{params.quizzes.map((quiz) => (
						<QuizContainer key={quiz._id}>
							<QuizImage
								source={{
									uri: quiz.image,
								}}
							/>
							<InfoContainer>
								<View
									style={{
										width: '100%',
										alignItems: 'center',
									}}
								>
									<Title
										numberOfLines={2}
										ellipsizeMode='tail'
									>
										{quiz.title}
									</Title>
									<Description
										numberOfLines={4}
										ellipsizeMode='tail'
									>
										{quiz.description}
									</Description>
								</View>
								<Category>
									<Text
										style={{
											color: theme.primary,
											textAlign: 'center',
											margin: 'auto',
											fontWeight: 'bold',
											fontSize: 16,
										}}
									>
										{language === 'es'
											? quiz.categoryId.description_es
											: quiz.categoryId.description_en}
									</Text>
								</Category>
								<View
									style={{
										position: 'absolute',
										right: 10,
										bottom: 60,
									}}
								>
									<Text>
										<Icon
											name={'ios-heart-sharp'}
											size={15}
											style={{ color: theme.primary }}
										/>
										{quiz.likes}
									</Text>
									<Text>
										<Icon2
											name={'clock'}
											size={15}
											style={{ color: theme.primary }}
										/>
										{quiz.time}
									</Text>
								</View>
								<BtnContainer>
									<Btn>
										<BtnText>Editar Quiz</BtnText>
									</Btn>
									<Btn>
										<BtnText>Eliminar Quiz</BtnText>
									</Btn>
								</BtnContainer>
							</InfoContainer>
						</QuizContainer>
					))}
				</View>
			</Screen>
		</ThemeProvider>
	);
};

const Screen = styled.ScrollView`
	align-self: center;
	flex: 1;
	width: 100%;
	background-color: ${(props) => props.theme.bg};
`;

const IntroContainer = styled.View`
	width: 100%;
	align-items: center;
	margin: 20px auto;
`;

const IntroTitle = styled.Text`
	font-size: 24px;
	font-weight: bold;
	text-align: center;
	color: ${(props) => props.theme.primary};
	padding: 0px 10px;
`;

const QuizContainer = styled.View`
	flex: 1;
	width: 95%;
	align-self: center;
	height: 250px;
	margin: 10px auto;
	border: 3px solid ${(props) => props.theme.primary};
	border-radius: 10px;
	flex-direction: row;
`;

const QuizImage = styled.Image`
	height: 100%;
	width: 40%;
	border-top-left-radius: 7px;
	border-bottom-left-radius: 7px;
`;
const InfoContainer = styled.View`
	width: 60%;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
`;
const Title = styled.Text`
	text-align: center;
	font-size: 20px;
	margin: 5px auto;
`;
const Description = styled.Text`
	margin: auto;
	text-align: center;
	font-size: 14px;
`;
const Category = styled.View`
	position: absolute;
	bottom: 60px;
	left: 10px;
	height: 35px;
	width: 150px;
	border: 3px solid ${(props) => props.theme.primary};
	border-radius: 5px;
	justify-content: center;
`;
const BtnContainer = styled.View`
	flex-direction: row;
	width: 100%;
	margin-bottom: 5px;
`;
const Btn = styled.TouchableOpacity`
	height: 35px;
	width: 49%;
	margin: 0 auto;
	background-color: ${(props) => props.theme.primary};
	border-radius: 5px;
`;

const BtnText = styled.Text`
	color: ${(props) => props.theme.white};
	font-weight: bold;
	text-align: center;
	margin: auto;
`;
export default MyQuizzes;
