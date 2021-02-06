import React, { useEffect, useState } from 'react';
import { Text, Alert } from 'react-native';
import { REACT_APP_API } from '@root/env';
import styled, { ThemeProvider } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import backgroundImage from '@assets/img/backgroundImage.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '@redux/reducers/user';
import axios from 'axios';
import strings from './strings';
import logo from '@assets/logo.png';
import { useForm, Controller } from 'react-hook-form';

export default function ResetPassword2({ navigation, route: { params } }) {
	//alert(params.userEmail);
	const dispatch = useDispatch();
	const { language, theme } = useSelector((state) => state.global);
	const s = strings[language];

	const { control, handleSubmit, errors } = useForm();

	const [hidePass, setHidePass] = useState(true);
	const [errortext, setErrortext] = useState('');

	const onPress = () => setHidePass((prevState) => !prevState);

	const handleSubmitPress = (data) => {
		if (data.newPass === data.confirmPass) {
			axios
				.put(`${REACT_APP_API}/auth/resetPass`, {
					resetCode: data.resetCode,
					userEmail: data.userEmail,
					newPass: data.newPass,
				})
				.then((user) => {
					//enviar mail update pass
					let template =
						language === 'en'
							? 'updatedPassword.pug'
							: 'contraseñaActualizada.pug';
					axios
						.post(`${REACT_APP_API}/auth/email`, {
							name:
								user.data.user.firstName +
								' ' +
								user.data.user.lastName,
							subject: s.subjectUpdate,
							email: data.userEmail,
							template: template,
						})
						.then((mail) => {
							let message =
								language === 'en'
									? 'Email sent. Check your email'
									: mail.data.message + ' .Revisa tu email';
							setErrortext(message);
						})
						.catch((error) => {
							setErrortext(error);
						});
					//redireccionar al homsceen logeado
					axios
						.post(`${REACT_APP_API}/auth/login`, {
							email: data.userEmail,
							password: data.newPass,
						})
						.then((user) => {
							dispatch(setUserInfo(user.data));
							navigation.navigate('Home');
						});
				})
				.catch((err) => {
					setErrortext(err.response.data.message);
				});
		} else {
			setErrortext(s.errorPass);
		}
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
										name={'ios-person-outline'}
										size={28}
										color={'rgba(255,255,255,0.7)'}
									/>
									<InputSignUp
										onBlur={onBlur}
										placeholder={s.code}
										value={value}
										onChangeText={(value) =>
											onChange(value)
										}
										placeholderTextColor={
											'rgba(255,255,255,0.7)'
										}
										underlineColorAndroid='transparent'
									/>
								</>
							);
						}}
						name='resetCode'
						rules={{ required: true }}
						defaultValue=''
					/>
					{errors.resetCode && (
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
								{s.req}
							</Text>
							<Icon
								name={'ios-alert-circle'}
								size={15}
								color={'#D53051'}
							/>
						</ErrorIcon>
					)}
				</InputContainer>

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

				<InputContainer>
					<Controller
						control={control}
						render={({ onChange, onBlur, value }) => {
							return (
								<>
									<IconImage
										name={'ios-lock-closed-outline'}
										size={28}
										color={'rgba(255,255,255,0.7)'}
									/>
									<InputSignUp
										onBlur={onBlur}
										value={value}
										onChangeText={(value) =>
											onChange(value)
										}
										placeholder={s.newPass}
										secureTextEntry={hidePass}
										placeholderTextColor={
											'rgba(255,255,255,0.7)'
										}
										underlineColorAndroid='transparent'
									/>
									<Button onPress={onPress}>
										<Icon
											name={'ios-eye-outline'}
											size={26}
											color={'rgba(255,255,255,0.7)'}
										/>
									</Button>
								</>
							);
						}}
						name='newPass'
						rules={{
							required: true,
							pattern: {
								value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/,
								message: s.invalidPassword,
							},
						}}
						defaultValue=''
					/>
					{errors.newPass && (
						<ErrorIcon style={{ right: 55 }}>
							<Text
								style={{
									color: '#D53051',
									fontSize: 13,
									textTransform: 'uppercase',
									marginRight: 5,
									fontFamily: 'Nunito_800ExtraBold',
								}}
							>
								{errors.newPass.message || s.req}
							</Text>
							<Icon
								name={'ios-alert-circle'}
								size={15}
								color={'#D53051'}
							/>
						</ErrorIcon>
					)}
				</InputContainer>

				<InputContainer>
					<Controller
						control={control}
						render={({ onChange, onBlur, value }) => {
							return (
								<>
									<IconImage
										name={'ios-lock-closed-outline'}
										size={28}
										color={'rgba(255,255,255,0.7)'}
									/>
									<InputSignUp
										onBlur={onBlur}
										value={value}
										onChangeText={(value) =>
											onChange(value)
										}
										placeholder={s.confirmPass}
										secureTextEntry={hidePass}
										placeholderTextColor={
											'rgba(255,255,255,0.7)'
										}
										underlineColorAndroid='transparent'
									/>
									<Button onPress={onPress}>
										<Icon
											name={'ios-eye-outline'}
											size={26}
											color={'rgba(255,255,255,0.7)'}
										/>
									</Button>
								</>
							);
						}}
						name='confirmPass'
						rules={{
							required: true,
							pattern: {
								value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/,
								message: s.invalidPassword,
							},
						}}
						defaultValue=''
					/>
					{errors.confirmPass && (
						<ErrorIcon style={{ right: 55 }}>
							<Text
								style={{
									color: '#D53051',
									fontSize: 13,
									textTransform: 'uppercase',
									marginRight: 5,
									fontFamily: 'Nunito_800ExtraBold',
								}}
							>
								{errors.confirmPass.message || s.req}
							</Text>
							<Icon
								name={'ios-alert-circle'}
								size={15}
								color={'#D53051'}
							/>
						</ErrorIcon>
					)}
				</InputContainer>

				<TextView>
					<Text>
						<Text
							style={{ fontWeight: '500', color: 'blue' }}
							onPress={() => navigation.navigate('Login')}
						>
							{errortext}
						</Text>
					</Text>
				</TextView>

				<ButtonSignUp onPress={handleSubmit(handleSubmitPress)}>
					<Description>{s.reset}</Description>
				</ButtonSignUp>
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
