import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import strings from '@components/home_screen/strings';
import { Text, Share, View } from 'react-native';
import socialStrings from '@components/quiz_index/strings';
import { Vibrate } from '@utils/vibration';

const QuizCards = ({ quizzes, completedQuiz }) => {
	const navigation = useNavigation();
	const { theme, language, vibration } = useSelector((state) => state.global);
	const s = strings[language];
	const likes = useSelector((state) => state.user.likedQuiz);

	const checkLike = (quizId) => {
		return likes.some((like) => like === quizId);
	};

	const shareSocialMedia = async () => {
		try {
			await Share.share({
				title: socialStrings[language].title,
				message: `${
					socialStrings[language].message
				}${'\n'}https://tenor.com/view/children-pupil-hard-party-drugs-gif-3956833`,
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<QuizCardsContainer>
			{quizzes &&
				!!quizzes.length &&
				quizzes.map((quiz) => (
					<QuizCard
						onLongPress={shareSocialMedia}
						key={quiz._id}
						onPress={() => {
							Vibrate(100, vibration);

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
							<QuizTitle numberOfLines={1} ellipsizeMode='tail'>
								{quiz.title}
							</QuizTitle>
							<StyledText numberOfLines={2} ellipsizeMode='tail'>
								{quiz.description}
							</StyledText>
							<View
								style={{
									marginTop: 'auto',
									justifyContent: 'space-between',
									flexDirection: 'row',
								}}
							>
								<StyledText>
									<Icon
										name={
											checkLike(quiz._id)
												? 'ios-heart-sharp'
												: 'ios-heart-outline'
										}
										size={15}
										style={{
											color: theme.primary,
											marginRight: 3,
										}}
									/>
									{quiz.likes}
								</StyledText>

								{completedQuiz &&
									completedQuiz.some(
										(e) => e._id === quiz._id,
									) && (
										<QuizCheck>
											<Icon
												name='checkmark-circle-outline'
												size={20}
												style={{
													color: theme.primary,
												}}
											/>
											<Text
												style={{
													color: theme.primary,
													fontFamily:
														'Nunito_800ExtraBold',
												}}
											>
												{s.completed}
											</Text>
										</QuizCheck>
									)}
							</View>
						</QuizInfo>
					</QuizCard>
				))}
		</QuizCardsContainer>
	);
};

const StyledText = styled.Text`
	color: ${(props) => props.theme.text};
	font-family: 'Nunito_600SemiBold';
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
	justify-content: flex-start;
`;

const QuizTitle = styled.Text`
	font-size: 16px;
	font-family: 'Nunito_800ExtraBold';
	color: ${(props) => props.theme.text};
	margin-top: 3px;
`;

const QuizCheck = styled.View`
	flex-direction: row;
	align-items: center;
`;

export default QuizCards;
