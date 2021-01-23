import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, Button } from 'react-native';
import { getQuizzes } from '@redux/reducers/quizzes';

//==> Styles
import Icon from 'react-native-vector-icons/Ionicons';
import styled, { ThemeProvider } from 'styled-components/native';

//Assets
import strings from './strings';

const HomeScreen = ({ navigation }) => {
	const { info: user } = useSelector((state) => state.user);
	const { theme, language } = useSelector((state) => state.global);
	const { quizzes, categories } = useSelector((state) => state.quiz);
	const dispatch = useDispatch();
	const s = strings[language];

	useEffect(() => {
		dispatch(getQuizzes());
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Screen centerContent={true}>
				<Header>
					<HeaderButton
						onPress={() => navigation.navigate('UserMenu')}
					>
						<Icon
							name='ios-menu-outline'
							color={theme.primary}
							size={28}
						/>
					</HeaderButton>
					<StyledText style={{ fontSize: 20, color: theme.primary }}>
						QuizMeApp
					</StyledText>
					<HeaderButton>
						<Icon
							name='ios-search-outline'
							color={theme.primary}
							size={28}
						/>
					</HeaderButton>
				</Header>
				<IntroContainer>
					<IntroImg
						source={{ uri: 'https://picsum.photos/100/100' }}
					/>
					<IntroTitle>
						¡{s.title} {user.firstName} {user.lastName} !
					</IntroTitle>
					<IntroText>{s.introTitle}</IntroText>
				</IntroContainer>
				<View>
					<SelectorContainer>
						<SelectorButton>
							<SelectorText>{s.selector1}</SelectorText>
						</SelectorButton>
						<SelectorButton>
							<SelectorText>{s.selector2}</SelectorText>
						</SelectorButton>
					</SelectorContainer>
					<QuizCards>
						{!!quizzes.length &&
							quizzes.map((quiz) => (
								<QuizCard
									key={quiz._id}
									onPress={() =>
										navigation.navigate('QuizIndex', {
											quiz,
										})
									}
								>
									<QuizImg
										source={{
											uri: quiz.image,
										}}
									/>
									<QuizInfo>
										<QuizTitle>{quiz.title}</QuizTitle>
										<StyledText>
											{quiz.description}
										</StyledText>
										<StyledText>
											{quiz.likes} Likes
										</StyledText>
									</QuizInfo>
									<QuizCheck>
										<Text style={{ color: theme.primary }}>
											{s.completed}
										</Text>
										<Icon
											name='checkmark-circle-outline'
											size={20}
											style={{ color: theme.primary }}
										/>
									</QuizCheck>
								</QuizCard>
							))}
					</QuizCards>
				</View>
				<CategoryContainer>
					<CategoryImg
						source={{ uri: 'https://picsum.photos/75/75' }}
					/>
					<CategoryTitle>{s.search}</CategoryTitle>
				</CategoryContainer>
				<View>
					<ScrollCategory
						horizontal={true}
						centerContent={true}
						overScrollMode='never'
					>
						{categories.map((category) => (
							<Category key={category._id}>
								<CategoryName>
									{category[`description_${language}`]}
								</CategoryName>
							</Category>
						))}
					</ScrollCategory>
				</View>
				<QuizCards>
					<QuizCard onPress={() => navigation.navigate('QuizIndex')}>
						<QuizImg
							source={{ uri: 'https://picsum.photos/100/100' }}
						/>
						<QuizInfo>
							<QuizTitle>Titulo del Quiz</QuizTitle>
							<StyledText>Descripcion breve del Quiz</StyledText>
							<StyledText>
								Jugado 77898798 Veces - 1903 Likes
							</StyledText>
						</QuizInfo>
						<QuizCheck>
							<StyledText>{s.completed}</StyledText>
							<Icon
								name='checkmark-circle-outline'
								size={20}
								style={{ color: theme.primary }}
							/>
						</QuizCheck>
					</QuizCard>
					<QuizCard onPress={() => navigation.navigate('QuizIndex')}>
						<QuizImg
							source={{ uri: 'https://picsum.photos/100/100' }}
						/>
						<QuizInfo>
							<QuizTitle>Titulo del Quiz</QuizTitle>
							<StyledText>Descripcion breve del Quiz</StyledText>
							<StyledText>
								Jugado 77898798 Veces - 1903 Likes
							</StyledText>
						</QuizInfo>
						<QuizCheck>
							<StyledText>{s.completed}</StyledText>
							<Icon
								name='checkmark-circle-outline'
								size={20}
								style={{ color: theme.primary }}
							/>
						</QuizCheck>
					</QuizCard>
				</QuizCards>
				<CategoryContainer>
					<CategoryImg
						source={{ uri: 'https://picsum.photos/75/75' }}
					/>
					<CategoryTitle>{s.find}</CategoryTitle>
				</CategoryContainer>
				<Button
					color={theme.primary}
					title={s.randomButton}
					style={{ margin: '40px auto' }}
					onPress={() => navigation.navigate('QuizIndex')}
				/>
				<BottomBar>
					<StyledText style={{ fontSize: 20, color: theme.primary }}>
						QuizMeApp
					</StyledText>
				</BottomBar>
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

const IntroImg = styled.Image`
	z-index: 3;
	height: 150px;
	width: 150px;
	border-radius: 100px;
`;

const IntroTitle = styled.Text`
	font-size: 24px;
	font-weight: bold;
	text-align: center;
	color: ${(props) => props.theme.primary};
`;

const IntroText = styled.Text`
	text-align: center;
	padding: 0 10px;
	color: ${(props) => props.theme.text};
`;

const SelectorContainer = styled.View`
	width: 100%;
	flex-direction: row;
`;

const SelectorButton = styled.TouchableOpacity`
	width: 50%;
	height: 65px;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
	border-top-width: 1px;
	border-top-color: #ccc;
	align-items: center;
	justify-content: center;
`;

const SelectorText = styled.Text`
	font-size: 20px;
	text-align: center;
	text-transform: uppercase;
	color: ${(props) => props.theme.primary};
`;

const QuizCards = styled.View`
	width: 100%;
`;
const QuizCard = styled.TouchableOpacity`
	width: 100%;
	height: 100px;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
	align-items: center;
	flex-direction: row;
	padding: 0 10px;
`;

const QuizImg = styled.Image`
	z-index: 3;
	height: 70px;
	width: 70px;
	border-radius: 25px;
`;

const QuizInfo = styled.View`
	height: 100%;
	padding: 15px;
	justify-content: space-around;
`;

const QuizTitle = styled.Text`
	font-size: 18px;
	font-weight: bold;
	color: ${(props) => props.theme.text};
`;

const QuizCheck = styled.View`
	position: absolute;
	top: 5px;
	right: 5px;
	flex-direction: row-reverse;
	align-items: center;
`;
const CategoryContainer = styled.View`
	height: 150px;
	width: 100%;
	align-items: center;
	justify-content: space-around;
	margin: 20px 0;
`;

const CategoryImg = styled.Image`
	z-index: 3;
	height: 75px;
	width: 75px;
	border-radius: 25px;
`;

const CategoryTitle = styled.Text`
	font-size: 20px;
	font-weight: bold;
	text-align: center;
	color: ${(props) => props.theme.text};
`;

const ScrollCategory = styled.ScrollView`
	border-top-width: 1px;
	border-top-color: #ccc;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
	height: 80px;
`;

const Category = styled.TouchableOpacity`
	height: 60px;
	width: 200px;
	margin: auto 20px;
	border: 2px solid ${(props) => props.theme.primary};
	justify-content: center;
	align-items: center;
`;

const CategoryName = styled.Text`
	font-size: 18px;
	text-align: center;
	text-transform: uppercase;
	color: ${(props) => props.theme.primary};
`;

const BottomBar = styled.View`
	width: 100%;
	height: 50px;
	padding: 10px;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-top: 20px;
	border-top-width: 1px;
	border-top-color: #ccc;
`;
export default HomeScreen;
