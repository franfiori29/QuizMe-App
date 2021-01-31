import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import strings from './strings';

//Styles
import styled, { ThemeProvider } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

//Components
import SocialMedia from '@components/utils/SocialMedia';

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

	return (
		<ThemeProvider theme={theme}>
			<ContainerPpal>
				<ContainerTop>
					<Banner source={{ uri: quiz.image }} />
					<BackButtonContainer onPress={() => navigation.goBack()}>
						<Icon
							name='ios-arrow-back'
							color={theme.text}
							size={28}
						/>
					</BackButtonContainer>
					<Title>{quiz.title}</Title>
					<QuantityContainer>
						<TouchableOpacity>
							<Text style={{ color: theme.primary }}>
								{quiz.questions.length} {s.quest}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={{ color: theme.primary }}>
								{quiz.likes} Likes
							</Text>
						</TouchableOpacity>
					</QuantityContainer>
				</ContainerTop>
				<ContainerBottom>
					<Description>{quiz.description}</Description>

					<View
						style={{
							flexDirection: 'row',
							paddingLeft: 45,
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
								style={{ color: theme.primary }}
							>
								{s.startBtn}
							</Text>
						</StartButton>
						<SocialMedia
							size={35}
							styles={{ marginLeft: 15 }}
							shareOptions={{
								title: s.title,
								message: `${
									s.message
								} ${'\n'}https://tenor.com/view/cats-animals-reaction-wow-surprised-gif-4076137`,
							}}
						/>
					</View>
				</ContainerBottom>
			</ContainerPpal>
		</ThemeProvider>
	);
};

const ContainerPpal = styled.View`
	flex: 1;
	align-items: center;
	justify-content: space-between;
	background-color: ${(props) => props.theme.bg};
`;

const ContainerTop = styled.View`
	height: 50%;
	width: 100%;
	justify-content: space-between;
	align-items: center;
`;

const ContainerBottom = styled.View`
	height: 50%;
	width: 100%;
	justify-content: space-around;
	align-items: center;
`;

const BackButtonContainer = styled.TouchableOpacity`
	position: absolute;
	background-color: ${(props) => props.theme.bg};
	border-bottom-right-radius: 5px;
	border: 1px solid transparent;
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
	font-size: 35px;
	text-align: center;
	text-transform: uppercase;
	margin-top: 30px;
	color: ${(props) => props.theme.primary};
`;

const QuantityContainer = styled.View`
	width: 90%;
	height: 20%;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
`;

const Description = styled.Text`
	padding: 20px;
	margin: 20px 0;
	text-align: center;
	color: ${(props) => props.theme.text};
`;

const StartButton = styled.TouchableOpacity`
	border: 2px solid ${(props) => props.theme.primary};
	padding: 10px;
	width: 200px;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
`;

const Banner = styled.Image`
	height: 70%;
	width: 100%;
`;

export default QuizIndex;
