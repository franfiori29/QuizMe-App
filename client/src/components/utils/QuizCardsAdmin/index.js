import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import strings from '@components/admin_panel/strings';
import { Platform, Vibration } from 'react-native';
import { destroyQuiz, getQuizzes } from '../../../redux/reducers/quizzes';

const QuizCardsAdmin = () => {
	const navigation = useNavigation();
	const { theme, language } = useSelector((state) => state.global);
	const { quizzes } = useSelector((state) => state.quiz);
	const s = strings[language];
	const dispatch = useDispatch();

	return (
		<QuizCardsContainer>
			{quizzes &&
				!!quizzes.length &&
				quizzes.map((quiz) => (
					<QuizCard
						key={quiz._id}
						onPress={() => {
							if (Platform.OS === 'android') {
								Vibration.vibrate(100);
							}

							navigation.navigate('QuizIndex', {
								quiz,
							});
						}}
					>
						<QuizImg
							source={{
								uri: quiz.image,
							}}
						/>
						<QuizInfo>
							<QuizTitle numberOfLines={1} ellipsizeMode='tail'>
								{quiz.title}
							</QuizTitle>
							<StyledText numberOfLines={2} ellipsizeMode='tail'>
								{quiz.description}
							</StyledText>
							<Buttons>
								<Button
									bgColor={theme.wrong}
									onPress={async () => {
										await dispatch(
											destroyQuiz({ quizId: quiz._id }),
										);
										dispatch(
											getQuizzes({ notShuffle: true }),
										);
									}}
								>
									<ButtonText>{s.deleteQuiz}</ButtonText>
								</Button>
							</Buttons>
						</QuizInfo>
					</QuizCard>
				))}
		</QuizCardsContainer>
	);
};

const StyledText = styled.Text`
	color: ${(props) => props.theme.text};
`;

const QuizCardsContainer = styled.View`
	width: 95%;
	align-self: center;
`;
const QuizCard = styled.TouchableOpacity`
	width: 100%;
	height: 120px;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
	align-items: center;
	flex-direction: row;
	padding: 15px 10px 10px 0px;
`;

const QuizImg = styled.Image`
	z-index: 3;
	height: 80px;
	width: 80px;
	border-radius: 10px;
`;

const QuizInfo = styled.View`
	height: 100%;
	width: 85%;
	padding: 0 15px;
	justify-content: space-around;
`;

const QuizTitle = styled.Text`
	font-size: 16px;
	font-weight: bold;
	color: ${(props) => props.theme.text};
	margin-top: 3px;
`;

const Buttons = styled.TouchableOpacity`
	flex: 1;
	flex-wrap: wrap;
	flex-direction: row;
`;

const Button = styled.TouchableOpacity`
	width: 95%;
	align-self: center;
	background-color: ${({ bgColor }) => bgColor};
	align-items: center;
	justify-content: center;
	padding: 10px;
	border-radius: 5px;
`;
const ButtonText = styled.Text`
	text-transform: uppercase;
	font-weight: bold;
	color: ${(props) => props.theme.white};
`;

export default QuizCardsAdmin;
