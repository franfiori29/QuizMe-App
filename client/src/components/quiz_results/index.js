import React, { useState } from 'react';
import { Text, Touchable, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
const QuizResults = ({ route: { params }, navigation }) => {
	const theme = useSelector((state) => state.global.theme);
	const [favorite, setFavorite] = useState(false);

	const porcentajeAprobadas = (params.correct * 100) / params.total;
	const incorrectas = params.total - params.correct;
	function emoji() {
		if (porcentajeAprobadas >= 90) return '😎';
		if (porcentajeAprobadas >= 80) return '😁';
		if (porcentajeAprobadas >= 60) return '😀';
		if (porcentajeAprobadas >= 30) return '😶';
		return '🧐';
	}

	return (
		<>
			<Navbar>
				<TouchableOpacity onPress={() => navigation.navigate('Home')}>
					<Icon
						name='ios-arrow-back'
						size={28}
						color={theme.primary}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Icon
						name='share-social-outline'
						size={28}
						color={theme.primary}
					/>
				</TouchableOpacity>
			</Navbar>
			<ContainerTop bg={params.imageQuiz}>
				<FinishedTitle>
					¡Terminaste el quiz! Acá están tus resultados:
				</FinishedTitle>
			</ContainerTop>

			<ContainerResults>
				<EmojiContainer>{emoji()}</EmojiContainer>
				<ProgressBar>
					<ProgressBarFill percent={porcentajeAprobadas}>
						<ProgressBarText>
							{porcentajeAprobadas.toFixed(1)}%
						</ProgressBarText>
					</ProgressBarFill>
				</ProgressBar>
			</ContainerResults>

			<AnswersNumberContainer>
				<AnswersCorrect>
					<AnswersNumber>{params.correct}</AnswersNumber>
					<AnswersText>Respuestas correctas</AnswersText>
				</AnswersCorrect>
				<AnswersIncorrect>
					<AnswersNumber>{incorrectas}</AnswersNumber>
					<AnswersText>Respuestas incorrectas</AnswersText>
				</AnswersIncorrect>
			</AnswersNumberContainer>

			<FavoriteContainer>
				<FavoriteText>¿Te gustó este quiz?</FavoriteText>
				{/* <Btn>
					<BtnText>❤ Darle like</BtnText>
				</Btn> */}
				<TouchableOpacity
					onPress={() => {
						setFavorite(!favorite);
					}}
				>
					<Icon
						name={
							favorite ? 'heart-circle' : 'heart-circle-outline'
						}
						size={28}
						color={theme.primary}
					/>
				</TouchableOpacity>
			</FavoriteContainer>

			<ButtonsContainer>
				<Btn margin='0 0 20px'>
					<BtnText>Quizzes similares</BtnText>
				</Btn>
				<BtnSec onPress={() => navigation.navigate('Home')}>
					<BtnSecText>Volver al inicio</BtnSecText>
				</BtnSec>
			</ButtonsContainer>
		</>
		// <Text>TERManskdlnINASTE</Text>
		// <Text>
		// 	Aciertos: {params.correct} de {params.total}
		// </Text>
	);
};

const Navbar = styled.View`
	width: 100%;
	height: 65px;
	padding: 10px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
`;

const GoBackButton = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
`;

const ContainerTop = styled.View`
	height: 30%;
	background-image: url(${({ bg }) => bg});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;
`;

const FinishedTitle = styled.Text`
	font-size: 30px;
	color: #fff;
	background-color: var(--clr-primary);
	padding: 10px 20px;
`;

const ContainerResults = styled.View`
	padding: 10px 20px;
`;

const EmojiContainer = styled.Text`
	font-size: 40px;
	text-align: center;
	margin-bottom: 20px;
`;

const ProgressBar = styled.View`
	background: #ddd;
	width: 100%;
	height: 20px;
	border-radius: 9999px;
	overflow: hidden;
	margin-bottom: 10px;
`;

const ProgressBarFill = styled.View`
	background-color: var(--clr-primary);
	width: ${(props) => props.percent + '%'};
	height: 100%;
	justify-content: center;
	padding-left: 10px;
`;

const ProgressBarText = styled.Text`
	font-weight: 900;
	font-size: 10px;
`;

const AnswersNumberContainer = styled.View`
	padding: 0 20px;
	flex-flow: row wrap;
	border-top-color: #ccc;
	border-top-width: 1px;
	border-top-style: solid;
	border-bottom-color: #ccc;
	border-bottom-width: 1px;
	border-bottom-style: solid;
`;

const AnswersCorrect = styled.View`
	padding: 20px 0%;
	flex-basis: 50%;
	text-align: center;
	font-size: 10px;
	border-right-color: #ccc;
	border-right-width: 1px;
	border-right-style: solid;
`;
const AnswersIncorrect = styled.View`
	padding: 20px 0%;
	flex-basis: 50%;
	text-align: center;
`;

const AnswersNumber = styled.Text`
	font-weight: 900;
	font-size: 12px;
`;

const AnswersText = styled.Text`
	font-size: 10px;
	text-transform: uppercase;
`;

const FavoriteContainer = styled.View`
	padding: 20px;
	align-items: center;
	border-bottom-color: #ccc;
	border-bottom-width: 1px;
	border-bottom-style: solid;
`;

const FavoriteText = styled.Text`
	font-weight: 700;
	margin-bottom: 10px;
`;

const ButtonsContainer = styled.View`
	max-width: 50%;
	height: 20%;
	margin: 30px auto 0;
	padding: 20px;
`;

const Btn = styled.TouchableOpacity`
	background-color: var(--clr-primary);
	text-align: center;
	padding: 10px 20px;
	margin: ${({ margin }) => (margin ? margin : '0')};
`;
const BtnSec = styled.TouchableOpacity`
	padding: 10px 20px;
	text-align: center;
	border-color: var(--clr-primary);
	border-width: 2px;
	border-style: solid;
`;

const BtnText = styled.Text`
	color: var(--clr-white);
	font-weight: 700;
`;

const BtnSecText = styled.Text`
	color: var(--clr-primary);
	font-weight: 700;
`;

export default QuizResults;
