import React, { useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

//==> Styles
import styled, { ThemeProvider } from 'styled-components/native';

//==> Components
import NavBar from '@components/utils/NavBar';
import SocialMedia from '@components/utils/SocialMedia';
import LikeButton from '@components/utils/LikeButton';

import strings from './strings';
import { updateLike, getRandomQuiz, getQuizzes } from '@redux/reducers/quizzes';
import { updateLikedQuizzes } from '@redux/reducers/user';
import { getSuggestedQuizzes } from '../../redux/reducers/quizzes';

//==>Notifications
import { sendPushNotification } from '@constants/notifications';

const QuizResults = ({ route: { params }, navigation }) => {
	const { theme, language } = useSelector((state) => state.global);
	const { info: user } = useSelector((state) => state.user);
	const s = strings[language];
	const dispatch = useDispatch();
	const likes = useSelector((state) => state.user.likedQuiz);
	const { newHighscore } = useSelector((state) => state.quiz.quiz);

	const isLiked = likes && likes.some((like) => like === params.quizId);

	const porcentajeAprobadas = (params.correct * 100) / params.total;
	const incorrectas = params.total - params.correct;
	function emoji() {
		if (porcentajeAprobadas >= 90) return '😎';
		if (porcentajeAprobadas >= 80) return '😁';
		if (porcentajeAprobadas >= 60) return '😀';
		if (porcentajeAprobadas >= 30) return '🧐';
		return '😶';
	}

	useEffect(() => {
		sendPushNotification(
			user.notificationToken,
			s.notificationTitle,
			`${s.notificationMessage} 💪`,
			{ path: 'Home' }
		);
	}, []);

	const handleOnFavorite = (giveLike) => {
		dispatch(updateLike({ quizId: params.quizId, giveLike })).then(() =>
			dispatch(updateLikedQuizzes({ quizId: params.quizId, giveLike }))
		);
	};

	return (
		<ThemeProvider theme={theme}>
			<ScrollView
				contentContainerStyle={{ flexGrow: 1 }}
				style={{ flex: 1, backgroundColor: theme.bg }}
			>
				<NavBar
					string=''
					nav1={() => navigation.replace('Home')}
					nav2={() => navigation.replace('Home')}
					icon1='ios-arrow-back'
				/>

				<FinishedTitle>{s.result}</FinishedTitle>
				<ContainerResults>
					<EmojiContainer>{emoji()}</EmojiContainer>
					<AmountPoints>
						<Text
							style={{
								fontSize: 14,
								fontFamily: 'Nunito_800ExtraBold',
								textAlign: 'center',
								color: theme.text,
							}}
						>
							{s.msj1} {params.points} {s.msj2}
						</Text>
						{newHighscore && (
							<HighScoreBadge>
								<Text
									style={{
										fontSize: 14,
										color: theme.white,
										fontFamily: 'Nunito_800ExtraBold',
									}}
								>
									{language === 'es'
										? 'Nuevo Puntaje Alto!🎉'
										: 'New High Score!🎉'}
								</Text>
							</HighScoreBadge>
						)}
					</AmountPoints>
					<ProgressBar>
						<ProgressBarText>
							{porcentajeAprobadas.toFixed(1)}%
						</ProgressBarText>
						<ProgressBarFill
							percent={porcentajeAprobadas}
						></ProgressBarFill>
					</ProgressBar>
				</ContainerResults>
				<AnswersNumberContainer>
					<AnswersCorrect>
						<AnswersNumber>{params.correct}</AnswersNumber>
						<AnswersText>
							{params.correct === 1 ? s.corr : s.corrs}
						</AnswersText>
					</AnswersCorrect>
					<AnswersIncorrect>
						<AnswersNumber>{incorrectas}</AnswersNumber>
						<AnswersText>
							{incorrectas === 1 ? s.wrong : s.wrongs}
						</AnswersText>
					</AnswersIncorrect>
				</AnswersNumberContainer>
				<FavoriteContainer>
					<FavoriteText>{s.like}</FavoriteText>
					<ViewSocialMedia
						style={{
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<LikeButton
							handleOnFavorite={handleOnFavorite}
							isLiked={isLiked}
						/>
						<View style={{ width: 120 }}>
							<SocialMedia
								shareOptions={{
									title: s.title,
									message: `${s.message} ${params.points} ${
										s.messagepoints
									} ${'\n'}https://tenor.com/view/what-confused-persian-room-cat-guardian-gif-11044457`,
								}}
							/>
						</View>
					</ViewSocialMedia>
				</FavoriteContainer>
				<ButtonsContainer>
					<Btn
						onPress={() =>
							dispatch(getRandomQuiz()).then(() => {
								navigation.replace('QuizIndex', {
									quizId: null,
								});
							})
						}
					>
						<BtnText>{s.btn1}</BtnText>
					</Btn>
					<BtnSec onPress={() => navigation.replace('Home')}>
						<BtnSecText>{s.btn2}</BtnSecText>
					</BtnSec>
				</ButtonsContainer>
			</ScrollView>
		</ThemeProvider>
	);
};

const FinishedTitle = styled.Text`
	font-size: 20px;
	text-align: center;
	font-family: 'Nunito_800ExtraBold';
	margin-top: 20px;
	color: ${({ theme }) => theme.text};
`;

const ContainerResults = styled.View`
	padding: 10px 20px;
`;

const AmountPoints = styled.View`
	width: 95%;
	align-self: center;
	flex-direction: row;
	margin: 10px 0;
	justify-content: space-between;
	align-items: center;
`;

const HighScoreBadge = styled.View`
	background-color: ${({ theme }) => theme.primary};
	padding: 5px;
	border-radius: 5px;
	margin-left: 5px;
`;

const EmojiContainer = styled.Text`
	font-size: 40px;
	text-align: center;
	color: ${(props) => props.theme.text};
	font-family: 'Nunito_800ExtraBold';
`;

const ProgressBar = styled.View`
	background: #ddd;
	width: 100%;
	height: 20px;
	border-radius: 9999px;
	overflow: hidden;
	margin-bottom: 10px;
	position: relative;
`;

const ProgressBarFill = styled.View`
	background-color: #04aa8c;
	width: ${(props) => props.percent + '%'};
	height: ${(props) => (props.percent === 0 ? '0%' : '100%')};
	justify-content: center;
	padding-left: 10px;
`;

const ProgressBarText = styled.Text`
	font-weight: 900;
	font-size: 10px;
	position: absolute;
	top: 50%;
	left: 15px;
	z-index: 2;
	transform: translateY(-7px);
	font-family: 'Nunito_600SemiBold';
`;

const AnswersNumberContainer = styled.View`
	width: 95%;
	align-self: center;
	padding: 0 20px;
	flex-flow: row wrap;
	border-top-color: #ccc;
	border-top-width: 1px;
	border-bottom-color: #ccc;
	border-bottom-width: 1px;
`;

const AnswersCorrect = styled.View`
	padding: 20px 0%;
	flex-basis: 50%;
	text-align: center;
	font-size: 10px;
	border-right-color: #ccc;
	border-right-width: 1px;
`;
const AnswersIncorrect = styled.View`
	padding: 20px 0%;
	flex-basis: 50%;
	text-align: center;
`;

const AnswersNumber = styled.Text`
	align-self: center;
	font-family: 'Nunito_600SemiBold';
	font-size: 12px;
	color: ${(props) => props.theme.text};
	margin-bottom: 5px;
`;

const AnswersText = styled.Text`
	align-self: center;
	font-size: 10px;
	text-transform: uppercase;
	color: ${(props) => props.theme.text};
	margin-bottom: 5px;
	font-family: 'Nunito_800ExtraBold';
`;

const FavoriteContainer = styled.View`
	padding: 20px;
	align-items: center;
	border-bottom-color: #ccc;
	border-bottom-width: 1px;
	width: 95%;
	align-self: center;
`;

const FavoriteText = styled.Text`
	font-family: 'Nunito_800ExtraBold';
	margin-bottom: 10px;
	color: ${(props) => props.theme.text};
`;

const ButtonsContainer = styled.View`
	margin: 30px auto 0;
	padding: 20px;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
`;

const Btn = styled.TouchableOpacity`
	background-color: #04aa8c;
	text-align: center;
	padding: 10px 20px;
	margin-right: 10px;
	border-radius: 5px;
`;
const BtnSec = styled.TouchableOpacity`
	padding: 10px 20px;
	text-align: center;
	border-color: #04aa8c;
	border-width: 2px;
	border-style: solid;
	border-radius: 5px;
`;

const BtnText = styled.Text`
	color: #f7fdff;
	font-family: 'Nunito_800ExtraBold';
	align-self: center;
	margin: auto;
`;

const BtnSecText = styled.Text`
	color: #04aa8c;
	font-family: 'Nunito_800ExtraBold';
	align-self: center;
`;
const ViewSocialMedia = styled.View`
	justify-content: center;
	width: 100%;
	align-self: center;
`;
export default QuizResults;
