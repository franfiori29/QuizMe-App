import React from 'react';
import { Text, Alert, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { createValidation } from '@redux/reducers/user';
import strings from './strings';

//==> Components
import NavBar from '@components/utils/NavBar';

//==> Styles
import styled, { ThemeProvider } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const ValidateForm = ({ navigation }) => {
	const dispatch = useDispatch();
	const { language, theme } = useSelector((state) => state.global);
	const {
		control,
		handleSubmit,
		errors,
		reset,
		setError,
		clearErrors,
	} = useForm();
	const s = strings[language];

	const onSubmit = async (data) => {
		if (Platform.OS !== 'web') {
			Alert.alert(
				s.alert1,
				s.alert2,
				[
					{
						text: 'OK',
						onPress: async () => {
							await dispatch(
								createValidation({
									fullName: data.fullName,
									description: data.description,
								}),
							);
							navigation.replace('Home');
						},
					},

					{
						text: 'Cancel',
						onPress: () => console.log('Cancel Pressed'),
						style: 'cancel',
					},
				],
				{ cancelable: false },
			);
		} else {
			alert(s.alert1);
			await dispatch(
				createValidation({
					fullName: data.fullName,
					description: data.description,
				}),
			);
			navigation.replace('Home');
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Screen>
				<NavBar
					string={s.nav}
					nav1={() => navigation.goBack()}
					icon1='ios-arrow-back'
					icon2=''
				/>
				<Title>{s.title}</Title>
				<InputContainer>
					<Controller
						control={control}
						render={({ onChange, onBlur, value }) => {
							return (
								<InputLogin
									placeholder={s.input1}
									onChangeText={(value) => {
										if (errors.login) clearErrors('login');
										return onChange(value);
									}}
									placeholderTextColor={
										'rgba(255,255,255,0.7)'
									}
									underlineColorAndroid='transparent'
									value={value}
								/>
							);
						}}
						name='fullName'
						rules={{
							required: true,
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
								{/* {errors.email.message || s.req} */}
							</Text>
							<Icon
								name={'ios-alert-circle'}
								size={25}
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
								<TextArea
									placeholder={s.input2}
									onChangeText={(value) => {
										if (errors.login) clearErrors('login');
										return onChange(value);
									}}
									placeholderTextColor={
										'rgba(255,255,255,0.7)'
									}
									underlineColorAndroid='transparent'
									value={value}
									multiline={true}
									numberOfLines={5}
								/>
							);
						}}
						name='description'
						rules={{
							required: true,
						}}
						defaultValue=''
					/>
					{errors.description && (
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
								{/* {errors.email.message || s.req} */}
							</Text>
							<Icon
								name={'ios-alert-circle'}
								size={25}
								color={'#D53051'}
							/>
						</ErrorIcon>
					)}
					<ButtonPpalCont onPress={handleSubmit(onSubmit)}>
						<ButtonPpalText>{s.button}</ButtonPpalText>
					</ButtonPpalCont>
				</InputContainer>
			</Screen>
		</ThemeProvider>
	);
};

export default ValidateForm;

const Screen = styled.View`
	flex: 1;
	width: 100%;
	align-self: center;
	background-color: ${(props) => props.theme.bg};
`;
const Title = styled.Text`
	width: 95%;
	text-align: center;
	font-size: 24px;
	margin: 20px auto;
	font-family: 'Nunito_800ExtraBold';
	color: ${(props) => props.theme.text};
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
	border-radius: 5px;
	font-size: 16px;
	padding: 10px;
	background-color: rgba(0, 0, 0, 0.35);
	color: rgba(255, 255, 255, 0.7);
	margin: 0 25px;
	font-family: 'Nunito_400Regular';
`;
const TextArea = styled.TextInput`
	width: 95%;
	align-self: center;
	border-radius: 5px;
	font-size: 16px;
	padding: 10px;
	background-color: rgba(0, 0, 0, 0.35);
	color: rgba(255, 255, 255, 0.7);
	margin: 0 25px 20px 25px;
	font-family: 'Nunito_400Regular';
`;

const ErrorIcon = styled.View`
	position: absolute;
	top: 8px;
	right: ${({ right }) => right || '35px'};
	flex-direction: row;
	align-items: center;
`;

const ButtonPpalCont = styled.TouchableOpacity`
	width: 95%;
	align-self: center;
	background-color: ${(props) => props.theme.primary};
	align-items: center;
	justify-content: center;
	padding: 10px;
	border-radius: 5px;
`;
const ButtonPpalText = styled.Text`
	text-transform: uppercase;
	font-family: 'Nunito_800ExtraBold';
	color: ${(props) => props.theme.white};
`;
