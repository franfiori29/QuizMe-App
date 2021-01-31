import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import styled, { ThemeProvider } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const NavbarAdmin = () => {
	const { theme } = useSelector((state) => state.global);
	const navigation = useNavigation();

	return (
		<ThemeProvider theme={theme}>
			<Header>
				<HeaderButton onPress={() => navigation.navigate('AdminUsers')}>
					<Icon
						name='ios-person-outline'
						color={theme.white}
						size={28}
					/>
					<TextIcon>Usuarios</TextIcon>
				</HeaderButton>
				<HeaderButton
					onPress={() => navigation.navigate('AdminQuizzes')}
				>
					<Icon
						name='ios-help-outline'
						color={theme.white}
						size={28}
					/>
					<TextIcon>Quizzes</TextIcon>
				</HeaderButton>
				<HeaderButton
					onPress={() => navigation.navigate('AdminCategories')}
				>
					<Icon
						name='ios-library-outline'
						color={theme.white}
						size={28}
					/>
					<TextIcon>Categorias</TextIcon>
				</HeaderButton>
			</Header>
		</ThemeProvider>
	);
};
const Header = styled.View`
	width: 100%;
	align-self: center;
	height: 65px;
	padding: 10px;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	background-color: ${(props) => props.theme.primary};
`;

const HeaderButton = styled.TouchableOpacity`
	align-items: center;
	justify-content: center;
`;

const StyledText = styled.Text`
	color: ${(props) => props.theme.text};
`;

const TextIcon = styled.Text`
	color: ${(props) => props.theme.white};
`;
export default NavbarAdmin;
