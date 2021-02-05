import React from 'react';
import { View, Text, Alert, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { destroyQuiz } from '@redux/reducers/quizzes';
import { getUserQuizzes } from '@redux/reducers/user';
import { getQuizzes } from '@redux/reducers/quizzes';

/* --- Styles --- */
import styled, { ThemeProvider } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Feather';

//==> Components
import NavBar from '@components/utils/NavBar';

//==>Utils
import strings from './strings';

const MyQuizzes = ({ navigation }) => {
	const { language, theme } = useSelector((state) => state.global);
	const { userQuizzes, info } = useSelector((state) => state.user);

	const s = strings[language];
	const dispatch = useDispatch();

	const removeAccepted = (id) => {
		dispatch(destroyQuiz({ quizId: id })).then(() => {
			dispatch(getUserQuizzes(info._id));
			dispatch(getQuizzes());
		});
	};

	const handleRemove = (id) => {
		if (Platform.OS === 'web') {
			if (confirm('ESTAS SEGURO?????')) {
				removeAccepted(id);
			}
		} else {
			Alert.alert('!!!!', 'Estas seguro?', [
				{
					text: 'Cancel',
					style: 'cancel',
				},
				{
					text: 'OK',
					onPress: () => removeAccepted(id),
				},
			]);
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Screen
				contentContainerStyle={{ flexGrow: 1 }}
				centerContent={true}
			>
				<NavBar
					string={s.nav}
					nav1={() => navigation.goBack()}
					nav2={() => navigation.navigate('SearchScreen')}
					icon1='ios-close'
					icon2='ios-search-outline'
				/>
				<IntroContainer>
					<IntroTitle>{s.title}</IntroTitle>
				</IntroContainer>
				<View style={{ flex: 1 }}>
					{userQuizzes.map((quiz) => (
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
								<View
									style={{
										width: '100%',
										position: 'absolute',
										bottom: 60,
										flexDirection: 'row',
										justifyContent: 'space-between',
										alignItems: 'center',
									}}
								>
									<Category>
										{language === 'es'
											? quiz.categoryId.description_es
											: quiz.categoryId.description_en}
									</Category>
									<View>
										<Text style={{ color: theme.text }}>
											<Icon
												name={'ios-heart-sharp'}
												size={15}
												style={{
													color: theme.primary,
													fontFamily:
														'Nunito_800ExtraBold',
												}}
											/>
											{quiz.likes}
										</Text>
										<Text
											style={{
												color: theme.text,
											}}
										>
											<Icon2
												name={'clock'}
												size={15}
												style={{
													color: theme.primary,
													fontFamily:
														'Nunito_800ExtraBold',
												}}
											/>
											{quiz.time}
										</Text>
									</View>
								</View>
								<BtnContainer>
									<Btn onPress={() => handleRemove(quiz._id)}>
										<BtnText>{s.btn2}</BtnText>
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
	font-family: 'Nunito_800ExtraBold';
	text-align: center;
	color: ${(props) => props.theme.primary};
	padding: 0px 10px;
`;

const QuizContainer = styled.View`
	flex: 1;
	width: 95%;
	align-self: center;
	min-height: 400px;
	max-height: 400px;
	margin: 10px auto;
	border: 3px solid ${(props) => props.theme.primary};
	border-radius: 10px;
`;

const QuizImage = styled.Image`
	height: 40%;
	width: 100%;
	border-radius: 7px;
	border-bottom-left-radius: 0px;
	border-bottom-right-radius: 0px;
`;
const InfoContainer = styled.View`
	width: 100%;
	height: 60%;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
`;
const Title = styled.Text`
	text-align: center;
	font-size: 20px;
	margin: 5px auto;
	color: ${(props) => props.theme.text};
	font-family: 'Nunito_600SemiBold';
`;
const Description = styled.Text`
	margin: auto;
	text-align: center;
	font-size: 14px;
	color: ${(props) => props.theme.text};
	font-family: 'Nunito_400Regular';
`;
const Category = styled.Text`
	color: ${(props) => props.theme.primary};
	font-family: 'Nunito_800ExtraBold';
	font-size: 16px;
	text-transform: uppercase;
`;
const BtnContainer = styled.View`
	flex-direction: row;
	width: 100%;
	margin-bottom: 5px;
`;
const Btn = styled.TouchableOpacity`
	height: 35px;
	/* width: 49%; */
	width: 100%;
	margin: 0 auto;
	background-color: ${(props) => props.theme.primary};
	border-radius: 5px;
`;

const BtnText = styled.Text`
	color: ${(props) => props.theme.white};
	font-family: 'Nunito_800ExtraBold';
	text-align: center;
	margin: auto;
`;
export default MyQuizzes;
