import React from 'react';
import { View, Share } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

export default function SocialMedia({ shareOptions }) {
	const { theme } = useSelector((state) => state.global);
	const shareSocialMedia = async () => {
		try {
			await Share.share(shareOptions);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<View>
			<Icon
				color={theme.text}
				name='share-social-outline'
				size={50}
				onPress={shareSocialMedia}
			></Icon>
		</View>
	);
}
