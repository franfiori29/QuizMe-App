import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { Platform } from 'react-native';

//~~~Components~~~
import Ricky from '@components/easter_eggs/Ricky'
import QuizIndex from '@components/quiz_index';
import Quiz from '@components/quiz';
import HomeScreen from '@components/home_screen';
import SearchScreen from '@components/search_screen';
import Login from '@components/login';
import SignUp from '@components/signup';
import UserMenu from '@components/user_menu';
import MailUpdate from '@components/user_menu/screens/MailUpdate';
import PasswordUpdate from '@components/user_menu/screens/PasswordUpdate';
import UpdateName from '@components/user_menu/screens/UpdateName';
import Information from '@components/user_menu/screens/Information';
import Profile from '@components/profile';
import MyQuizzes from '@components/my_quizzes';
import QuizMake from '@components/quiz_make';
import QuizResults from '@components/quiz_results';
import LogoAnimated from '@components/logo_animated';
import { setToken } from '@redux/reducers/user';
import QuizMakeDetails from '@components/quiz_make/details';
import QuizMakeQuestions from '@components/quiz_make/questions';

import mainThemeFile from '@assets/audio/main-theme.mp3';
import { Audio } from 'expo-av';


const HomeRoutes = () => {
	const dispatch = useDispatch();
	const [mainTheme, setMainTheme] = React.useState();
	useEffect(() => {
		if (Platform.OS === 'web') {
			const token = new URLSearchParams(window.location.search).get(
				'jwt'
			);
			if (token) {
				dispatch(setToken(token));
				dispatch(getUser());
			}
		}
		(async()=>{
			const { sound } = await Audio.Sound.createAsync(mainThemeFile, {
				isLooping: true, volume: 0.7
			});
			setMainTheme(sound);
		})()
	}, []);

	const playTheme = () => {
		mainTheme?.playAsync()
	}
	
	const stopTheme = () => {
		mainTheme?.stopAsync()
	}

	const { Navigator, Screen } = createStackNavigator();
	//initialRouteName={!!Object.keys(user).length ? 'Home' : 'Login'} (por si lo borran y se olvidan)
	return (
		<NavigationContainer>
			<Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName={'LogoAnimated'}
			>
				<Screen name='Login' component={Login} />
				<Screen name='SignUp' component={SignUp} />
				<Screen name='Home' component={HomeScreen} options={({route}) => {
					route.playTheme = playTheme;
				}} />
				<Screen name='SearchScreen' component={SearchScreen} />
				<Screen name='UserMenu' component={UserMenu} options={({route}) => {
					route.stopTheme = stopTheme, 
					route.playTheme = playTheme;
				}} />
				<Screen name='MailUpdate' component={MailUpdate} />
				<Screen name='PasswordUpdate' component={PasswordUpdate} />
				<Screen name='Information' component={Information} />
				<Screen name='UpdateName' component={UpdateName} />
				<Screen name='MyQuizzes' component={MyQuizzes} />
				<Screen name='QuizMake' component={QuizMake} />
				<Screen
					name='QuizMakeQuestions'
					component={QuizMakeQuestions}
				/>
				<Screen name='QuizMakeDetails' component={QuizMakeDetails} />
				<Screen name='QuizIndex' component={QuizIndex} />
				<Screen name='QuizResults' component={QuizResults}/>
				<Screen name='Quiz' component={Quiz} options={({route}) => {
					route.playTheme = playTheme;
					route.stopTheme = stopTheme;
				}} />
				<Screen name='Profile' component={Profile} />
				<Screen name='LogoAnimated' component={LogoAnimated} />
				<Screen name='Ricky' component={Ricky} />
			</Navigator>
		</NavigationContainer>
	);
};

export default HomeRoutes;
