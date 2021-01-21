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
	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Login'>
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen name='SignUp' component={SignUp} />
				<Stack.Screen name='Home' component={HomeScreen} />
				<Stack.Screen name='QuizIndex' component={QuizIndex} />
				<Stack.Screen options={{headerShown: true}} name='Quiz' component={Quiz} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default HomeRoutes;
