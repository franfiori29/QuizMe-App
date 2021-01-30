import React, { useEffect, useState } from 'react';
import {
	Text,
	TouchableOpacity,
	Platform,
	Vibration,
	Switch,
	View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

//==> Actions
import {
	changeLanguage,
	switchTheme,
	switchSound,
} from '@redux/reducers/global';
import { logout, getUserQuizzes } from '@redux/reducers/user';

//==> Components
import NavBar from '@components/utils/NavBar';

//==> Styles
import styled, { ThemeProvider } from 'styled-components/native';

//Assets
import strings from './strings';

const UserMenu = ({ navigation, route: { stopTheme, playTheme } }) => {
	const { language, theme, sound } = useSelector((state) => state.global);
	const { info: user, userQuizzes } = useSelector((state) => state.user);
	const [ricky, setRicky] = useState(0);
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
		dispatch(logout());
		navigation.navigate('Login');
	};
	const handleMail = () => {
		navigation.navigate('MailUpdate');
	};

	const handleRicky = () => {
		if (Platform.OS === 'android') {
			Vibration.vibrate(100);
		}
		setRicky(ricky + 1);
		setTimeout(() => {
			setRicky(0);
		}, 1000);
		if (ricky > 5) {
			navigation.navigate('Ricky');
		}
	};

	const handleTheme = () => {
		if (Platform.OS === 'android') {
			Vibration.vibrate(100);
		}
		dispatch(switchTheme());
	};
	const handleSound = () => {
		if (Platform.OS === 'android') {
			Vibration.vibrate(100);
		}
		dispatch(switchSound());
	};

	const handleLang = () => {
		if (Platform.OS === 'android') {
			Vibration.vibrate(100);
		}
		dispatch(changeLanguage());
	};

	const handleMyQuizzes = () => {
		dispatch(getUserQuizzes(user._id)).then(() =>
			navigation.navigate('MyQuizzes', { quizzes: userQuizzes })
		);
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
						source={{
							uri:
								user.profilePic ||
								'https://picsum.photos/100/100',
						}}
					/>
					<UserName>
						{user.firstName} {user.lastName}
					</UserName>
					<TouchableOpacity
						onPress={() => navigation.navigate('Profile')}
					>
						<UserText>{s.profile.toUpperCase()}</UserText>
					</TouchableOpacity>
				</UserContainer>
				<AccType>
					<Text style={{ color: theme.text }}>
						{s.acc}{' '}
						<Text style={{ color: theme.text, fontWeight: 'bold' }}>
							{s.poor}
						</Text>
					</Text>
					<AccTypeButton>
						<Text
							style={{
								color: theme.primary,
								textTransform: 'uppercase',
							}}
						>
							{s.premiumBtn}
						</Text>
					</AccTypeButton>
				</AccType>
				<MenuTouchOption>
					<Text style={{ color: theme.text }}>{s.subs}</Text>
				</MenuTouchOption>
				<MenuTouchOption onPress={handleMyQuizzes}>
					<Text style={{ color: theme.text }}>{s.myQuiz}</Text>
				</MenuTouchOption>
				{user.role === 'ADMIN' && (
					<MenuTouchOption onPress={handleAdminPanel}>
						<Text style={{ color: theme.text }}>
							{s.adminPanel}
						</Text>
					</MenuTouchOption>
				)}
				<MenuTouchOption onPress={handleMail}>
					<Text
						style={{
							color: theme.text,
							width: '95%',
							height: 30,
						}}
					>
						{s.email}{' '}
						<Text
							style={{ fontWeight: 'bold', color: theme.primary }}
						>
							{user.email}
						</Text>
					</Text>
				</MenuTouchOption>
				<AccType onPress={() => navigation.navigate('UpdateName')}>
					<Text style={{ color: theme.text }}>{s.user}</Text>
				</AccType>
				<MenuTouchOption
					onPress={() => navigation.navigate('PasswordUpdate')}
				>
					<Text style={{ color: theme.text }}>{s.pass}</Text>
				</MenuTouchOption>
				<MenuTouchOption>
					<Text style={{ color: theme.text }}>{s.notif}</Text>
				</MenuTouchOption>
				<MenuSolidOption style={{ justifyContent: 'space-between' }}>
					<Text style={{ color: theme.text }}>{s.sound}</Text>
					<Switch
						onValueChange={handleSound}
						value={sound ? true : false}
					/>
				</MenuSolidOption>
				<MenuSolidOption style={{ justifyContent: 'space-between' }}>
					<Text style={{ color: theme.text }}>{s.dark}</Text>
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
						<Text style={{ color: theme.text }}>{s.lang}</Text>
						<Text
							style={{
								color: theme.primary,
								fontWeight: 'bold',
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
				<MenuTouchOption>
					<Text style={{ color: theme.text }}>{s.help}</Text>
				</MenuTouchOption>
				<MenuTouchOption>
					<Text style={{ color: theme.text }}>{s.rate}</Text>
				</MenuTouchOption>
				<MenuTouchOption
					onPress={() => navigation.navigate('Information')}
				>
					<Text style={{ color: theme.text }}>{s.info}</Text>
				</MenuTouchOption>
				<MenuTouchOption
					style={{ justifyContent: 'space-between' }}
					onPress={handleRicky}
				>
					<Text style={{ color: theme.text }}>{s.version}</Text>
					<Text style={{ color: theme.primary }}>0.1.0 (Demo 1)</Text>
				</MenuTouchOption>
				<MenuTouchOption
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
							fontWeight: 'bold',
							fontSize: 16,
						}}
					>
						{s.logout}
					</Text>
				</MenuTouchOption>
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
	font-weight: bold;
	text-align: center;
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
	width: 50%;
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
