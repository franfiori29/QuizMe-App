import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components/native';

const QuizIndex = ({ navigation, route: { params } }) => {
	const { theme } = useSelector((state) => state.global);
	const quiz = params.quiz;

	return (
		<ThemeProvider theme={theme}>
			<ContainerPpal>
				<ContainerTop>
					<Banner source={{ uri: quiz.image }} />
					<BackButtonContainer
						onPress={() => navigation.navigate('Home')}
					>
						<BackButton>X</BackButton>
					</BackButtonContainer>
					<Title>{quiz.title}</Title>
					<QuantityContainer>
						<TouchableOpacity>
							<Text style={{ color: theme.text }}>
								{quiz.questions.length}Preguntas
							</Text>
						</TouchableOpacity>
						<TouchableOpacity>
							<Text style={{ color: theme.text }}>
								{quiz.likes} Likes
							</Text>
						</TouchableOpacity>
					</QuantityContainer>
				</ContainerTop>
				<ContainerBottom>
					<Description>{quiz.description}</Description>
					<StartButton
						onPress={() =>
							navigation.navigate('Quiz', {
								question: quiz.questions[0],
								imagePapi: quiz.image,
							})
						}
					>
						<Text
							adjustsFontSizeToFit={true}
							style={{ color: theme.text }}
						>
							Start Quiz
						</Text>
					</StartButton>
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
	background-color: rgba(0, 0, 0, 0.7);
	border-radius: 100px;
	width: 50px;
	height: 50px;
	left: 10px;
	top: 10px;
	color: white;
	align-items: center;
	justify-content: center;
`;

const BackButton = styled.Text`
	color: white;
	text-align: center;
	font-weight: 900;
	font-size: 30px;
	color: ${(props) => props.theme.text};
`;

const Title = styled.Text`
	font-size: 35px;
	text-align: center;
	text-transform: uppercase;
	margin-top: 30px;
	color: ${(props) => props.theme.text};
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
	border: 2px solid ${(props) => props.theme.text};
	padding: 10px;
	width: 200px;
	justify-content: center;
	align-items: center;
`;

const Banner = styled.Image`
	height: 70%;
	width: 100%;
`;

export default QuizIndex;
