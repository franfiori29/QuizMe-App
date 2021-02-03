import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components/native';
import NavbarAdmin from '../utils/NavbarAdmin';
import strings from './strings';
import { getUsers } from '../../redux/reducers/user';
import { getQuizzes } from '../../redux/reducers/quizzes';
import { getCategories } from '../../redux/reducers/categories';

const AdminPanel = () => {
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
