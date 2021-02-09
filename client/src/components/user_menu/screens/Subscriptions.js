import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getFollowing } from '../../../redux/reducers/user';

//==> Components
import NavBar from '@components/utils/NavBar';

//==> Styles
import styled, { ThemeProvider } from 'styled-components/native';

//Assets
import strings from './strings/subscriptions';
import logo from '@assets/logo.png';

const Subscriptions = ({ navigation }) => {
	const { language, theme } = useSelector((state) => state.global);
	const { following } = useSelector((state) => state.user);

	useEffect(() => {
		getFollowing();
	}, []);

	const s = strings[language];
	return (
		<ThemeProvider theme={theme}>
			<Screen>
				<NavBar
					string={s.nav}
					nav1={() => navigation.goBack()}
					icon1='ios-arrow-back'
					icon2=''
					string={s.subs}
				/>
				{!!following.length &&
					following.map((user) => (
						<UserCard
							key={user._id}
							onPress={() => {
								navigation.navigate('PublicProfile', {
									userId: user._id,
								});
							}}
						>
							<UserImage
								source={
									user.profilePic
										? {
												uri: user.profilePic,
										  }
										: logo
								}
							/>
							<UserInfo>
								<UserName>
									{`${user.firstName} ${user.lastName}`}
								</UserName>
							</UserInfo>
						</UserCard>
					))}
			</Screen>
		</ThemeProvider>
	);
};

const Screen = styled.ScrollView`
	width: 100%;
	align-self: center;
	flex: 1;
	background-color: ${(props) => props.theme.bg};
`;

const UserCard = styled.TouchableOpacity`
	flex-direction: row;
	height: 100px;
	width: 90%;
	align-self: center;
	border: 1px solid ${(props) => props.theme.primary};
	border-radius: 5px;
	margin: 10px 0;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
`;

const UserName = styled.Text`
	color: ${(props) => props.theme.text};
	font-size: 18px;
	text-align: center;
	font-family: 'Nunito_800ExtraBold';
	text-transform: uppercase;
`;

const UserImage = styled.Image`
	width: 80px;
	height: 80px;
	border-radius: 100px;
`;

const UserInfo = styled.View`
	margin: auto;
`;

export default Subscriptions;
