import React, { useEffect, useState } from 'react';
import {
	Text,
	TouchableOpacity,
	Switch,
	View,
	ActivityIndicator,
	Alert,
	Platform,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

//==> Actions
import {
	changeLanguage,
	switchTheme,
	switchSound,
	switchVibration,
} from '@redux/reducers/global';
import { logout, getUserQuizzes } from '@redux/reducers/user';

//==> Components
import NavBar from '@components/utils/NavBar';
import { Vibrate } from '@utils/vibration';

//==> Styles
import styled, { ThemeProvider } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

//Assets
import strings from './strings';
import logo from '@assets/logo.png';

const UserMenu = ({ navigation, route: { stopTheme, playTheme } }) => {
	const { language, theme, sound, vibration } = useSelector(
		(state) => state.global
	);
	const { info: user, userQuizzes } = useSelector((state) => state.user);
	const [ricky, setRicky] = useState(0);
	const [myQuizzesLoading, setmyQuizzesLoading] = useState(false);
	const dispatch = useDispatch();
	const s = strings[language];

	useEffect(() => {
		if (!sound) {
			stopTheme();
		} else {
			playTheme();
		}
	}, [sound]);

	const handleLogout = () => {
		Vibrate(100, vibration);
		if (Platform.OS !== 'web') {
			Alert.alert(
				s.logout,
				s.sure,
				[
					{
						text: 'OK',
						onPress: () => {
							dispatch(logout());
							stopTheme();
							navigation.navigate('Login');
						},
					},

					{
						text: 'Cancel',
						onPress: () => console.log('Cancel Pressed'),
						style: 'cancel',
					},
				],
				{ cancelable: false }
			);
		} else {
			alert(s.logout);
			dispatch(logout());
			stopTheme();
			navigation.navigate('Login');
		}
	};
	const handleMail = () => {
		navigation.navigate('MailUpdate');
	};

	const handleRicky = () => {
		Vibrate(100, vibration);
		setRicky(ricky + 1);
		setTimeout(() => {
			setRicky(0);
		}, 1000);
		if (ricky > 5) {
			navigation.navigate('Ricky');
		}
	};

	const handleTheme = () => {
		Vibrate(100, vibration);
		dispatch(switchTheme());
	};
	const handleVibration = () => {
		Vibrate(100, vibration);
		dispatch(switchVibration());
	};
	const handleSound = () => {
		Vibrate(100, vibration);
		dispatch(switchSound());
	};

	const handleLang = () => {
		Vibrate(100, vibration);
		dispatch(changeLanguage());
	};

	const handleMyQuizzes = () => {
		setmyQuizzesLoading(true);
		dispatch(getUserQuizzes(user._id)).then(() => {
			setmyQuizzesLoading(false);
			navigation.navigate('MyQuizzes');
		});
	};

	const handleAdminPanel = () => {
		navigation.navigate('AdminPanel');
	};

	return (
		<ThemeProvider theme={theme}>
			<Screen>
				<NavBar
					string='QuizMeApp'
					nav1={() => navigation.goBack()}
					nav2={() => navigation.navigate('SearchScreen')}
					icon1='ios-close'
					icon2='ios-search-outline'
				/>
				<UserContainer>
					<UserImg
						source={
							user.profilePic
								? {
										uri: user.profilePic,
								  }
								: logo
						}
					/>
					<View>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<UserName>
								{user.firstName} {user.lastName}
								{user.validated && (
									<Icon
										name='checkmark-circle'
										size={20}
										style={{
											color: '#1271e2',
											zIndex: 20,
											marginLeft: 5,
										}}
									/>
								)}
								{user.premium && (
									<Icon
										color={'rgb(250,210,1)'}
										name='ios-star'
										size={20}
										style={{
											marginLeft: 5,
											zIndex: 20,
										}}
									/>
								)}
							</UserName>
						</View>
					</View>
					<TouchableOpacity
						onPress={() => navigation.navigate('Profile')}
					>
						<UserText style={{ fontFamily: 'Nunito_800ExtraBold' }}>
							{s.profile.toUpperCase()}
						</UserText>
					</TouchableOpacity>
				</UserContainer>
				{/* <AccType>
					<Text
						style={{
							color: theme.text,
							fontFamily: 'Nunito_400Regular',
						}}
					>
						{s.acc}{' '}
						<Text
							style={{
								color: theme.text,
								fontFamily: 'Nunito_800ExtraBold',
							}}
						>
							{user.premium ? s.premium : s.free}
						</Text>
					</Text>
					<AccTypeButton
						onPress={() => navigation.navigate('PremiumScreen')}
					>
						<Text
							style={{
								fontSize: 12,
								color: theme.primary,
								textTransform: 'uppercase',
								fontFamily: 'Nunito_600SemiBold',
							}}
						>
							{s.premiumBtn}
						</Text>
					</AccTypeButton>
				</AccType> */}
				{user.role === 'ADMIN' && (
					<MenuTouchOption onPress={handleAdminPanel}>
						<Text
							style={{
								color: theme.text,
								fontFamily: 'Nunito_400Regular',
							}}
						>
							{s.adminPanel}
						</Text>
					</MenuTouchOption>
				)}
				<MenuTouchOption
					onPress={() => navigation.navigate('Subscriptions')}
				>
					<Text
						style={{
							color: theme.text,
							fontFamily: 'Nunito_400Regular',
						}}
					>
						{s.subs}
					</Text>
				</MenuTouchOption>
				<MenuTouchOption
					style={{ justifyContent: 'space-between' }}
					onPress={handleMyQuizzes}
				>
					<Text
						style={{
							color: theme.text,
							fontFamily: 'Nunito_400Regular',
						}}
					>
						{s.myQuiz}
					</Text>
					{myQuizzesLoading && (
						<ActivityIndicator size='small' color={theme.primary} />
					)}
				</MenuTouchOption>
				<MenuTouchOption onPress={handleMail}>
					<Text
						style={{
							color: theme.text,
							width: '95%',
							fontFamily: 'Nunito_400Regular',
						}}
					>
						{s.email}{' '}
						<Text
							style={{
								fontFamily: 'Nunito_800ExtraBold',
								color: theme.primary,
							}}
						>
							{user.email}
						</Text>
					</Text>
				</MenuTouchOption>
				<AccType onPress={() => navigation.navigate('UpdateName')}>
					<Text
						style={{
							color: theme.text,
							fontFamily: 'Nunito_400Regular',
						}}
					>
						{s.user}
					</Text>
				</AccType>
				<MenuTouchOption
					onPress={() => navigation.navigate('PasswordUpdate')}
				>
					<Text
						style={{
							color: theme.text,
							fontFamily: 'Nunito_400Regular',
						}}
					>
						{s.pass}
					</Text>
				</MenuTouchOption>

				<MenuSolidOption style={{ justifyContent: 'space-between' }}>
					<Text
						style={{
							color: theme.text,
							fontFamily: 'Nunito_400Regular',
						}}
					>
						{s.sound}
					</Text>
					<Switch
						onValueChange={handleSound}
						value={sound ? true : false}
					/>
				</MenuSolidOption>
				<MenuSolidOption style={{ justifyContent: 'space-between' }}>
					<Text
						style={{
							color: theme.text,
							fontFamily: 'Nunito_400Regular',
						}}
					>
						{s.vibration}
					</Text>
					<Switch
						onValueChange={handleVibration}
						value={vibration ? true : false}
					/>
				</MenuSolidOption>
				<MenuSolidOption style={{ justifyContent: 'space-between' }}>
					<Text
						style={{
							color: theme.text,
							fontFamily: 'Nunito_400Regular',
						}}
					>
						{s.dark}
					</Text>
					<Switch
						onValueChange={handleTheme}
						value={theme.mode === 'light' ? false : true}
					/>
				</MenuSolidOption>
				<MenuSolidOption style={{ justifyContent: 'space-between' }}>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'center',
							paddingTop: 2,
							paddingBottom: 2,
						}}
					>
						<Text
							style={{
								color: theme.text,
								fontFamily: 'Nunito_400Regular',
							}}
						>
							{s.lang}
						</Text>
						<Text
							style={{
								color: theme.primary,
								fontFamily: 'Nunito_800ExtraBold',
								marginLeft: 5,
							}}
						>
							{language.toUpperCase()}
						</Text>
					</View>
					<Switch
						onValueChange={handleLang}
						value={language === 'es' ? true : false}
					/>
				</MenuSolidOption>
				<MenuTouchOption onPress={() => navigation.navigate('RateUs')}>
					<Text
						style={{
							color: theme.text,
							fontFamily: 'Nunito_400Regular',
						}}
					>
						{s.rate}
					</Text>
				</MenuTouchOption>
				<MenuTouchOption
					onPress={() => navigation.navigate('Information')}
				>
					<Text
						style={{
							color: theme.text,
							fontFamily: 'Nunito_400Regular',
						}}
					>
						{s.info}
					</Text>
				</MenuTouchOption>
				<MenuTouchOption
					style={{ justifyContent: 'space-between' }}
					onPress={handleRicky}
				>
					<Text
						style={{
							color: theme.text,
							fontFamily: 'Nunito_400Regular',
						}}
					>
						{s.version}
					</Text>
					<Text
						style={{
							color: theme.primary,
							fontFamily: 'Nunito_800ExtraBold',
						}}
					>
						0.3.0 (Demo 3)
					</Text>
				</MenuTouchOption>
				<AccType
					style={{
						marginTop: 20,
						marginBottom: 20,
						borderTopWidth: 1,
						borderTopColor: '#ccc',
					}}
					onPress={handleLogout}
				>
					<Text
						style={{
							color: theme.primary,
							fontFamily: 'Nunito_800ExtraBold',
							fontSize: 16,
						}}
					>
						{s.logout}
					</Text>
					<Icon
						color={theme.primary}
						name='arrow-forward-circle-sharp'
						size={25}
					/>
				</AccType>
			</Screen>
		</ThemeProvider>
	);
};
const Screen = styled.ScrollView`
	flex: 1;
	background-color: ${(props) => props.theme.bg};
`;

const UserContainer = styled.View`
	height: 220px;
	width: 95%;
	align-self: center;
	align-items: center;
	justify-content: space-between;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
	padding: 20px;
`;

const UserImg = styled.Image`
	z-index: 3;
	height: 100px;
	width: 100px;
	border-radius: 100px;
`;

const UserName = styled.Text`
	font-size: 20px;
	font-family: 'Nunito_800ExtraBold';
	text-align: center;
	align-items: center;
	color: ${(props) => props.theme.text};
`;

const UserText = styled.Text`
	color: ${(props) => props.theme.primary};
	text-align: center;
	padding: 0 10px;
`;

const AccType = styled.TouchableOpacity`
	width: 95%;
	align-self: center;
	height: 70px;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	padding: 0 20px;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
`;
const AccTypeButton = styled.TouchableOpacity`
	width: 40%;
	max-width: 130px;
	height: 30px;
	align-items: center;
	justify-content: center;
	border: 2px solid ${(props) => props.theme.primary};
	border-radius: 5px;
`;

const MenuTouchOption = styled.TouchableOpacity`
	width: 95%;
	align-self: center;
	height: 70px;
	align-items: center;
	justify-content: flex-start;
	flex-direction: row;
	padding: 0 20px;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
`;
const MenuSolidOption = styled.View`
	width: 95%;
	align-self: center;
	height: 70px;
	align-items: center;
	justify-content: flex-start;
	flex-direction: row;
	padding: 0 20px;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
`;

export default UserMenu;
