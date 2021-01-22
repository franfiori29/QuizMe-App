import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

//==> Actions
import { changeLanguage } from '@redux/global';
import { logout } from '@redux/user';

//==> Styles
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

const UserMenu = ({ navigation }) => {
	const { language } = useSelector((state) => state.global);
	const { info: user } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logout());
		navigation.navigate('Login');
	};
	return (
		<Screen>
			<Header>
				<HeaderButton onPress={() => navigation.goBack()}>
					<Icon name='ios-close' size={28} />
				</HeaderButton>
				<Text style={{ fontSize: 20 }}>QuizMeUp</Text>
				<HeaderButton>
					<Icon name='ios-search-outline' size={28} />
				</HeaderButton>
			</Header>
			<UserContainer>
				<UserImg source={{ uri: 'https://picsum.photos/100/100' }} />
				<UserName>
					{user.firstName} {user.lastName}
				</UserName>
				<TouchableOpacity onPress={()=> navigation.navigate("Profile")}>
					<UserText>VER PERFIL</UserText>
				</TouchableOpacity>
			</UserContainer>
			<AccType>
				<Text>Tipo de cuenta: Pobre</Text>
				<AccTypeButton>
					<Text style={{ color: 'blue', textTransform: 'uppercase' }}>
						Hacete Premium
					</Text>
				</AccTypeButton>
			</AccType>
			<MenuTouchOption>
				<Text>Suscripciones a escuelas</Text>
			</MenuTouchOption>
			<MenuTouchOption>
				<Text>Mis Quizzes</Text>
			</MenuTouchOption>
			<MenuTouchOption>
				<Text>
					Mi Correo:{' '}
					<Text style={{ fontWeight: 'bold' }}>{user.email}</Text>
				</Text>
			</MenuTouchOption>
			<AccType>
				<Text>
					Usuario: {user.firstName}
					{user.lastName}
				</Text>
				<AccTypeButton>
					<Text style={{ color: 'blue', textTransform: 'uppercase' }}>
						Validar Cuenta
					</Text>
				</AccTypeButton>
			</AccType>
			<MenuTouchOption>
				<Text>Cambiar Contraseña</Text>
			</MenuTouchOption>
			<MenuTouchOption>
				<Text>Configuración de notificaciones</Text>
			</MenuTouchOption>
			<MenuTouchOption style={{ justifyContent: 'space-between' }}>
				<Text>Modo Nocturno</Text>
				<Text style={{ fontWeight: 'bold' }}>Desactivado</Text>
			</MenuTouchOption>
			<MenuTouchOption
				style={{ justifyContent: 'space-between' }}
				onPress={() => dispatch(changeLanguage())}
			>
				<Text>Lenguaje</Text>
				<Text style={{ fontWeight: 'bold' }}>{language}</Text>
			</MenuTouchOption>
			<MenuTouchOption>
				<Text>Centro de Ayuda</Text>
			</MenuTouchOption>
			<MenuTouchOption>
				<Text>¡Valóranos!</Text>
			</MenuTouchOption>
			<MenuTouchOption>
				<Text>Información</Text>
			</MenuTouchOption>
			<MenuTouchOption style={{ justifyContent: 'space-between' }}>
				<Text>Versión</Text>
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
					style={{ color: 'blue', fontWeight: 'bold', fontSize: 16 }}
				>
					Cerrar sesión
				</Text>
			</MenuTouchOption>
			{/* 			
			<Button
				title='go to quiz'
				onPress={() => navigation.navigate('QuizIndex')}
			/>
			*/}
		</Screen>
	);
};
const Screen = styled.ScrollView`
	flex: 1;
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
`;

const UserText = styled.Text`
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
