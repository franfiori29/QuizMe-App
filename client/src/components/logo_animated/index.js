import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Dimensions, Animated } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import logo from '@assets/logo.png';

const DURATION = 2000;

export default function LogoAnimated({ navigation }) {
	const theme = useSelector((state) => state.global.theme);
	const { info: user } = useSelector((state) => state.user);

	const moveAnim = useRef(new Animated.Value(0)).current;
	const fadeAnim = useRef(new Animated.Value(0)).current;

	const skipIntro = () => {
		navigation.replace(!!Object.keys(user).length ? 'Home' : 'Login');
	};

	useEffect(() => {
		let logotimer = setTimeout(() => {
			skipIntro();
		}, DURATION * 2);
		return () => clearTimeout(logotimer);
	}, []);

	useEffect(() => {
		Animated.sequence([
			Animated.timing(moveAnim, {
				duration: DURATION,
				toValue: Dimensions.get('window').width / 1.6,
				delay: 0,
				useNativeDriver: false,
			}),
			Animated.timing(moveAnim, {
				duration: DURATION,
				toValue: 0,
				delay: 0,
				useNativeDriver: false,
			}),
		]).start();
		Animated.timing(fadeAnim, {
			duration: DURATION,
			toValue: 1,
			delay: DURATION,
			useNativeDriver: false,
		}).start();
	}, [moveAnim, fadeAnim]);

	return (
		<ThemeProvider theme={theme}>
			<Container onPress={skipIntro}>
				<ContentContainer>
					<ImageLogo style={{ opacity: fadeAnim }} source={logo} />
					<LogoContainer style={{ marginLeft: moveAnim }}>
						<LogoText style={{ fontFamily: 'Roboto_500Medium' }}>
							QuizMe
						</LogoText>
						<LogoText style={{ opacity: fadeAnim }}>App</LogoText>
					</LogoContainer>
				</ContentContainer>
			</Container>
		</ThemeProvider>
	);
}

const Container = styled.TouchableWithoutFeedback`
	flex: 1;
	background-color: ${(props) => props.theme.bg};
`;
const LogoText = styled(Animated.Text)`
	font-size: 35px;
	color: ${(props) => props.theme.text};
	font-weight: 700;
`;
const ContentContainer = styled.View`
	top: 30%;
	align-items: center;
`;
const ImageLogo = styled(Animated.Image)`
	width: 200px;
	height: 200px;
`;
const LogoContainer = styled(Animated.View)`
	flex-direction: row;
`;
