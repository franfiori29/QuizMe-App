import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
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

export default function SignUp({ navigation }) {
	const dispatch = useDispatch();
	const { language, theme } = useSelector((state) => state.global);
	const s = strings[language];
	const { control, handleSubmit, errors } = useForm();

	const [hidePass, setHidePass] = useState(true);
	const [loading, setLoading] = useState(false);

	const onPress = () => setHidePass((prevState) => !prevState);

	const handleLoginPress = () => {
		navigation.navigate('Login');
	};

	const [countryCode, setCountryCode] = useState('AR');

	useEffect(() => {
		axios
			.get('https://ipapi.co/json/')
			.then((response) => {
				setCountryCode(response.data.country_code);
			})
			.catch(() => {
				setCountryCode('AR');
			});
	}, []);

	const handleSubmitPress = (data) => {
		setLoading(true);
		let newUserRegister = {
			email: data.email,
			firstName: data.firstName,
			lastName: data.lastName,
			password: data.password,
			countryCode: countryCode,
		};
		axios
			.post(`${REACT_APP_API}/auth/register`, newUserRegister)
			.then((newUser) => {
				dispatch(setUserInfo(newUser.data));
				let template =
					language === 'en' ? 'welcome.pug' : 'bienvenido.pug';
				axios
					.post(`${REACT_APP_API}/auth/email`, {
						name:
							newUser.data.firstName +
							' ' +
							newUser.data.lastName,
						subject: s.subjectWelcome,
						email: newUser.data.email,
						template: template,
					})
					.then((mail) => {
						console.log(mail.data.message);
					})
					.catch(() => {});
				setLoading(false);
				navigation.navigate('Home');
			})
			.catch((err) => {
				console.log('err', err);
				setLoading(false);
			});
	};

	if (loading)
		return (
			<View
				style={{
					backgroundColor: 'white',
					flex: 1,
					justifyContent: 'center',
				}}
			>
				<ActivityIndicator size='large' color={theme.primary} />
			</View>
		);

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
										placeholder={s.name}
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
						name='firstName'
						rules={{ required: true }}
						defaultValue=''
					/>
					{errors.firstName && (
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
										name={'ios-person-outline'}
										size={28}
										color={'rgba(255,255,255,0.7)'}
									/>
									<InputSignUp
										onBlur={onBlur}
										value={value}
										onChangeText={(value) =>
											onChange(value)
										}
										placeholder={s.lastName}
										placeholderTextColor={
											'rgba(255,255,255,0.7)'
										}
										underlineColorAndroid='transparent'
									/>
								</>
							);
						}}
						name='lastName'
						rules={{ required: true }}
						defaultValue=''
					/>
					{errors.lastName && (
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
						name='email'
						rules={{
							required: true,
							pattern: {
								value: /^[a-z0-9_.-]+@[a-z0-9-]+\.[a-z]{2,}$/i,
								message: s.invalidMail,
							},
						}}
						defaultValue=''
					/>
					{errors.email && (
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
								{errors.email.message || s.req}
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
										placeholder={s.pass}
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
						name='password'
						rules={{
							required: true,
							pattern: {
								value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/,
								message: s.invalidPassword,
							},
						}}
						defaultValue=''
					/>
					{errors.password && (
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
								{errors.password.message || s.req}
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
					<Description>{s.signup}</Description>
				</ButtonSignUp>
				<TextView>
					<Text style={{ color: theme.text }}>
						{s.acc}
						<Text
							style={{ fontWeight: '500', color: theme.primary }}
							onPress={handleLoginPress}
						>
							{' '}
							{s.login}
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
