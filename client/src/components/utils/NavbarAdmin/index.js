import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//---Components -- //
import AdminUsers from '@components/admin_panel/screens/users';
import AdminQuizzes from '@components/admin_panel/screens/quizzes';
import CategoryCards from '@components/admin_panel/screens/categories';

const Tab = createMaterialBottomTabNavigator();

const NavbarAdmin = () => {
	const { theme } = useSelector((state) => state.global);

	return (
		<ThemeProvider theme={theme}>
			<Tab.Navigator
				activeColor='#f7fdff'
				inactiveColor='#1a2528'
				barStyle={{ backgroundColor: '#04aa8c' }}
			>
				<Tab.Screen
					options={{
						tabBarLabel: 'Usuarios',
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons
								name='person-circle-outline'
								color={color}
								size={25}
							/>
						),
					}}
					name='Usuarios'
					component={AdminUsers}
				/>
				<Tab.Screen
					options={{
						tabBarLabel: 'Quizzes',
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons
								name='help-circle-outline'
								color={color}
								size={25}
							/>
						),
					}}
					name='Quizzes'
					component={AdminQuizzes}
				/>
				<Tab.Screen
					options={{
						tabBarLabel: 'Categorias',
						tabBarIcon: ({ color }) => (
							<MaterialCommunityIcons
								name='ios-book-outline'
								color={color}
								size={25}
							/>
						),
					}}
					name='Categorias'
					component={CategoryCards}
				/>
			</Tab.Navigator>
		</ThemeProvider>
	);
};

export default NavbarAdmin;
