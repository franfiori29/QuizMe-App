import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

//Styles
import styled, { ThemeProvider } from 'styled-components/native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

//Assets
import strings from './strings';

const Achivements = () => {
	const { theme, language } = useSelector((state) => state.global);
	const { userQuizzes, completedQuiz, info, likedQuiz } = useSelector(
		(state) => state.user
	);
	const s = strings[language];
	const Bronze = 'rgb(176,141,87)';
	const Silver = 'rgb(190,194,203)';
	const Gold = 'rgb(212,175,55)';

	return (
		<ThemeProvider theme={theme}>
			<View style={{ width: '100%' }}>
				{/* --------Perfil de Usuario-------- */}
				{info.validated && (
					<AchivCard>
						<View style={{ width: '50%' }}>
							<Icon
								color={theme.primary}
								name='badge'
								size={50}
							/>
						</View>
						<AchivInfo>
							<AchivText
								style={{
									textTransform: 'uppercase',
									fontWeight: 'bold',
								}}
							>
								{s.achiv9Title}
							</AchivText>
							<AchivText>{s.achiv9Text}</AchivText>
						</AchivInfo>
					</AchivCard>
				)}
				{info.premium && (
					<AchivCard>
						<View style={{ width: '50%' }}>
							<Icon
								color={theme.primary}
								name='badge'
								size={50}
							/>
						</View>
						<AchivInfo>
							<AchivText
								style={{
									textTransform: 'uppercase',
									fontWeight: 'bold',
								}}
							>
								{s.achiv10Title}
							</AchivText>
							<AchivText>{s.achiv10Text}</AchivText>
						</AchivInfo>
					</AchivCard>
				)}
				{/* --------Creacion de Quizzes-------- */}
				{userQuizzes?.length >= 1 && (
					<AchivCard>
						<View style={{ width: '50%' }}>
							<Icon color={Bronze} name='badge' size={50} />
						</View>
						<AchivInfo>
							<AchivText
								style={{
									textTransform: 'uppercase',
									fontWeight: 'bold',
								}}
							>
								{s.achiv1Title}
							</AchivText>
							<AchivText>{s.achiv1Text}</AchivText>
						</AchivInfo>
					</AchivCard>
				)}
				{userQuizzes?.length >= 5 && (
					<AchivCard>
						<View style={{ width: '50%' }}>
							<Icon color={Silver} name='badge' size={50} />
						</View>
						<AchivInfo>
							<AchivText
								style={{
									textTransform: 'uppercase',
									fontWeight: 'bold',
								}}
							>
								{s.achiv2Title}
							</AchivText>
							<AchivText>{s.achiv2Text}</AchivText>
						</AchivInfo>
					</AchivCard>
				)}
				{userQuizzes?.length >= 10 && (
					<AchivCard>
						<View style={{ width: '50%' }}>
							<Icon color={Gold} name='badge' size={50} />
						</View>
						<AchivInfo>
							<AchivText
								style={{
									textTransform: 'uppercase',
									fontWeight: 'bold',
								}}
							>
								{s.achiv3Title}
							</AchivText>
							<AchivText>{s.achiv3Text}</AchivText>
						</AchivInfo>
					</AchivCard>
				)}
				{userQuizzes?.length >= 25 && (
					<AchivCard>
						<View style={{ width: '50%' }}>
							<Icon
								color={theme.primary}
								name='badge'
								size={50}
							/>
						</View>
						<AchivInfo>
							<AchivText
								style={{
									textTransform: 'uppercase',
									fontWeight: 'bold',
								}}
							>
								{s.achiv4Title}
							</AchivText>
							<AchivText>{s.achiv4Text}</AchivText>
						</AchivInfo>
					</AchivCard>
				)}
				{/* --------Quizzes jugadas-------- */}
				{completedQuiz?.length >= 1 && (
					<AchivCard>
						<View style={{ width: '50%' }}>
							<Icon color={Bronze} name='badge' size={50} />
						</View>
						<AchivInfo>
							<AchivText
								style={{
									textTransform: 'uppercase',
									fontWeight: 'bold',
								}}
							>
								{s.achiv5Title}
							</AchivText>
							<AchivText>{s.achiv5Text}</AchivText>
						</AchivInfo>
					</AchivCard>
				)}
				{completedQuiz?.length >= 5 && (
					<AchivCard>
						<View style={{ width: '50%' }}>
							<Icon color={Silver} name='badge' size={50} />
						</View>
						<AchivInfo>
							<AchivText
								style={{
									textTransform: 'uppercase',
									fontWeight: 'bold',
								}}
							>
								{s.achiv6Title}
							</AchivText>
							<AchivText>{s.achiv6Text}</AchivText>
						</AchivInfo>
					</AchivCard>
				)}
				{completedQuiz?.length >= 20 && (
					<AchivCard>
						<View style={{ width: '50%' }}>
							<Icon color={Gold} name='badge' size={50} />
						</View>
						<AchivInfo>
							<AchivText
								style={{
									textTransform: 'uppercase',
									fontWeight: 'bold',
								}}
							>
								{s.achiv7Title}
							</AchivText>
							<AchivText>{s.achiv7Text}</AchivText>
						</AchivInfo>
					</AchivCard>
				)}
				{completedQuiz?.length >= 50 && (
					<AchivCard>
						<View style={{ width: '50%' }}>
							<Icon
								color={theme.primary}
								name='badge'
								size={50}
							/>
						</View>
						<AchivInfo>
							<AchivText
								style={{
									textTransform: 'uppercase',
									fontWeight: 'bold',
								}}
							>
								{s.achiv8Title}
							</AchivText>
							<AchivText>{s.achiv8Text}</AchivText>
						</AchivInfo>
					</AchivCard>
				)}
				{/* ---------LikedQuiz-------- */}
				{likedQuiz?.length >= 1 && (
					<AchivCard>
						<View style={{ width: '50%' }}>
							<Icon color={Bronze} name='badge' size={50} />
						</View>
						<AchivInfo>
							<AchivText
								style={{
									textTransform: 'uppercase',
									fontWeight: 'bold',
								}}
							>
								{s.achiv11Title}
							</AchivText>
							<AchivText>{s.achiv11Text}</AchivText>
						</AchivInfo>
					</AchivCard>
				)}
				{likedQuiz?.length >= 5 && (
					<AchivCard>
						<View style={{ width: '50%' }}>
							<Icon color={Silver} name='badge' size={50} />
						</View>
						<AchivInfo>
							<AchivText
								style={{
									textTransform: 'uppercase',
									fontWeight: 'bold',
								}}
							>
								{s.achiv12Title}
							</AchivText>
							<AchivText>{s.achiv12Text}</AchivText>
						</AchivInfo>
					</AchivCard>
				)}
				{likedQuiz?.length >= 20 && (
					<AchivCard>
						<View style={{ width: '50%' }}>
							<Icon color={Gold} name='badge' size={50} />
						</View>
						<AchivInfo>
							<AchivText
								style={{
									textTransform: 'uppercase',
									fontWeight: 'bold',
								}}
							>
								{s.achiv13Title}
							</AchivText>
							<AchivText>{s.achiv13Text}</AchivText>
						</AchivInfo>
					</AchivCard>
				)}
				{completedQuiz?.length >= 50 && (
					<AchivCard>
						<View style={{ width: '50%' }}>
							<Icon
								color={theme.primary}
								name='badge'
								size={50}
							/>
						</View>
						<AchivInfo>
							<AchivText
								style={{
									textTransform: 'uppercase',
									fontWeight: 'bold',
								}}
							>
								{s.achiv14Title}
							</AchivText>
							<AchivText>{s.achiv14Text}</AchivText>
						</AchivInfo>
					</AchivCard>
				)}
			</View>
		</ThemeProvider>
	);
};

const AchivCard = styled.View`
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
const AchivInfo = styled.View`
	height: 100%;
	padding: 15px;
	width: 50%;
	justify-content: space-around;
`;

const AchivText = styled.Text`
	color: ${(props) => props.theme.text};
	text-align: center;
	font-family: 'Nunito_600SemiBold';
`;

export default Achivements;
