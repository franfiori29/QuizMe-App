import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text>Home Screen</Text>
			<Button
				title='go to quiz'
				onPress={() => navigation.navigate('QuizIndex')}
			/>
		</View>
	);
};

export default HomeScreen;
