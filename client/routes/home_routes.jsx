import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';

//~~~Components~~~
import QuizIndex from '@components/quiz_index/index';
import Quiz from '@components/quiz';
import HomeScreen from '@components/home_screen';
import Login from '@components/login';
import SignUp from '@components/signup';
import UserMenu from '@components/user_menu';
import Profile from '@components/profile';
import QuizResults from '@components/quiz_results/index';

import { setToken } from '@redux/reducers/user';

const HomeRoutes = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const token = new URLSearchParams(window.location.search).get('jwt');
		if (token) {
			dispatch(setToken(token));
			dispatch(getUser());
		}
	}, []);

	const { Navigator, Screen } = createStackNavigator();
	const { info: user } = useSelector((state) => state.user);
	//initialRouteName={!!Object.keys(user).length ? 'Home' : 'Login'} (por si lo borran y se olvidan)
	return (
		<NavigationContainer>
			<Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName={!!Object.keys(user).length ? 'Home' : 'Login'}
			>
				<Screen name='Login' component={Login} />
				<Screen name='SignUp' component={SignUp} />
				<Screen name='Home' component={HomeScreen} />
				<Screen name='UserMenu' component={UserMenu} />
				<Screen name='QuizIndex' component={QuizIndex} />
				<Screen name='QuizResults' component={QuizResults} />
				<Screen name='Quiz' component={Quiz} />
				<Screen name='Profile' component={Profile} />
			</Navigator>
		</NavigationContainer>
	);
};

export default HomeRoutes;
