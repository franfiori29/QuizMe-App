import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	View,
	RefreshControl,
	ActivityIndicator,
	Platform,
} from 'react-native';
import * as Linking from 'expo-linking';
import {
	getQuizzes,
	getQuizByCategory,
	clearfilteredQuizzes,
	getRandomQuiz,
	getQuizzesByPopularity,
	getSuggestedQuizzes,
	getFollowingQuizzes,
	clearCurrentQuiz,
} from '@redux/reducers/quizzes';
import { getCategories, sortCategories } from '../../redux/reducers/categories';
import {
	getCompletedQuizzes,
	getFollowers,
	getFollowing,
	setNotificationToken,
	setNotificationTokenUser,
} from '../../redux/reducers/user';
import * as Notifications from 'expo-notifications';
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

//==>Notifications
import { registerForPushNotificationsAsync } from '@constants/notifications';
import { useFocusEffect } from '@react-navigation/native';

import { deepLinking } from '@constants/deeplinking';

Notifications.setNotificationHandler({
	handleNotification: async () => ({
		shouldShowAlert: true,
		shouldPlaySound: true,
		shouldSetBadge: false,
	}),
});

const HomeScreen = ({ navigation, route: { playTheme } }) => {
	const { completedQuiz, info: user } = useSelector((state) => state.user);
	const { theme, language, sound } = useSelector((state) => state.global);
	const { quizzes } = useSelector((state) => state.quiz);
	const { categories } = useSelector((state) => state.categories);
	const dispatch = useDispatch();
	const s = strings[language];
	const [categoryLoading, setCategoryLoading] = useState(false);
	const [notification, setNotification] = useState(false);
	const responseListener = useRef();
	const [quizzesLoading, setQuizzesLoading] = useState(false);
	const [selector, setSelector] = useState('suggested');
	const [route, setRoute] = useState('');
	const [param, setParam] = useState('');

	const extractToken = (url) => {
		if (typeof url !== 'string') return null;
		let { path } = Linking.parse(url);

		if (path) {
			const rou = path.split('=')[0];
			setRoute(rou);
			const paramUrl = path.split('=')[1];
			setParam(paramUrl);
		}
	};

	Linking.getInitialURL().then((url) => extractToken(url));
	Linking.addEventListener('url', (url) => extractToken(url));

	useEffect(() => {
		deepLinking(route, param, navigation);
	}, [route]);

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
		registerForPushNotificationsAsync().then((token) => {
			if (Platform.OS !== 'web') {
				dispatch(setNotificationToken(token));
				dispatch(setNotificationTokenUser(token));
			}
		});
		setQuizzesLoading(true);
		// dispatch(getQuizzes()).then(() => {
		// 	setQuizzesLoading(false);
		// });
		dispatch(getSuggestedQuizzes(language === 'en')).then(() => {
			setQuizzesLoading(false);
		});
		dispatch(getFollowing());
		dispatch(getFollowers());
		dispatch(getCategories(language));
		dispatch(getCompletedQuizzes());
		sound && playTheme();
		responseListener.current = Notifications.addNotificationResponseReceivedListener(
			(response) => {
				setNotification(response);
			}
		);
		return () => {
			Notifications.removeNotificationSubscription(responseListener);
		};
	}, []);

	useFocusEffect(
		React.useCallback(() => {
			dispatch(clearCurrentQuiz());
		}, [])
	);

	useEffect(() => {
		if (notification) {
			const notifPush = notification.notification.request.content.data;
			setNotification(null);
			navigation.navigate(notifPush.path, notifPush.payload);
		}
	}, [notification]);

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
							switch (selector) {
								case 'suggested':
									dispatch(
										getSuggestedQuizzes(language === 'en')
									);
									break;
								case 'popular':
									dispatch(
										getQuizzesByPopularity(
											language === 'en'
										)
									);
									break;
							}
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
						<SelectorButton
							onPress={() => {
								setQuizzesLoading(true);
								setSelector('feed');
								dispatch(
									getFollowingQuizzes(language === 'en')
								).then(() => {
									setQuizzesLoading(false);
								});
							}}
						>
							<SelectorText
								style={{
									paddingBottom: 5,
									borderBottomWidth:
										selector === 'feed' ? 3 : 0,
									borderBottomColor: theme.primary,
								}}
							>
								{s.selector0}
							</SelectorText>
						</SelectorButton>
						<SelectorButton
							onPress={() => {
								setQuizzesLoading(true);
								setSelector('suggested');
								dispatch(
									getSuggestedQuizzes(language === 'en')
								).then(() => {
									setQuizzesLoading(false);
								});
							}}
						>
							<SelectorText
								style={{
									paddingBottom: 5,
									borderBottomWidth:
										selector === 'suggested' ? 3 : 0,
									borderBottomColor: theme.primary,
								}}
							>
								{s.selector1}
							</SelectorText>
						</SelectorButton>
						<SelectorButton
							onPress={() => {
								setQuizzesLoading(true);
								setSelector('popular');
								dispatch(
									getQuizzesByPopularity(language === 'en')
								).then(() => {
									setQuizzesLoading(false);
								});
							}}
						>
							<SelectorText
								style={{
									paddingBottom: 5,
									borderBottomWidth:
										selector === 'popular' ? 3 : 0,
									borderBottomColor: theme.primary,
								}}
							>
								{s.popular}
							</SelectorText>
						</SelectorButton>
					</SelectorContainer>
					{quizzesLoading ? (
						// <Spinner
						// 	visible={quizzesLoading}
						// 	textContent={s.loading}
						// 	color={theme.white}
						// 	textStyle={{
						// 		color: theme.white,
						// 	}}
						// />
						<View style={{ flex: 1, height: 200, marginTop: 20 }}>
							<ActivityIndicator
								size='large'
								color={theme.primary}
							/>
						</View>
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
							navigation.navigate('QuizIndex', { quizId: null });
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
	width: 33%;
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
