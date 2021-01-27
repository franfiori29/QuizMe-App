import React from 'react';
import { View, Image } from 'react-native';
import ricky from '@assets/img/ricky.gif';
import Icon from 'react-native-vector-icons/Ionicons';
import styled, { ThemeProvider } from 'styled-components/native';
import { useSelector } from 'react-redux';

const Ricky = ({ navigation }) => {
	const { theme } = useSelector((state) => state.global);
	return (
		<ThemeProvider theme={theme}>
			<View style={{ flex: 1 }}>
				<BackButtonContainer onPress={() => navigation.goBack()}>
					<Icon name='ios-arrow-back' color={theme.text} size={28} />
				</BackButtonContainer>
				<Image
					style={{ width: '100%', height: '100%', zIndex: 99998 }}
					source={ricky}
				/>
			</View>
		</ThemeProvider>
	);
};

const BackButtonContainer = styled.TouchableOpacity`
	position: absolute;
	background-color: ${(props) => props.theme.bg};
	border-bottom-right-radius: 5px;
	border-bottom-color: #ccc;
	border-right-color: #ccc;
	width: 50px;
	height: 50px;
	left: 0;
	top: 0;
	color: white;
	align-items: center;
	justify-content: center;
	z-index: 99999;
`;

export default Ricky;
