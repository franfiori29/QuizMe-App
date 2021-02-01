import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled, { ThemeProvider } from 'styled-components/native';
import NavbarAdmin from '../utils/NavbarAdmin';
import Navbar from '../utils/NavBar';
import strings from './strings';
import { getUsers } from '../../redux/reducers/user';
import { getQuizzes } from '../../redux/reducers/quizzes';
import { getCategories } from '../../redux/reducers/categories';

const AdminPanel = ({ navigation }) => {
	const dispatch = useDispatch();
	const { theme, language } = useSelector((state) => state.global);
	useEffect(() => {
		dispatch(getUsers());
		dispatch(getQuizzes({ notShuffle: true }));
		dispatch(getCategories(language));
	}, []);
	const s = strings[language];

	return (
		<ThemeProvider theme={theme}>
			<Screen>
				<NavbarAdmin />
			</Screen>
		</ThemeProvider>
	);
};

const Screen = styled.View`
	flex: 1;
	justify-content: space-between;
	background-color: ${(props) => props.theme.bg};
`;
const Body = styled.View`
	flex: 1;
`;

export default AdminPanel;

// <Text>Grafico de total de Quizzes</Text>
// <Text>Grafico de total de categorias por quizzes</Text>
// <Text>Cantidad de usuarios premium y free</Text>