import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

//~~~Components~~~
import QuizIndex from '@components/quiz_index/index';
import Quiz from '@components/quiz';
import HomeScreen from '@components/home_screen';
import Login from '@components/login';
import SignUp from '@components/signup';
import UserMenu from '@components/user_menu';
import Profile from '../src/components/profile';

const HomeRoutes = () => {
	const { Navigator, Screen } = createStackNavigator();
	const { info: user } = useSelector((state) => state.user);
	//initialRouteName={!!Object.keys(user).length ? 'Home' : 'Login'} (por si lo borran y se olvidan)
	return (
		<NavigationContainer>
			<Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName={!!Object.keys(user).length ? 'Home' : 'Login'}
			>
				<Screen name="Login" component={Login} />
				<Screen name="SignUp" component={SignUp} />
				<Screen name="Home" component={HomeScreen} />
				<Screen name="UserMenu" component={UserMenu} />
				<Screen name="QuizIndex" component={QuizIndex} />
				<Screen name="Quiz" component={Quiz} />
				<Screen name="Profile" component={Profile} />

			</Navigator>
		</NavigationContainer>
	);
};

export default HomeRoutes;
