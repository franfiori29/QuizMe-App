import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components/native';

//Redux
import { updateUser } from '@redux/reducers/user';

//==> Components
import ButtonPpal from '@components/utils/ButtonPpal';
import NavBar from '@components/utils/NavBar';

const PasswordUpdate = ({ navigation }) => {
	const { theme, language } = useSelector((state) => state.global);
	const { info: user } = useSelector((state) => state.user);
	const [password, setPassword] = useState({
		newPass: '',
		currentPass: '',
		confirmPass: '',
	});
	const dispatch = useDispatch();
	// const s = strings[language];
	const handleSubmit = () => {
		if (
			user.password === password.currentPass &&
			password.newPass === password.confirmPass
		) {
			dispatch(updateUser({ password: password.newPassword }));
			navigation.navigate('UserMenu');
		} else {
			if (Platform.OS !== 'web') {
				Alert.alert(
					'Error',
					'Mandaste fruta',
					[{ text: 'OK', onPress: () => {} }],
					{ cancelable: false }
				);
			} else {
				alert('Mandaste fruta');
			}
		}
	};
	return (
		<ThemeProvider theme={theme}>
			<PassScreen>
				<NavBar
					string='Cambiar Contraseña'
					nav1={() => navigation.goBack()}
					icon1='ios-arrow-back'
					icon2=''
				/>
				<PassInput
					placeholder='Ingresa tu contraseña actual'
					placeholderTextColor={theme.text}
					onChangeText={(text) =>
						setPassword({
							...password,
							currentPass: text,
						})
					}
					value={password.currentPass}
				/>
				<PassInput
					placeholder='Ingresa nueva password'
					placeholderTextColor={theme.text}
					onChangeText={(text) =>
						setPassword({
							...password,
							newPass: text,
						})
					}
					value={password.newPass}
				/>
				<PassInput
					placeholder='Confirmar nueva password'
					placeholderTextColor={theme.text}
					onChangeText={(text) =>
						setPassword({
							...password,
							confirmPass: text,
						})
					}
					value={password.confirmPass}
				/>
				<ButtonContainer>
					<ButtonPpal string='enviar' onSubmit={handleSubmit} />
					<ButtonPpal
						string='Cancelar'
						nav='UserMenu'
						navigation={navigation}
					/>
				</ButtonContainer>
			</PassScreen>
		</ThemeProvider>
	);
};

const PassScreen = styled.View`
	flex: 1;
	background-color: ${(props) => props.theme.bg};
`;
const PassInput = styled.TextInput`
	width: 95%;
	align-self: center;
	height: 40px;
	border-color: #ccc;
	border-width: 1px;
	border-radius: 5px;
	color: ${(props) => props.theme.text};
	margin-bottom: 20px;
	padding: 10px;
`;
const ButtonContainer = styled.View`
	width: 100%;
	height: 90px;
	justify-content: space-between;
	align-items: center;
`;
export default PasswordUpdate;
