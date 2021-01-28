import React from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons';

/* --- Styles --- */
import styled, { ThemeProvider } from 'styled-components/native';

//Utils
import s from './strings';

const MyQuizzes = ({ navigation }) => {
	const { language } = useSelector((state) => state.global);
	const { theme } = useSelector((state) => state.global);
	const dispatch = useDispatch();
	return (
		<ThemeProvider theme={theme}>
			<Screen centerContent={true}>
				<Header>
					<HeaderButton onPress={() => navigation.goBack()}>
						<Icon
							name='ios-arrow-back'
							color={theme.primary}
							size={28}
						/>
					</HeaderButton>
					<StyledText style={{ fontSize: 20, color: theme.primary }}>
						QuizMeApp
					</StyledText>
					<HeaderButton>
						<Icon
							name='ios-search-outline'
							color={theme.primary}
							size={28}
						/>
					</HeaderButton>
				</Header>
				<IntroContainer>
					<IntroTitle>
						¡Aqui veras las quizzes que hayas creado!
					</IntroTitle>
					<Text>Soy una tabla</Text>
				</IntroContainer>
			</Screen>
		</ThemeProvider>
	);
};

const Screen = styled.ScrollView`
	flex: 1;
	background-color: ${(props) => props.theme.bg};
`;

const StyledText = styled.Text`
	color: ${(props) => props.theme.text};
`;

const Header = styled.View`
	width: 100%;
	height: 65px;
	padding: 10px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
`;

const HeaderButton = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
`;

const IntroContainer = styled.View`
	height: 300px;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	margin: 50px 0;
`;

const IntroTitle = styled.Text`
	font-size: 24px;
	font-weight: bold;
	text-align: center;
	color: ${(props) => props.theme.primary};
	padding: 0px 10px;
`;

export default MyQuizzes;
