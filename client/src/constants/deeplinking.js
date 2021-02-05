export const deepLinking = (route, params = {}, navigation) => {
	switch (route) {
		case '/home':
			return navigation.navigate('Profile');
		case '/user/id':
			return navigation.navigate('UserMenu', { payload: params });
	}
};
