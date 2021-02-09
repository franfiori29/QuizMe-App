import React from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

//==> Components
import NavBar from '@components/utils/NavBar';

//==> Styles
import styled, { ThemeProvider } from 'styled-components/native';
import logo from '@assets/logo.png';

//==>Assets
import validationS from './strings/validationS';

const ValidateScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const { language, theme } = useSelector((state) => state.global);
	const { info: user } = useSelector((state) => state.user);
	const s = validationS[language];

	return (
		<ThemeProvider theme={theme}>
			<Screen>
				<NavBar
					string={s.nav}
					nav1={() => navigation.goBack()}
					icon1='ios-arrow-back'
					icon2=''
				/>
				<IntroContainer>
					<UserImg
						source={
							user.profilePic
								? {
										uri: user.profilePic,
								  }
								: logo
						}
					/>
					<IntroTitle>{s.title}</IntroTitle>
				</IntroContainer>
				<DescriptionContainer>
					<DescriptionText>{s.text}</DescriptionText>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Logo source={logo} />
						<Btn
							onPress={() => navigation.navigate('ValidateForm')}
						>
							<BtnText>{s.btn}</BtnText>
						</Btn>
					</View>
				</DescriptionContainer>
			</Screen>
		</ThemeProvider>
	);
};

const Screen = styled.View`
	background-color: ${(props) => props.theme.bg};
	flex: 1;
`;

const UserImg = styled.Image`
	z-index: 3;
	height: 150px;
	width: 150px;
	border-radius: 100px;
	margin-top: 30px;
`;

const IntroContainer = styled.View`
	width: 95%;
	align-self: center;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;
`;

const IntroTitle = styled.Text`
	font-size: 24px;
	text-align: center;
	color: ${(props) => props.theme.primary};
	margin: 10px auto;
	font-family: 'Nunito_800ExtraBold';
`;

const DescriptionContainer = styled.View`
	width: 95%;
	align-self: center;
	border-radius: 10px;
	flex: 1;
	justify-content: space-between;
`;

const DescriptionText = styled.Text`
	font-size: 18px;
	color: ${(props) => props.theme.text};
	text-align: center;
	margin: 70px auto;
	font-family: 'Nunito_600SemiBold';
`;

const Logo = styled.Image`
	width: 75px;
	height: 75px;
	opacity: 0.7;
`;

const Btn = styled.TouchableOpacity`
	height: 40px;
	width: 70%;
	margin: 10px auto;
	border: 3px solid ${(props) => props.theme.primary};
	border-radius: 10px;
`;

const BtnText = styled.Text`
	color: ${(props) => props.theme.primary};
	font-weight: bold;
	text-align: center;
	font-size: 18px;
	margin: auto;
	font-family: 'Nunito_600SemiBold';
`;

export default ValidateScreen;
