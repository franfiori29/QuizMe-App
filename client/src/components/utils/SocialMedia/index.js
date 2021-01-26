import React from 'react';
import { View, Share } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default function SocialMedia({ shareOptions, styles = {}, size }) {
	const shareSocialMedia = async () => {
		try {
			await Share.share(shareOptions);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<View style={styles}>
			<Icon
				name='share-social-outline'
				size={size}
				onPress={shareSocialMedia}
			></Icon>
		</View>
	);
}
