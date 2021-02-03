import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, RefreshControl, ActivityIndicator } from 'react-native';
import {
	getQuizzes,
	getQuizByCategory,
	clearfilteredQuizzes,
	getRandomQuiz,
	getQuizzesByPopularity,
} from '@redux/reducers/quizzes';
import { getCategories, sortCategories } from '../../redux/reducers/categories';
import { getCompletedQuizzes } from '../../redux/reducers/user';

//==> Components
import QuizCards from '@components/utils/QuizCards';
import ScrollCategory from '@components/utils/ScrollCategory';
import ButtonPpal from '@components/utils/ButtonPpal';
import NavBar from '@components/utils/NavBar';
import Spinner from 'react-native-loading-spinner-overlay';

//==> Styles
import styled, { ThemeProvider } from 'styled-components/native';
import logo from '@assets/logo.png';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';

//==>Assets
import strings from './strings';

const HomeScreen = ({ navigation, route: { playTheme } }) => {
	const { completedQuiz, info: user } = useSelector((state) => state.user);
	const { theme, language, sound } = useSelector((state) => state.global);
	const { quizzes } = useSelector((state) => state.quiz);
	const { categories } = useSelector((state) => state.categories);
	const dispatch = useDispatch();
	const s = strings[language];
	const [categoryLoading, setCategoryLoading] = useState(false);
	const [quizzesLoading, setQuizzesLoading] = useState(false);

	const handleSelect = (categoryId) => {
		if (categoryId === '') return dispatch(clearfilteredQuizzes());
		setCategoryLoading(true);
		dispatch(getQuizByCategory(categoryId)).then(() => {
			setCategoryLoading(false);
			navigation.navigate('SearchScreen', {
				catHomeScreenFilter: categoryId,
			});
		});
	};

	useEffect(() => {
		setQuizzesLoading(true);
		dispatch(getQuizzes()).then(() => {
			setQuizzesLoading(false);
		});
		dispatch(getCategories(language));
		dispatch(getCompletedQuizzes());
		sound && playTheme();
	}, []);

	console.log(quizzesLoading);
	useEffect(() => {
		dispatch(sortCategories(language));
	}, [language]);

	return (
		<ThemeProvider theme={theme}>
			<Screen
				centerContent={true}
				refreshControl={
					<RefreshControl
						refreshing={false}
						onRefresh={() => {
							dispatch(getQuizzes());
							dispatch(getCategories(language));
						}}
					/>
				}
			>
				<NavBar
					string='QuizMeApp'
					nav1={() => navigation.navigate('UserMenu')}
					nav2={() => {
						navigation.navigate('SearchScreen');
						dispatch(clearfilteredQuizzes());
					}}
					icon1='ios-menu-outline'
					icon2='ios-search-outline'
				/>
				<IntroContainer>
					<IntroImg source={logo} />
					<IntroTitle>
						{s.title} {user.firstName} {user.lastName}!
					</IntroTitle>
					<IntroText>{s.introTitle}</IntroText>
				</IntroContainer>
				<ButtonPpal
					string={s.createQuiz}
					handleNav={() => {
						navigation.navigate('QuizMake');
					}}
				/>
				<View>
					<SelectorContainer>
						<SelectorButton>
							<SelectorText>{s.selector1}</SelectorText>
						</SelectorButton>
						<SelectorButton
							onPress={() => {
								setQuizzesLoading(true);
								dispatch(getQuizzesByPopularity()).then(() => {
									setQuizzesLoading(false);
								});
							}}
						>
							<SelectorText>{s.popular}</SelectorText>
						</SelectorButton>
					</SelectorContainer>
					{quizzesLoading ? (
						<Spinner
							visible={quizzesLoading}
							textContent={s.loading}
							color={theme.white}
							textStyle={{
								color: theme.white,
							}}
						/>
					) : (
						<QuizCards
							quizzes={quizzes}
							completedQuiz={completedQuiz}
						/>
					)}
				</View>
				<CategoryContainer>
					<Icon
						color={theme.text}
						name='ios-library-outline'
						size={70}
						style={{ justifyContent: 'center' }}
					/>
					<CategoryTitle>{s.search}</CategoryTitle>
				</CategoryContainer>
				<View>
					<ScrollCategory
						categories={categories}
						handleSelect={handleSelect}
					/>
					{categoryLoading && (
						<ActivityIndicator size='large' color={theme.primary} />
					)}
				</View>
				<CategoryContainer>
					<Icon2
						color={theme.text}
						name='questioncircleo'
						size={70}
						style={{ justifyContent: 'center' }}
					/>
					<CategoryTitle>{s.find}</CategoryTitle>
				</CategoryContainer>
				<ButtonPpal
					string={s.randomButton}
					onSubmit={() => {
						dispatch(getRandomQuiz()).then(() => {
							navigation.navigate('QuizIndex', {});
						});
					}}
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
	font-family: 'Nunito_600SemiBold';
`;

const IntroContainer = styled.View`
	height: 230px;
	width: 100%;
	align-items: center;
	justify-content: center;
	margin: 30px 0;
`;

const IntroImg = styled.Image`
	z-index: 3;
	height: 150px;
	width: 150px;
	border-radius: 100px;
`;

const IntroTitle = styled.Text`
	font-size: 24px;
	font-family: 'Nunito_800ExtraBold';
	text-align: center;
	color: ${(props) => props.theme.primary};
	margin-bottom: 10px;
`;

const IntroText = styled.Text`
	text-align: center;
	padding: 0 10px;
	max-width: 95%;
	align-self: center;
	color: ${(props) => props.theme.text};
	font-family: 'Nunito_600SemiBold';
`;

const SelectorContainer = styled.View`
	width: 95%;
	align-self: center;
	margin-top: 10px;
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
	font-size: 15px;
	text-align: center;
	text-transform: uppercase;
	color: ${(props) => props.theme.primary};
	font-family: 'Nunito_600SemiBold';
`;

const CategoryContainer = styled.View`
	height: 150px;
	width: 100%;
	align-items: center;
	justify-content: space-around;
	margin: 40px 0 0;
`;

const CategoryImg = styled.Image`
	z-index: 3;
	height: 75px;
	width: 75px;
	border-radius: 10px;
`;

const CategoryTitle = styled.Text`
	font-size: 20px;
	font-family: 'Nunito_600SemiBold';
	text-align: center;
	color: ${(props) => props.theme.text};
`;

const BottomBar = styled.View`
	width: 95%;
	align-self: center;
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
