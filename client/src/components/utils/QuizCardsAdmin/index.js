import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import strings from '@components/admin_panel/strings';
import { Platform, Vibration, View } from 'react-native';
import { destroyQuiz, getQuizzes } from '../../../redux/reducers/quizzes';
import Icon from 'react-native-vector-icons/Ionicons';

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
								quizId: quiz._id,
							});
						}}
					>
						<QuizImg
							source={{
								uri: quiz.image,
							}}
						/>
						<QuizInfo>
							<View>
								<QuizTitle
									numberOfLines={1}
									ellipsizeMode='tail'
								>
									{quiz.title}
								</QuizTitle>
								<StyledText
									numberOfLines={1}
									ellipsizeMode='tail'
								>
									{quiz.description}
								</StyledText>
							</View>
							<Buttons>
								<Button
									onPress={async () => {
										await dispatch(
											destroyQuiz({ quizId: quiz._id })
										);
										dispatch(
											getQuizzes({ notShuffle: true })
										);
									}}
								>
									<Icon
										name={'ios-trash'}
										size={28}
										color={theme.wrong}
									/>
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
	font-family: 'Nunito_400Regular';
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
	flex: 1;
	height: 100%;
	padding: 5px 15px;
	justify-content: space-between;
`;

const QuizTitle = styled.Text`
	font-size: 16px;
	font-family: 'Nunito_800ExtraBold';
	color: ${(props) => props.theme.text};
	margin-top: 3px;
`;

const Buttons = styled.TouchableOpacity`
	flex-direction: row;
`;

const Button = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
`;
const ButtonText = styled.Text`
	text-transform: uppercase;
	font-family: 'Nunito_600SemiBold';
	color: ${(props) => props.theme.text};
`;

export default QuizCardsAdmin;
