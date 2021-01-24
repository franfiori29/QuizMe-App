import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { Platform } from 'react-native';

//~~~Components~~~
import QuizIndex from '@components/quiz_index';
import Quiz from '@components/quiz';
import HomeScreen from '@components/home_screen';
import Login from '@components/login';
import SignUp from '@components/signup';
import UserMenu from '@components/user_menu';
import Profile from '@components/profile';
import MyQuizzes from '@components/my_quizzes';
import QuizMake from '@components/quiz_make';
import QuizResults from '@components/quiz_results/index';
import { setToken } from '@redux/reducers/user';

const HomeRoutes = () => {
	const dispatch = useDispatch();
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
	}, []);

	const { Navigator, Screen } = createStackNavigator();
	const { info: user } = useSelector((state) => state.user);
	//initialRouteName={!!Object.keys(user).length ? 'Home' : 'Login'} (por si lo borran y se olvidan)
	return (
		<NavigationContainer>
			<Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName={
					!!Object.keys(user).length ? 'QuizResults' : 'Login'
				}
			>
				<Screen name='Login' component={Login} />
				<Screen name='SignUp' component={SignUp} />
				<Screen name='Home' component={HomeScreen} />
				<Screen name='UserMenu' component={UserMenu} />
				<Screen name='MyQuizzes' component={MyQuizzes} />
				<Screen name='QuizMake' component={QuizMake} />
				<Screen name='QuizIndex' component={QuizIndex} />
				<Screen name='QuizResults' component={QuizResults} />
				<Screen name='Quiz' component={Quiz} />
				<Screen name='Profile' component={Profile} />
			</Navigator>
		</NavigationContainer>
	);
};

export default HomeRoutes;
