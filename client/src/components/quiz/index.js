import React from 'react';
import { View, Text } from 'react-native';

const Quiz = ({ route }) => {
	console.log(route);
	//const { id } = route.params; //me traigo el id de params
	return (
		<View>
			<Text>Esto es un quiz :D</Text>
		</View>
	);
};

export default Quiz;
