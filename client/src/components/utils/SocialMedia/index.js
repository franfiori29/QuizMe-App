import React from 'react';
import { View, Share } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default function SocialMedia({ shareOptions }) {
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
				name='share-social-outline'
				size={50}
				onPress={shareSocialMedia}
			></Icon>
		</View>
	);
}
