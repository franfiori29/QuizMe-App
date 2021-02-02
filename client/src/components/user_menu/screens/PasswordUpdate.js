import React, { useState } from 'react';
import { Alert, Platform, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components/native';

//==> Redux
import { changePassword } from '@redux/reducers/user';

//==> Components
import ButtonPpal from '@components/utils/ButtonPpal';
import NavBar from '@components/utils/NavBar';

//==> Assets
import passS from './strings/passS';

const PasswordUpdate = ({ navigation }) => {
	const dispatch = useDispatch();
	const { theme, language } = useSelector((state) => state.global);
	const [error, setError] = useState('');
	const [input, setInput] = useState({
		currentPass: '',
		newPass: '',
		confirmPass: '',
	});
	const s = passS[language];

	const handleSubmit = async () => {
		if (input.newPass === input.confirmPass) {
			const response = await dispatch(
				changePassword({
					newPass: input.newPass,
					currPass: input.currentPass,
				}),
			);
			if (response.error?.message.includes('Auth Failed'))
				setError(s.err1);
			else navigation.navigate('UserMenu');
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
			<PassScreen>
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
				<PassInput
					placeholder={s.ph1}
					placeholderTextColor={theme.text}
					onChangeText={(text) =>
						setInput({
							...input,
							currentPass: text,
						})
					}
					value={input.currentPass}
					style={{ marginTop: 20 }}
				/>
				<PassInput
					placeholder={s.ph2}
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
					placeholder={s.ph3}
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
					<ButtonPpal string={s.btn1} onSubmit={handleSubmit} />
					<ButtonPpal
						string={s.btn2}
						handleNav={() => {
							navigation.navigate('UserMenu');
						}}
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
export default PasswordUpdate;
