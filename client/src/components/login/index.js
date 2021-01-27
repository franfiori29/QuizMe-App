import React, { useState } from 'react';
import { Dimensions, Linking, Text } from 'react-native';
import { REACT_APP_API } from '@root/env';
import axios from 'axios';
import styled, { ThemeProvider } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import strings from './strings';
import { SocialIcon } from 'react-native-elements';
import backgroundImage from '@assets/img/backgroundImage.jpg';
import logo from '@assets/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, setToken } from '@redux/reducers/user';
import { useForm, Controller } from 'react-hook-form';

export default function Login({ navigation }) {
	const dispatch = useDispatch();
	const { language, theme } = useSelector((state) => state.global);
	const { control, handleSubmit, errors, reset, register } = useForm();
	const [loading, setLoading] = useState(false);
	const [hidePass, setHidePass] = useState(true);
	const s = strings[language];

	const onPress = () => setHidePass((prevState) => !prevState);

	const onSubmit = (data) => {
		let input = {
			email: data.email,
			password: data.password,
		};
		setLoading(true);
		axios
			.post(`${REACT_APP_API}/auth/login`, input)
			.then((token) => {
				axios
					.get(`${REACT_APP_API}/auth/me`, {
						headers: {
							Authorization: `Bearer ${token.data}`,
						},
					})
					.then((user) => {
						dispatch(getUser(user.data));
						dispatch(setToken(token.data));
						reset({
							emai: '',
							password: '',
						});
						setLoading(false);
						navigation.navigate('Home');
					});
			})
			.catch(() => {
				setLoading(false);
			});
		// }
	};

	return (
		<ThemeProvider theme={theme}>
			<Container source={backgroundImage}>
				<LogoView>
					<Logo source={logo} />
					<LogoText>QuizMeApp</LogoText>
				</LogoView>
				<InputContainer>
					<IconImage
						name={'ios-person-outline'}
						size={28}
						color={'rgba(255,255,255,0.7)'}
					/>
					<Controller
						control={control}
						render={({ onChange, onBlur, value }) => {
							return (
								<InputLogin
									placeholder={s.email}
									onChangeText={(value) => onChange(value)}
									placeholderTextColor={
										'rgba(255,255,255,0.7)'
									}
									underlineColorAndroid='transparent'
									value={value}
								/>
							);
						}}
						name='email'
						rules={{
							required: true,
							pattern: {
								value: /\S+@\S+/,
								message: 'Not a valid email',
							},
						}}
						defaultValue=''
					/>
					{errors.email && (
						<ErrorIcon>
							<Icon
								name={'ios-alert-circle'}
								size={25}
								color={'#D53051'}
							/>
						</ErrorIcon>
					)}
				</InputContainer>
				<InputContainer>
					<IconImage
						name={'ios-lock-closed-outline'}
						size={28}
						color={'rgba(255,255,255,0.7)'}
					/>
					<Controller
						control={control}
						render={({ onChange, onBlur, value }) => {
							return (
								<InputLogin
									placeholder={s.pass}
									onChangeText={(value) => onChange(value)}
									secureTextEntry={hidePass}
									placeholderTextColor={
										'rgba(255,255,255,0.7)'
									}
									underlineColorAndroid='transparent'
									value={value}
								/>
							);
						}}
						name='password'
						rules={{
							required: true,
							// pattern: {
							// 	value: /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ!\s]+$/g,
							// 	message: 'Not a valid email',
							// },
						}}
						defaultValue=''
					/>
					{errors.password && (
						<ErrorIcon right='55px'>
							<Icon
								name={'ios-alert-circle'}
								size={25}
								color={'#D53051'}
							/>
						</ErrorIcon>
					)}
					<Button onPress={onPress}>
						<Icon
							name={'ios-eye-outline'}
							size={26}
							color={'rgba(255,255,255,0.7)'}
						/>
					</Button>
				</InputContainer>
				<ButtonLogin onPress={handleSubmit(onSubmit)}>
					<Description>
						{loading ? (
							<FontAwesome5
								name={'circle-notch'}
								size={26}
								color={'rgba(255,255,255,0.7)'}
							/>
						) : (
							s.login
						)}
					</Description>
				</ButtonLogin>
				{/* <SocialIconGoogle
					title={s.google}
					button
					type='google'
					onPress={() =>
						Linking.openURL(`${REACT_APP_API}/auth/google`)
					}
				/> */}
				<TextView>
					<Text style={{ color: theme.text }}>
						{s.acc}
						<Text
							style={{ fontWeight: '500', color: theme.primary }}
							onPress={() => navigation.navigate('SignUp')}
						>
							{' '}
							{s.signup}
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
	margin-bottom: 40px;
`;
const Logo = styled.Image`
	width: 100px;
	height: 100px;
	border-radius: 100px;
`;
const LogoText = styled.Text`
	color: ${(props) => props.theme.primary};
	font-size: 30px;
	font-weight: 500;
	margin-top: 10px;
	opacity: 0.5;
`;
const InputContainer = styled.View`
	margin-top: 10px;
	width: 100%;
	position: relative;
`;
const InputLogin = styled.TextInput`
	width: 95%;
	align-self: center;
	height: 45px;
	/* border-radius: 25px; */
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
const ButtonLogin = styled.TouchableOpacity`
	width: 95%;
	align-self: center;
	height: 45px;
	background-color: ${(props) => props.theme.primary};
	justify-content: center;
	margin-top: 20px;
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
// const SocialIconGoogle = styled(SocialIcon)`
// 	width: 95%;
// 	align-self: center;
// 	border-radius: 5px;
// 	height: 45px;
// `;

const ErrorIcon = styled.View`
	position: absolute;
	top: 8px;
	right: ${({ right }) => right || '35px'};
	flex-direction: row;
	align-items: center;
`;

const ErrorBubble = styled.Text`
	color: #d53051;
	padding: 10px 20px;
	border-color: #d53051;
	border-width: 1px;
	border-radius: 5px;
	margin: 10px 0;
`;
