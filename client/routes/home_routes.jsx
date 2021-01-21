import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//~~~Components~~~
import QuizIndex from '../src/components/quiz_index/index';
import Quiz from '../src/components/quiz';
import HomeScreen from '../src/components/home_screen';
import Login from '../src/components/login';
import SignUp from '../src/components/signup';

const HomeRoutes = () => {
	const {Navigator, Screen} = createStackNavigator();

	return (
		<NavigationContainer>
			<Navigator screenOptions={{headerShown: false}} initialRouteName='Login'>
				<Screen name='Login' component={Login} />
				<Screen name='SignUp' component={SignUp} />
				<Screen name='Home' component={HomeScreen} />
				<Screen name='QuizIndex' component={QuizIndex} />
				<Screen name='Quiz' component={Quiz} />
			</Navigator>
		</NavigationContainer>
	);
};

export default HomeRoutes;
