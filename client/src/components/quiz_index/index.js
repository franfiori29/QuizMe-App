import React from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import strings from './strings';

//Styles
import styled, { ThemeProvider } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';

//Components
import SocialMedia from '@components/utils/SocialMedia';
// import ImageRankingFirst from '@assets/img/firstranking.jpg';
// import ImageRankingSecond from '@assets/img/secondranking.jpg';
// import ImageRankingThird from '@assets/img/thirdranking.jpg';

const QuizIndex = ({ navigation, route: { params } }) => {
	const { theme, language } = useSelector((state) => state.global);
	const s = strings[language];
	const { randomQuiz } = useSelector((state) => state.quiz);
	let quiz;
	if (params.quiz) {
		quiz = params.quiz;
	} else {
		quiz = randomQuiz;
	}
	const [place1, place2, place3] = quiz.highScores;
	const Bronze = 'rgb(176,141,87)';
	const Silver = 'rgb(190,194,203)';
	const Gold = 'rgb(212,175,55)';

	return (
		<ThemeProvider theme={theme}>
			<ScrollView
				contentContainerStyle={{ flexGrow: 1 }}
				style={{ flex: 1, backgroundColor: theme.bg }}
			>
				<ContainerPpal>
					<ContainerTop>
						<Banner source={{ uri: quiz.image }} />
						<BackButtonContainer
							onPress={() => navigation.goBack()}
						>
							<Icon
								name='ios-arrow-back'
								color={theme.text}
								size={28}
							/>
						</BackButtonContainer>
						<Title>{quiz.title}</Title>
						<QuantityContainer>
							<TouchableOpacity>
								<Text
									style={{
										color: theme.primary,
										fontFamily: 'Nunito_600SemiBold',
										fontSize: 16,
									}}
								>
									{quiz.questions.length} {s.quest}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity>
								<Text
									style={{
										color: theme.primary,
										fontSize: 16,
									}}
								>
									{quiz.likes} Likes
								</Text>
							</TouchableOpacity>
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
									navigation.navigate('Quiz', {
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
							<ShareButton
								shareOptions={{
									title: s.title,
									message: `${
										s.message
									} ${'\n'}https://tenor.com/view/cats-animals-reaction-wow-surprised-gif-4076137`,
								}}
							/>
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
			</ScrollView>
		</ThemeProvider>
	);
};

const ContainerPpal = styled.View`
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
	width: 40%;
	height: 80px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
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
