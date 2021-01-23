import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import strings from '@components/home_screen/strings';
import { Text } from 'react-native';
const QuizCards = ({ quizzes }) => {
	const { theme, language } = useSelector((state) => state.global);
	const s = strings[language];

	return (
		<QuizCardsContainer>
			{quizzes &&
				!!quizzes.length &&
				quizzes.map((quiz) => (
					<QuizCard
						key={quiz._id}
						onPress={() =>
							navigation.navigate('QuizIndex', {
								quiz,
							})
						}
					>
						<QuizImg
							source={{
								uri: quiz.image,
							}}
						/>
						<QuizInfo>
							<QuizTitle>{quiz.title}</QuizTitle>
							<StyledText>{quiz.description}</StyledText>
							<StyledText>{quiz.likes} Likes</StyledText>
						</QuizInfo>
						<QuizCheck>
							<Text style={{ color: theme.primary }}>
								{s.completed}
							</Text>
							<Icon
								name='checkmark-circle-outline'
								size={20}
								style={{ color: theme.primary }}
							/>
						</QuizCheck>
					</QuizCard>
				))}
		</QuizCardsContainer>
	);
};

const StyledText = styled.Text`
	color: ${(props) => props.theme.text};
`;

const QuizCardsContainer = styled.View`
	width: 100%;
`;
const QuizCard = styled.TouchableOpacity`
	width: 100%;
	height: 100px;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
	align-items: center;
	flex-direction: row;
	padding: 0 10px;
`;

const QuizImg = styled.Image`
	z-index: 3;
	height: 70px;
	width: 70px;
	border-radius: 25px;
`;

const QuizInfo = styled.View`
	height: 100%;
	padding: 15px;
	justify-content: space-around;
`;

const QuizTitle = styled.Text`
	font-size: 18px;
	font-weight: bold;
	color: ${(props) => props.theme.text};
`;

const QuizCheck = styled.View`
	position: absolute;
	top: 5px;
	right: 5px;
	flex-direction: row-reverse;
	align-items: center;
`;

export default QuizCards;
