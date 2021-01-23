import React from 'react';
import { View, Text } from 'react-native';

const QuizResults = ({ route: { params } }) => {
	return (
		<View>
			<Text>TERMINASTE</Text>
			<Text>
				Aciertos: {params.correct} de {params.total}
			</Text>
		</View>
	);
};

export default QuizResults;
