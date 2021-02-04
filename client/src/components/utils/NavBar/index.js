import React from 'react';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const NavBar = ({ string, nav1, nav2, icon1, icon2 }) => {
	const { theme } = useSelector((state) => state.global);

	const handleNav1 = () => {
		if (nav1) {
			nav1();
		}
	};

	const handleNav2 = () => {
		if (nav2) {
			nav2();
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Header>
				<HeaderButton onPress={handleNav1}>
					{nav1 ? (
						<Icon name={icon1} color={theme.primary} size={28} />
					) : (
						<Icon name='ios-close' color='transparent' size={28} />
					)}
				</HeaderButton>
				<StyledText style={{ fontSize: 20, color: theme.primary }}>
					{string}
				</StyledText>
				<HeaderButton onPress={handleNav2}>
					{nav2 ? (
						<Icon name={icon2} color={theme.primary} size={28} />
					) : (
						<Icon name='ios-close' color='transparent' size={28} />
					)}
				</HeaderButton>
			</Header>
		</ThemeProvider>
	);
};
const Header = styled.View`
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

const StyledText = styled.Text`
	color: ${(props) => props.theme.text};
	font-family: 'Nunito_600SemiBold';
`;
export default NavBar;
