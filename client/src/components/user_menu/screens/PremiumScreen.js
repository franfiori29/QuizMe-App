import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { premiumUser } from '@redux/reducers/user';

//==> Components
import NavBar from '@components/utils/NavBar';

//==> Styles
import styled, { ThemeProvider } from 'styled-components/native';
import logo from '@assets/logo.png';
import Icon from 'react-native-vector-icons/Ionicons';
//==>Assets
import premiumS from './strings/premiumS';

const PremiumScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const { language, theme } = useSelector((state) => state.global);
	const s = premiumS[language];
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
					<IntroImg source={logo} />
					<IntroTitle>{s.title}</IntroTitle>
					<IntroText>{s.intro}</IntroText>
				</IntroContainer>
				<PremiumInfo>
					<Info>
						<Icon
							color='skyblue'
							name='ios-library'
							size={40}
							style={{ justifyContent: 'center' }}
						/>
						<InfoText>{s.cont1}</InfoText>
					</Info>
					<Info>
						<Icon
							color='tomato'
							name='ios-heart-circle-sharp'
							size={40}
							style={{ justifyContent: 'center' }}
						/>
						<InfoText>{s.cont2}</InfoText>
					</Info>

					<Info>
						<Icon
							color='yellow'
							name='ios-star'
							size={40}
							style={{ justifyContent: 'center' }}
						/>
						<InfoText>{s.cont4}</InfoText>
					</Info>
					<BtnContainer>
						<Btn
							onPress={() =>
								dispatch(premiumUser()).then(
									alert('sos premium'),
								)
							}
						>
							<BtnText>{s.btn}</BtnText>
						</Btn>
					</BtnContainer>
				</PremiumInfo>
			</Screen>
		</ThemeProvider>
	);
};

const Screen = styled.View`
	background-color: ${(props) => props.theme.bg};
	flex: 1;
`;

const IntroContainer = styled.View`
	height: 230px;
	width: 95%;
	align-self: center;
	align-items: center;
	justify-content: center;
	margin: 30px 0;
`;

const IntroImg = styled.Image`
	z-index: 3;
	height: 150px;
	width: 150px;
	border-radius: 100px;
`;

const IntroTitle = styled.Text`
	font-size: 24px;
	font-family: 'Nunito_800ExtraBold';
	text-align: center;
	color: ${(props) => props.theme.primary};
	margin-bottom: 10px;
`;

const IntroText = styled.Text`
	text-align: center;
	padding: 0 10px;
	max-width: 95%;
	align-self: center;
	color: ${(props) => props.theme.text};
	font-family: 'Nunito_400Regular';
`;

const PremiumInfo = styled.View`
	width: 80%;
	height: 100%;
	align-self: center;
`;
const Info = styled.View`
	width: 100%;
	height: 50px;
	align-self: center;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	border: 3px solid ${(props) => props.theme.primary};
	border-radius: 10px;
	margin: 5px 0;
`;

const InfoText = styled.Text`
	font-family: 'Nunito_600SemiBold';
	color: ${(props) => props.theme.text};
`;

const BtnContainer = styled.View`
	flex-direction: row;
	width: 100%;
	margin-bottom: 5px;
`;
const Btn = styled.TouchableOpacity`
	height: 50px;
	width: 100%;
	margin: 30px auto;
	background-color: ${(props) => props.theme.primary};
	border-radius: 10px;
`;

const BtnText = styled.Text`
	color: ${(props) => props.theme.white};
	font-family: 'Nunito_800ExtraBold';
	text-align: center;
	font-size: 18px;
	margin: auto;
`;
export default PremiumScreen;
