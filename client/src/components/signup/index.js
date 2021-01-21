import React, { useState } from 'react';
import { Dimensions, Text } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

import backgroundImage from '@assets/img/backgroundImage.jpg';
import logoPrueba from '@assets/img/logoPrueba.jpg';

const { width: WIDTH } = Dimensions.get('window');

export default function SignUp({ navigation }) {
	const [hidePass, setHidePass] = useState(true);
	const [errortext, setErrortext] = useState('');
	const onPress = () => setHidePass((prevState) => !prevState);

	const handleLoginPress = () => {
		navigation.navigate('Login');
	};
	const handleSignUpPress = () => {
		navigation.navigate('Home');
	};

	return (
		<Container source={backgroundImage}>
			<LogoView>
				<Logo source={logoPrueba} />
				<LogoText>QuizMe App</LogoText>
			</LogoView>
			<InputContainer>
				<IconImage
					name={'mail-open-outline'}
					size={28}
					color={'rgba(255,255,255,0.7)'}
				/>
				<InputSignUp
					width={WIDTH}
					placeholder={'Email'}
					placeholderTextColor={'rgba(255,255,255,0.7)'}
					underlineColorAndroid='transparent'
				/>
			</InputContainer>
			<InputContainer>
				<IconImage
					name={'ios-person-outline'}
					size={28}
					color={'rgba(255,255,255,0.7)'}
				/>
				<InputSignUp
					width={WIDTH}
					placeholder={'Usuario'}
					placeholderTextColor={'rgba(255,255,255,0.7)'}
					underlineColorAndroid='transparent'
				/>
			</InputContainer>
			<InputContainer>
				<IconImage
					name={'ios-lock-closed-outline'}
					size={28}
					color={'rgba(255,255,255,0.7)'}
				/>
				<InputSignUp
					width={WIDTH}
					placeholder={'Contraseña'}
					secureTextEntry={hidePass}
					placeholderTextColor={'rgba(255,255,255,0.7)'}
					underlineColorAndroid='transparent'
				/>
				<Button onPress={onPress}>
					<Icon
						name={'ios-eye-outline'}
						size={26}
						color={'rgba(255,255,255,0.7)'}
					/>
				</Button>
			</InputContainer>
			<ButtonSignUp width={WIDTH} onPress={handleSignUpPress}>
				<Description>Registrarse</Description>
			</ButtonSignUp>
			<TextView>
				<Text>
					¿Tienes una cuenta?{' '}
					<Text
						style={{ fontWeight: '500', color: 'blue' }}
						onPress={handleLoginPress}
					>
						Iniciar sesión
					</Text>
				</Text>
			</TextView>
		</Container>
	);
}

const Container = styled.ImageBackground`
	flex: 1;
	justify-content: center;
	align-items: center;
	width: null;
	height: null;
`;
const LogoView = styled.View`
	align-items: center;
	margin-bottom: 40px;
`;
const Logo = styled.Image`
	width: 100px;
	height: 100px;
`;
const LogoText = styled.Text`
	color: white;
	font-size: 30px;
	font-weight: 500;
	margin-top: 10px;
	opacity: 0.5;
`;
const InputContainer = styled.View`
	margin-top: 10px;
`;
const InputSignUp = styled.TextInput`
	width: ${(props) => props.width - 55}px;
	height: 45px;
	font-size: 16px;
	padding-left: 45px;
	background-color: rgba(0, 0, 0, 0.35);
	color: rgba(255, 255, 255, 0.7);
	margin: 0 25px;
`;
const IconImage = styled(Icon)`
	position: absolute;
	top: 8px;
	left: 38px;
`;
const Button = styled.TouchableOpacity`
	position: absolute;
	top: 8px;
	right: 38px;
`;
const ButtonSignUp = styled.TouchableOpacity`
	width: ${(props) => props.width - 55}px;
	height: 45px;
	background-color: #000000;
	justify-content: center;
	margin-top: 20px;
	padding: 1rem 4.6rem;
`;
const Description = styled.Text`
	color: rgba(255, 255, 255, 0.7);
	font-size: 16;
	text-align: center;
`;
const TextView = styled.View`
	align-items: center;
	margin-top: 20px;
`;
