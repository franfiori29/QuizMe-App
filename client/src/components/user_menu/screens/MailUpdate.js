import React, { useState } from 'react';
import { Alert, Platform, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components/native';

//==> Redux
import { changeEmail } from '@redux/reducers/user';

//==> Components
import ButtonPpal from '@components/utils/ButtonPpal';
import NavBar from '@components/utils/NavBar';

//==> Assets
import mailS from './strings/mailS';

const MailUpdate = ({ navigation }) => {
	const dispatch = useDispatch();
	const { theme, language } = useSelector((state) => state.global);
	const { info } = useSelector((state) => state.user);
	const [error, setError] = useState('');
	const [input, setInput] = useState({
		currMail: '',
		newMail: '',
		pass: '',
	});
	const s = mailS[language];

	const handleSubmit = async () => {
		if (input.currMail && input.newMail && input.pass) {
			if (input.currMail === info.email) {
				const response = await dispatch(
					changeEmail({
						newMail: input.newMail,
						currPass: input.pass,
					}),
				);

				if (response.error?.message.includes('Auth Failed'))
					setError(s.err3);
				else navigation.navigate('UserMenu');
			} else {
				if (Platform.OS !== 'web') {
					Alert.alert(
						'Error',
						s.err1,
						[{ text: 'OK', onPress: () => {} }],
						{ cancelable: false },
					);
				} else {
					alert(s.err1);
				}
			}
		} else {
			if (Platform.OS !== 'web') {
				Alert.alert(
					'Error',
					s.err2,
					[{ text: 'OK', onPress: () => {} }],
					{ cancelable: false },
				);
			} else {
				alert(s.err2);
			}
		}
	};
	return (
		<ThemeProvider theme={theme}>
			<MailScreen>
				<NavBar
					string={s.nav}
					nav1={() => navigation.goBack()}
					icon1='ios-arrow-back'
					icon2=''
				/>
				{!!error && (
					<View style={{ marginHorizontal: 20, marginVertical: 20 }}>
						<BadgeStyled bg='#D53051'>
							<BadgeText>Error: {error} 😦</BadgeText>
						</BadgeStyled>
					</View>
				)}
				<MailInput
					placeholder={s.ph1}
					placeholderTextColor={theme.text}
					onChangeText={(text) =>
						setInput({
							...input,
							currMail: text,
						})
					}
					value={input.currMail}
					style={{ marginTop: 20 }}
				/>
				<MailInput
					placeholder={s.ph2}
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
					placeholder={s.ph3}
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
					<ButtonPpal string={s.btn1} onSubmit={handleSubmit} />
					<ButtonPpal
						string={s.btn2}
						handleNav={() => {
							navigation.navigate('UserMenu');
						}}
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
	font-family: 'Nunito_600SemiBold';
`;
const ButtonContainer = styled.View`
	width: 100%;
	height: 90px;
	justify-content: space-between;
	align-items: center;
`;
const BadgeStyled = styled.View`
	min-width: 175px;
	margin-top: 16px;
	padding: 10px 18px;
	border-radius: 100px;
	background-color: ${({ bg }) => bg || '#ccc'};
`;

const BadgeText = styled.Text`
	font-size: 14px;
	font-family: 'Nunito_600SemiBold';
	text-align: center;
	color: ${({ theme }) => theme.white};
`;
export default MailUpdate;
