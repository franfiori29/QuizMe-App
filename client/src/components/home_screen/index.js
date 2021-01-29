import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, RefreshControl } from 'react-native';
import {
	getQuizzes,
	getQuizByCategory,
	clearfilteredQuizzes,
	getRandomQuiz,
	getQuizzesByPopularity,
} from '@redux/reducers/quizzes';
import { getCategories } from '../../redux/reducers/categories';
import { getCompletedQuizzes } from '../../redux/reducers/user';

//==> Components
import QuizCards from '@components/utils/QuizCards';
import ScrollCategory from '@components/utils/ScrollCategory';
import ButtonPpal from '@components/utils/ButtonPpal';
import NavBar from '@components/utils/NavBar';

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
	const { quizzes, filteredQuizzes } = useSelector((state) => state.quiz);
	const { categories } = useSelector((state) => state.categories);
	const dispatch = useDispatch();
	const s = strings[language];

	const handleSelect = (categoryId) => {
		if (categoryId === '') return dispatch(clearfilteredQuizzes());
		dispatch(getQuizByCategory(categoryId));
	};

	useEffect(() => {
		dispatch(getQuizzes());
		dispatch(getCategories());
		dispatch(getCompletedQuizzes());
		if (sound) {
			playTheme();
		}
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<Screen
				centerContent={true}
				refreshControl={
					<RefreshControl
						refreshing={false}
						onRefresh={() => {
							dispatch(getQuizzes());
							dispatch(getCategories());
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
						¡{s.title} {user.firstName} {user.lastName} !
					</IntroTitle>
					<IntroText>{s.introTitle}</IntroText>
				</IntroContainer>
				<ButtonPpal
					string={s.createQuiz}
					nav='QuizMake'
					navigation={navigation}
				/>
				<View>
					<SelectorContainer>
						<SelectorButton>
							<SelectorText>{s.selector1}</SelectorText>
						</SelectorButton>
						<SelectorButton
							onPress={() => {
								dispatch(getQuizzesByPopularity());
							}}
						>
							<SelectorText>{s.popular}</SelectorText>
						</SelectorButton>
					</SelectorContainer>
					<QuizCards
						quizzes={quizzes}
						completedQuiz={completedQuiz}
					/>
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
					<QuizCards quizzes={filteredQuizzes} />
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
					navigation={navigation}
					string={s.randomButton}
					nav='QuizIndex'
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
`;
const Header = styled.View`
	width: 95%;
	align-self: center;
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
	font-weight: bold;
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
	font-size: 20px;
	text-align: center;
	text-transform: uppercase;
	color: ${(props) => props.theme.primary};
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
	border-radius: 10px;
`;

const CategoryTitle = styled.Text`
	font-size: 20px;
	font-weight: bold;
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
