import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components/native';

//Redux
import { updateUser } from '@redux/reducers/user';

//==> Components
import ButtonPpal from '@components/utils/ButtonPpal';
import NavBar from '@components/utils/NavBar';

const MailUpdate = ({ navigation }) => {
	const { theme, language } = useSelector((state) => state.global);
	const { info: user } = useSelector((state) => state.user);
	const [mail, setMail] = useState({ newMail: '', currentMail: '' });
	const dispatch = useDispatch();
	// const s = strings[language];
	const handleSubmit = () => {
		if (user.email === mail.currentMail) {
			dispatch(updateUser({ email: mail.newMail }));
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
			<MailScreen>
				<NavBar
					string='Cambiar Mail'
					nav1={() => navigation.goBack()}
					icon1='ios-arrow-back'
					icon2=''
				/>
				<MailInput
					placeholder='Ingresa tu mail actual'
					placeholderTextColor={theme.text}
					onChangeText={(text) =>
						setMail({
							...mail,
							currentMail: text,
						})
					}
					value={mail.currentMail}
				/>
				<MailInput
					placeholder='Ingresa Nuevo mail'
					placeholderTextColor={theme.text}
					onChangeText={(text) =>
						setMail({
							...mail,
							newMail: text,
						})
					}
					value={mail.newMail}
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
export default MailUpdate;
