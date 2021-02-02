import React from 'react';
import { View, Share, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components/native';

export default function SocialMedia({ shareOptions, styles = {} }) {
	const { theme } = useSelector((state) => state.global);
	const shareSocialMedia = async () => {
		try {
			await Share.share(shareOptions);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<ThemeProvider theme={theme}>
			<ShareButton onPress={shareSocialMedia}>
				<ButtonText
					adjustsFontSizeToFit={true}
					style={{
						color: theme.primary,
					}}
				>
					Compartir
				</ButtonText>
			</ShareButton>
		</ThemeProvider>
	);
}

const ShareButton = styled.TouchableOpacity`
	align-self: center;
	align-items: center;
	justify-content: center;
	padding: 10px;
	border-radius: 5px;
	background-color: ${(props) => props.theme.bg};
	border: 2px solid ${(props) => props.theme.primary};
`;
const ButtonText = styled.Text`
	text-transform: uppercase;
	font-family: 'Nunito_800ExtraBold';
`;
