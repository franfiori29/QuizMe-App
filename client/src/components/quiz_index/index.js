import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import strings from './strings';
import { getQuiz } from '@redux/reducers/quizzes';
import { Vibrate } from '@utils/vibration';
import logo from '@assets/logo.png';

//Styles
import styled, { ThemeProvider } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';

//Components
import SocialMedia from '@components/utils/SocialMedia';
import * as Animatable from 'react-native-animatable';
import { ActivityIndicator } from 'react-native';

const QuizIndex = ({ navigation, route: { params } }) => {
	const { theme, language, vibration } = useSelector((state) => state.global);
	const s = strings[language];
	const { randomQuiz } = useSelector((state) => state.quiz);
	let { quiz } = useSelector((state) => state.quiz);
	const dispatch = useDispatch();

	useEffect(() => {
		params.quizId && dispatch(getQuiz(params.quizId));
	}, []);

	if (!params.quizId) quiz = randomQuiz;

	const [place1, place2, place3] = quiz?.highScores || [];
	const Bronze = 'rgb(176,141,87)';
	const Silver = 'rgb(190,194,203)';
	const Gold = 'rgb(212,175,55)';
	return (
		<ThemeProvider theme={theme}>
			<ScrollView
				contentContainerStyle={{ flexGrow: 1 }}
				style={{ flex: 1, backgroundColor: theme.bg }}
			>
				{/* <Spinner
					visible={!quiz || Object.keys(quiz).length === 0}
					textContent={s.loading}
					color={theme.white}
					textStyle={{
						color: theme.text,
					}}
				/> */}
				{(!quiz || Object.keys(quiz).length === 0) && (
					<ActivityIndicator
						size='large'
						color={theme.primary}
						style={{
							position: 'absolute',
							left: 0,
							right: 0,
							top: '50%',
						}}
					/>
				)}
				{!!quiz && Object.keys(quiz).length && !quiz.error ? (
					<ContainerPpal animation='fadeIn'>
						<ContainerTop>
							<Banner source={{ uri: quiz.image }} />
							<BackButtonContainer
								onPress={() => navigation.replace('Home')}
							>
								<Icon
									name='ios-arrow-back'
									color={theme.text}
									size={28}
								/>
							</BackButtonContainer>
							<Title>{quiz.title}</Title>
							<TouchableOpacity
								onPress={() => {
									Vibrate(100, vibration);

									navigation.navigate('PublicProfile', {
										userId: quiz.creatorId._id,
									});
								}}
								style={{
									flexDirection: 'row',
									marginTop: 10,
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Text
									style={{
										color: theme.text,
										fontFamily: 'Nunito_600SemiBold',
										fontSize: 16,
									}}
								>
									by{' '}
								</Text>
								<Text
									style={{
										color: theme.text,
										fontFamily: 'Nunito_600SemiBold',
										fontSize: 16,
									}}
								>
									{quiz.creatorId.firstName}{' '}
									{quiz.creatorId.lastName}
								</Text>
								<Image
									style={{
										height: 20,
										width: 20,
										borderRadius: 100,
										marginLeft: 5,
									}}
									source={
										quiz.creatorId.profilePic
											? {
													uri:
														quiz.creatorId
															.profilePic,
											  }
											: logo
									}
								/>
							</TouchableOpacity>
							<QuantityContainer>
								<Text
									style={{
										color: theme.primary,
										fontFamily: 'Nunito_600SemiBold',
										fontSize: 16,
										textAlign: 'center',
									}}
								>
									{quiz.questions.length} {s.quest}
								</Text>
								<Text
									style={{
										color: theme.primary,
										fontFamily: 'Nunito_600SemiBold',
										fontSize: 16,
										textAlign: 'center',
									}}
								>
									{quiz.likes} Likes
								</Text>
							</QuantityContainer>
						</ContainerTop>
						<ContainerBottom>
							<Description>{quiz.description}</Description>
							<View
								style={{
									flexDirection: 'column',
									alignItems: 'center',
								}}
							>
								<StartButton
									onPress={() =>
										navigation.replace('Quiz', {
											questions: quiz.questions,
											imageQuiz: quiz.image,
											time: quiz.time,
											id: quiz._id,
											language: quiz.language,
										})
									}
								>
									<Text
										adjustsFontSizeToFit={true}
										style={{
											color: theme.primary,
											fontFamily: 'Nunito_800ExtraBold',
											textTransform: 'uppercase',
										}}
									>
										{s.startBtn}
									</Text>
								</StartButton>
								<View style={{ width: 300 }}>
									<SocialMedia
										shareOptions={{
											title: s.title,
											message: `${
												s.message
											} ${'\n'}https://tenor.com/view/cats-animals-reaction-wow-surprised-gif-4076137`,
										}}
									/>
								</View>
							</View>
						</ContainerBottom>
						<RankingScreen>
							<RankingTitle>Ranking</RankingTitle>
							<View style={{ width: '100%' }}>
								<RankingCard>
									<View style={{ width: '50%' }}>
										<Icon2
											style={{
												justifyContent: 'center',
											}}
											name='medal'
											color={Gold}
											size={70}
										/>
									</View>
									<RankingInfo>
										<RankingText
											style={{
												textTransform: 'uppercase',
												fontWeight: 'bold',
											}}
										>
											{place1
												? `${place1.user.firstName} ${place1.user.lastName}`
												: s.nobody}
										</RankingText>
										<RankingText style={{ fontSize: 20 }}>
											{place1 ? place1.score : '0'}
										</RankingText>
									</RankingInfo>
								</RankingCard>
								<RankingCard>
									<View style={{ width: '50%' }}>
										<Icon2
											style={{
												justifyContent: 'center',
											}}
											name='medal'
											color={Silver}
											size={70}
										/>
									</View>
									<RankingInfo>
										<RankingText
											style={{
												textTransform: 'uppercase',
												fontWeight: 'bold',
											}}
										>
											{place2
												? `${place2.user.firstName} ${place2.user.lastName}`
												: s.nobody}
										</RankingText>
										<RankingText style={{ fontSize: 20 }}>
											{place2 ? place2.score : '0'}
										</RankingText>
									</RankingInfo>
								</RankingCard>
							</View>
							<RankingCard>
								<View style={{ width: '50%' }}>
									<Icon2
										style={{
											justifyContent: 'center',
										}}
										name='medal'
										color={Bronze}
										size={70}
									/>
								</View>
								<RankingInfo>
									<RankingText
										style={{
											textTransform: 'uppercase',
											fontWeight: 'bold',
										}}
									>
										{place3
											? `${place3.user.firstName} ${place3.user.lastName}`
											: s.nobody}
									</RankingText>
									<RankingText style={{ fontSize: 20 }}>
										{place3 ? place3.score : '0'}
									</RankingText>
								</RankingInfo>
							</RankingCard>
						</RankingScreen>
					</ContainerPpal>
				) : (
					<BackButtonContainer
						onPress={() => navigation.replace('Home')}
					>
						<Icon
							name='ios-arrow-back'
							color={theme.text}
							size={28}
						/>
					</BackButtonContainer>
				)}
			</ScrollView>
		</ThemeProvider>
	);
};

const ContainerPpal = styled(Animatable.View)`
	flex: 1;
	align-items: center;
	background-color: ${(props) => props.theme.bg};
`;

const ContainerTop = styled.View`
	height: 300px;
	width: 100%;
	justify-content: space-between;
	align-items: center;
`;

const ContainerBottom = styled.View`
	height: 300px;
	width: 100%;
	justify-content: space-around;
	align-items: center;
`;

const BackButtonContainer = styled.TouchableOpacity`
	position: absolute;
	background-color: ${(props) => props.theme.bg};
	border-bottom-right-radius: 5px;
	border-bottom-color: #ccc;
	border-right-color: #ccc;
	width: 50px;
	height: 50px;
	left: 0;
	top: 0;
	color: white;
	align-items: center;
	justify-content: center;
`;

const Title = styled.Text`
	font-size: 30px;
	text-align: center;
	text-transform: uppercase;
	color: ${(props) => props.theme.primary};
	font-family: 'Nunito_800ExtraBold';
`;

const QuantityContainer = styled.View`
	width: 60%;
	align-self: center;
	height: 80px;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
`;

const Description = styled.Text`
	text-align: center;
	font-size: 20px;
	color: ${(props) => props.theme.text};
	font-family: 'Nunito_600SemiBold';
	padding: 0 3px;
	margin-top: 60px;
`;

const StartButton = styled.TouchableOpacity`
	border: 2px solid ${(props) => props.theme.primary};
	padding: 10px;
	width: 300px;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	margin-bottom: 15px;
`;
const ShareButton = styled(SocialMedia)`
	border: 2px solid ${(props) => props.theme.primary};
	padding: 10px;
	width: 300px;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
`;

const RankingScreen = styled.View`
	padding: 15px;
`;
const RankingTitle = styled.Text`
	text-align: center;
	font-size: 20px;
	text-align: center;
	text-transform: uppercase;
	margin-top: 10px;
	color: ${(props) => props.theme.primary};
	font-family: 'Nunito_800ExtraBold';
`;
const RankingCard = styled.TouchableOpacity`
	width: 100%;
	height: 100px;
	border: 1px solid ${(props) => props.theme.primary};
	align-items: center;
	justify-content: space-around;
	flex-direction: row;
	padding: 0 40px;
	margin: 15px;
	border-radius: 10px;
	align-self: center;
`;
const RankingInfo = styled.View`
	height: 100%;
	padding: 15px;
	width: 50%;
	justify-content: space-around;
`;

const RankingText = styled.Text`
	color: ${(props) => props.theme.text};
	text-align: center;
`;

const Banner = styled.Image`
	height: 70%;
	width: 100%;
`;

export default QuizIndex;
