import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

//==> Actions
import { changeLanguage, switchTheme } from '@redux/global';
import { logout } from '@redux/user';

//==> Styles
import Icon from 'react-native-vector-icons/Ionicons';
import styled, { ThemeProvider } from 'styled-components/native';

const UserMenu = ({ navigation }) => {
	const { language } = useSelector((state) => state.global);
	const { theme } = useSelector((state) => state.global);
	const { info: user } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
		navigation.navigate('Login');
	};
	return (
		<ThemeProvider theme={theme}>
			<Screen>
				<Header>
					<HeaderButton onPress={() => navigation.goBack()}>
						<Icon name='ios-close' color={theme.text} size={28} />
					</HeaderButton>
					<HeaderText>QuizMeUp</HeaderText>
					<HeaderButton>
						<Icon
							name='ios-search-outline'
							color={theme.text}
							size={28}
						/>
					</HeaderButton>
				</Header>
				<UserContainer>
					<UserImg
						source={{ uri: 'https://picsum.photos/100/100' }}
					/>
					<UserName>
						{user.firstName} {user.lastName}
					</UserName>
					<TouchableOpacity
						onPress={() => navigation.navigate('Profile')}
					>
						<UserText>VER PERFIL</UserText>
					</TouchableOpacity>
				</UserContainer>
				<AccType>
					<Text style={{ color: theme.text }}>
						Tipo de cuenta: Pobre
					</Text>
					<AccTypeButton>
						<Text
							style={{
								color: 'blue',
								textTransform: 'uppercase',
							}}
						>
							Hacete Premium
						</Text>
					</AccTypeButton>
				</AccType>
				<MenuTouchOption>
					<Text style={{ color: theme.text }}>
						Suscripciones a escuelas
					</Text>
				</MenuTouchOption>
				<MenuTouchOption>
					<Text style={{ color: theme.text }}>Mis Quizzes</Text>
				</MenuTouchOption>
				<MenuTouchOption>
					<Text style={{ color: theme.text }}>
						Mi Correo:{' '}
						<Text style={{ fontWeight: 'bold' }}>{user.email}</Text>
					</Text>
				</MenuTouchOption>
				<AccType>
					<Text style={{ color: theme.text }}>
						Usuario: {user.firstName} {user.lastName}
					</Text>
					<AccTypeButton>
						<Text
							style={{
								color: 'blue',
								textTransform: 'uppercase',
							}}
						>
							Validar Cuenta
						</Text>
					</AccTypeButton>
				</AccType>
				<MenuTouchOption>
					<Text style={{ color: theme.text }}>
						Cambiar Contraseña
					</Text>
				</MenuTouchOption>
				<MenuTouchOption>
					<Text style={{ color: theme.text }}>
						Configuración de notificaciones
					</Text>
				</MenuTouchOption>
				<MenuTouchOption
					onPress={() => dispatch(switchTheme())}
					style={{ justifyContent: 'space-between' }}
				>
					<Text style={{ color: theme.text }}>Modo Nocturno</Text>
					<Text style={{ fontWeight: 'bold', color: theme.text }}>
						{theme.mode === 'light' ? 'Desactivado' : 'Activado'}
					</Text>
				</MenuTouchOption>
				<MenuTouchOption
					style={{ justifyContent: 'space-between' }}
					onPress={() => dispatch(changeLanguage())}
				>
					<Text style={{ color: theme.text }}>Lenguaje</Text>
					<Text style={{ fontWeight: 'bold', color: theme.text }}>
						{language.toUpperCase()}
					</Text>
				</MenuTouchOption>
				<MenuTouchOption>
					<Text style={{ color: theme.text }}>Centro de Ayuda</Text>
				</MenuTouchOption>
				<MenuTouchOption>
					<Text style={{ color: theme.text }}>¡Valóranos!</Text>
				</MenuTouchOption>
				<MenuTouchOption>
					<Text style={{ color: theme.text }}>Información</Text>
				</MenuTouchOption>
				<MenuTouchOption style={{ justifyContent: 'space-between' }}>
					<Text style={{ color: theme.text }}>Versión</Text>
					<Text style={{ color: '#999' }}>0.0.1(Alpha)</Text>
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
							color: 'blue',
							fontWeight: 'bold',
							fontSize: 16,
						}}
					>
						Cerrar sesión
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
	width: 100%;
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
	color: ${(props) => props.theme.text};
`;

const UserContainer = styled.View`
	height: 220px;
	width: 100%;
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
	color: ${(props) => props.theme.text};
	text-align: center;
	padding: 0 10px;
`;

const AccType = styled.View`
	width: 100%;
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
	height: 30px;
	align-items: center;
	justify-content: center;
	border: 2px solid blue;
`;

const MenuTouchOption = styled.TouchableOpacity`
	width: 100%;
	height: 70px;
	align-items: center;
	justify-content: flex-start;
	flex-direction: row;
	padding: 0 20px;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
`;

export default UserMenu;
