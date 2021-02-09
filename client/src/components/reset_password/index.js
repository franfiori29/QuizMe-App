import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { REACT_APP_API } from '@root/env';
import styled, { ThemeProvider } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import backgroundImage from '@assets/img/backgroundImage.jpg';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import strings from './strings';
import logo from '@assets/logo.png';
import { useForm, Controller } from 'react-hook-form';

export default function SendCode({ navigation }) {
	const dispatch = useDispatch();
	const { language, theme } = useSelector((state) => state.global);
	const s = strings[language];

	const { control, handleSubmit, errors } = useForm();

	const [hidePass, setHidePass] = useState(true);
	const [errortext, setErrortext] = useState('');

	const onPress = () => setHidePass((prevState) => !prevState);

	const handleSubmitPress = (data) => {
		axios
			.put(`${REACT_APP_API}/auth/forgot`, { userEmail: data.userEmail })
			.then((user) => {
				let template =
					language === 'en'
						? 'recoverAccount.pug'
						: 'recuperarCuenta.pug';
				axios
					.post(`${REACT_APP_API}/auth/email`, {
						name:
							user.data.user.firstName +
							' ' +
							user.data.user.lastName,
						subject: s.subjectRecover,
						date: new Intl.DateTimeFormat(language, {
							year: 'numeric',
							month: 'long',
							day: '2-digit',
						}).format(new Date()),
						code: user.data.user.resetCode,
						email: data.userEmail,
						template: template,
					})
					.then((mail) => {
						let message =
							language === 'en'
								? 'Email sent. Check your email'
								: mail.data.message + ' .Revisa tu email';
						setErrortext(message);
						//redirigir al componente resetPassword2
						navigation.navigate('ResetPassword2');
					})
					.catch((error) => {
						setErrortext(error);
					});
			})
			.catch((err) => {
				setErrortext(err.response.data.message);
			});
	};

	return (
		<ThemeProvider theme={theme}>
			<Container source={backgroundImage}>
				<LogoView>
					<Logo source={logo} />
					<LogoText>QuizMeApp</LogoText>
				</LogoView>
				<InputContainer>
					<Controller
						control={control}
						render={({ onChange, onBlur, value }) => {
							return (
								<>
									<IconImage
										name={'mail-open-outline'}
										size={28}
										color={'rgba(255,255,255,0.7)'}
									/>
									<InputSignUp
										onBlur={onBlur}
										value={value}
										onChangeText={(value) =>
											onChange(value)
										}
										placeholder={s.email}
										placeholderTextColor={
											'rgba(255,255,255,0.7)'
										}
										underlineColorAndroid='transparent'
									/>
								</>
							);
						}}
						name='userEmail'
						rules={{
							required: true,
							pattern: {
								value: /^[a-z0-9_.-]+@[a-z0-9-]+\.[a-z]{2,}$/i,
								message: s.invalidMail,
							},
						}}
						defaultValue=''
					/>
					{errors.userEmail && (
						<ErrorIcon>
							<Text
								style={{
									color: '#D53051',
									fontSize: 13,
									textTransform: 'uppercase',
									marginRight: 5,
									fontFamily: 'Nunito_800ExtraBold',
								}}
							>
								{errors.userEmail.message || s.req}
							</Text>
							<Icon
								name={'ios-alert-circle'}
								size={15}
								color={'#D53051'}
							/>
						</ErrorIcon>
					)}
				</InputContainer>
				<ButtonSignUp onPress={handleSubmit(handleSubmitPress)}>
					<Description>{s.sendCode}</Description>
				</ButtonSignUp>

				<TextView>
					<Text style={{ color: theme.text }}>
						{s.acc}
						<Text
							style={{ fontWeight: '500', color: theme.primary }}
							onPress={() =>
								navigation.navigate('ResetPassword2')
							}
						>
							{' '}
							{s.continue}
						</Text>
					</Text>
				</TextView>
			</Container>
		</ThemeProvider>
	);
}

const Container = styled.View`
	background-color: ${(props) => props.theme.bg};
	flex: 1;
	justify-content: center;
	align-items: center;
`;
const LogoView = styled.View`
	align-items: center;
`;
const Logo = styled.Image`
	width: 100px;
	height: 100px;
	border-radius: 100px;
`;
const LogoText = styled.Text`
	color: ${(props) => props.theme.primary};
	font-size: 30px;
	margin-top: 5px;
	margin-bottom: 20px;
	opacity: 0.5;
	font-family: 'Nunito_600SemiBold';
`;
const InputContainer = styled.View`
	margin-top: 10px;
	width: 100%;
	position: relative;
`;
const InputSignUp = styled.TextInput`
	width: 95%;
	align-self: center;
	border-radius: 5px;
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
	left: 20px;
	z-index: 1;
`;
const Button = styled.TouchableOpacity`
	position: absolute;
	top: 8px;
	right: 20px;
`;
const ButtonSignUp = styled.TouchableOpacity`
	width: 95%;
	align-self: center;
	height: 45px;
	background-color: ${(props) => props.theme.primary};
	justify-content: center;
	margin-bottom: 5px;
	padding: 16px 70px;
	border-radius: 5px;
	margin-top: 20px;
`;
const Description = styled.Text`
	color: rgba(255, 255, 255, 0.7);
	font-size: 16px;
	text-align: center;
`;
const TextView = styled.View`
	align-items: center;
	margin-top: 20px;
`;

const ErrorIcon = styled.View`
	position: absolute;
	top: 15px;
	right: 35px;
	flex-direction: row;
	align-items: center;
`;
