import React, { useState } from 'react';
import { Alert, Platform, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components/native';

//Redux
import { changeEmail } from '@redux/reducers/user';

//==> Components
import ButtonPpal from '@components/utils/ButtonPpal';
import NavBar from '@components/utils/NavBar';

const MailUpdate = ({ navigation }) => {
	const { theme } = useSelector((state) => state.global);
	const { info } = useSelector((state) => state.user);
	const [error, setError] = useState('');
	const [input, setInput] = useState({
		currMail: '',
		newMail: '',
		pass: '',
	});
	const dispatch = useDispatch();
	// const s = strings[language];
	const handleSubmit = async () => {
		if (input.currMail && input.newMail && input.pass) {
			if (input.currMail === info.email) {
				const response = await dispatch(
					changeEmail({
						newMail: input.newMail,
						currPass: input.pass,
					})
				);

				if (response.error?.message.includes('Auth Failed'))
					setError('Contraseña Incorrecta');
				else navigation.navigate('UserMenu');
			} else {
				if (Platform.OS !== 'web') {
					Alert.alert(
						'Error',
						'El mail no coincide con tu mail actual',
						[{ text: 'OK', onPress: () => {} }],
						{ cancelable: false }
					);
				} else {
					alert('El mail no coincide con tu mail actual');
				}
			}
		} else {
			if (Platform.OS !== 'web') {
				Alert.alert(
					'Error',
					'Debes completar todos los campos para continuar',
					[{ text: 'OK', onPress: () => {} }],
					{ cancelable: false }
				);
			} else {
				alert('Debes completar todos los campos para continuar');
			}
		}
	};
	return (
		<ThemeProvider theme={theme}>
			<MailScreen>
				<NavBar
					string='Cambiar Mail'
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
				<MailInput
					placeholder='Ingresa tu mail actual'
					placeholderTextColor={theme.text}
					onChangeText={(text) =>
						setInput({
							...input,
							currMail: text,
						})
					}
					value={input.currMail}
				/>
				<MailInput
					placeholder='Ingresa Nuevo mail'
					placeholderTextColor={theme.text}
					onChangeText={(text) =>
						setInput({
							...input,
							newMail: text,
						})
					}
					value={input.newMail}
				/>
				<MailInput
					placeholder='Ingresa su contraseña'
					placeholderTextColor={theme.text}
					onChangeText={(text) =>
						setInput({
							...input,
							pass: text,
						})
					}
					value={input.pass}
				/>
				<ButtonContainer>
					<ButtonPpal string='enviar' onSubmit={handleSubmit} />
					<ButtonPpal
						string='Cancelar'
						nav='UserMenu'
						navigation={navigation}
					/>
				</ButtonContainer>
			</MailScreen>
		</ThemeProvider>
	);
};

const MailScreen = styled.View`
	flex: 1;
	background-color: ${(props) => props.theme.bg};
`;
const MailInput = styled.TextInput`
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
	margin-top: 16px;
	padding: 10px 18px;
	font-size: 10px;
	font-weight: bold;
	text-align: center;
	color: ${({ theme }) => theme.text};
	border-radius: 100px;
	background-color: ${({ bg }) => bg || '#ccc'};
`;
export default MailUpdate;
