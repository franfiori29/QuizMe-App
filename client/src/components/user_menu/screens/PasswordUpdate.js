import React, { useState } from 'react';
import { Alert, Platform, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components/native';

//Redux
import { changePassword } from '@redux/reducers/user';

//==> Components
import ButtonPpal from '@components/utils/ButtonPpal';
import NavBar from '@components/utils/NavBar';

const PasswordUpdate = ({ navigation }) => {
	const { theme } = useSelector((state) => state.global);
	const [error, setError] = useState('');
	const [input, setInput] = useState({
		currentPass: '',
		newPass: '',
		confirmPass: '',
	});
	const dispatch = useDispatch();
	// const s = strings[language];
	const handleSubmit = async () => {
		if (input.newPass === input.confirmPass) {
			const response = await dispatch(
				changePassword({
					newPass: input.newPass,
					currPass: input.currentPass,
				})
			);
			if (response.error?.message.includes('Auth Failed'))
				setError('Contraseña Incorrecta');
			else navigation.navigate('UserMenu');
		} else {
			if (Platform.OS !== 'web') {
				Alert.alert(
					'Error',
					'Las contraseñas no coinciden',
					[{ text: 'OK', onPress: () => {} }],
					{ cancelable: false }
				);
			} else {
				alert('Las contraseñas no coinciden');
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
				{!!error && (
					<View style={{ marginHorizontal: 20, marginVertical: 20 }}>
						<BadgeStyled bg='#D53051'>
							Error: {error}
							<br />
							😦
						</BadgeStyled>
					</View>
				)}
				<PassInput
					placeholder='Ingresa tu contraseña actual'
					placeholderTextColor={theme.text}
					onChangeText={(text) =>
						setInput({
							...input,
							currentPass: text,
						})
					}
					value={input.currentPass}
				/>
				<PassInput
					placeholder='Ingresa nueva password'
					placeholderTextColor={theme.text}
					onChangeText={(text) =>
						setInput({
							...input,
							newPass: text,
						})
					}
					value={input.newPass}
				/>
				<PassInput
					placeholder='Confirmar nueva password'
					placeholderTextColor={theme.text}
					onChangeText={(text) =>
						setInput({
							...input,
							confirmPass: text,
						})
					}
					value={input.confirmPass}
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

const BadgeStyled = styled.Text`
	display: inline-block;
	min-width: 175px;
	margin-top: 1em;
	padding: 0.7em 1.2em;
	font-size: 0.75em;
	font-weight: 900;
	text-align: center;
	color: ${({ theme }) => theme.text};
	border-radius: 10em;
	background-color: ${({ bg }) => bg || '#ccc'};
`;
export default PasswordUpdate;
