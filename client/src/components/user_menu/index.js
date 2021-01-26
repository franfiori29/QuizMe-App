import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

//==> Actions
import { changeLanguage, switchTheme } from '@redux/reducers/global';
import { logout } from '@redux/reducers/user';

//==> Components
import NavBar from '@components/utils/NavBar';

//==> Styles
import styled, { ThemeProvider } from 'styled-components/native';

//Assets
import strings from './strings';

const UserMenu = ({ navigation }) => {
	const { language } = useSelector((state) => state.global);
	const { theme } = useSelector((state) => state.global);
	const { info: user } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const s = strings[language];

	const handleLogout = () => {
		dispatch(logout());
		navigation.navigate('Login');
	};
	const handleMail = () => {
		navigation.navigate('MailUpdate');
	};

	return (
		<ThemeProvider theme={theme}>
			<Screen>
				<NavBar
					string='QuizMeApp'
					nav1={() => navigation.goBack()}
					nav2={() => navigation.navigate('Home')}
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
						{s.acc} {s.poor}
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
				<MenuTouchOption>
					<TouchableOpacity
						onPress={() => navigation.navigate('MyQuizzes')}
					>
						<Text style={{ color: theme.text }}>{s.myQuiz}</Text>
					</TouchableOpacity>
				</MenuTouchOption>
				<MenuTouchOption onPress={handleMail}>
					<Text style={{ color: theme.text }}>
						{s.email}{' '}
						<Text
							style={{ fontWeight: 'bold', color: theme.primary }}
						>
							{user.email}
						</Text>
					</Text>
				</MenuTouchOption>
				<AccType>
					<Text style={{ color: theme.text }}>
						{s.user} {user.firstName} {user.lastName}
					</Text>
					<AccTypeButton>
						<Text
							style={{
								color: theme.primary,
								textTransform: 'uppercase',
							}}
						>
							{s.validate}
						</Text>
					</AccTypeButton>
				</AccType>
				<MenuTouchOption>
					<Text
						style={{ color: theme.text }}
						onPress={() => navigation.navigate('PasswordUpdate')}
					>
						{s.pass}
					</Text>
				</MenuTouchOption>
				<MenuTouchOption>
					<Text style={{ color: theme.text }}>{s.notif}</Text>
				</MenuTouchOption>
				<MenuTouchOption
					onPress={() => dispatch(switchTheme())}
					style={{ justifyContent: 'space-between' }}
				>
					<Text style={{ color: theme.text }}>{s.dark}</Text>
					<Text style={{ fontWeight: 'bold', color: theme.primary }}>
						{theme.mode === 'light' ? s.dark2 : s.dark1}
					</Text>
				</MenuTouchOption>
				<MenuTouchOption
					style={{ justifyContent: 'space-between' }}
					onPress={() => dispatch(changeLanguage())}
				>
					<Text style={{ color: theme.text }}>{s.lang}</Text>
					<Text style={{ fontWeight: 'bold', color: theme.primary }}>
						{language.toUpperCase()}
					</Text>
				</MenuTouchOption>
				<MenuTouchOption>
					<Text style={{ color: theme.text }}>{s.help}</Text>
				</MenuTouchOption>
				<MenuTouchOption>
					<Text style={{ color: theme.text }}>{s.rate}</Text>
				</MenuTouchOption>
				<MenuTouchOption>
					<Text style={{ color: theme.text }}>{s.info}</Text>
				</MenuTouchOption>
				<MenuTouchOption style={{ justifyContent: 'space-between' }}>
					<Text style={{ color: theme.text }}>{s.version}</Text>
					<Text style={{ color: theme.primary }}>0.0.1(Alpha)</Text>
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

const Header = styled.View`
	background-color: ${(props) => props.theme.bg};
	width: 95%;
	align-self: center;
	height: 65px;
	padding: 10px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
`;

const HeaderButton = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
`;

const HeaderText = styled.Text`
	font-size: 20px;
	color: ${(props) => props.theme.primary};
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

const AccType = styled.View`
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

export default UserMenu;
