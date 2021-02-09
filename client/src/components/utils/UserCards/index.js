import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import strings from '@components/admin_panel/strings';
import { activateUser, getUsers } from '../../../redux/reducers/user';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { View } from 'react-native';
import logo from '@assets/logo.png';

const UserCards = () => {
	const dispatch = useDispatch();
	const { language, theme } = useSelector((state) => state.global);
	const { users } = useSelector((state) => state.user);
	const s = strings[language];
	return (
		<UserCardsContainer>
			{users &&
				!!users.length &&
				users.map((user) => (
					<UserCard key={user._id}>
						<UserImg
							source={
								user.profilePic
									? {
											uri: user.profilePic,
									  }
									: logo
							}
						/>
						<UserInfo>
							<View>
								<UserInfoTitle
									numberOfLines={1}
									ellipsizeMode='tail'
								>
									{user.email}
								</UserInfoTitle>
								<StyledText
									numberOfLines={2}
									ellipsizeMode='tail'
								>
									{`${user.firstName} ${user.lastName}`}
								</StyledText>
							</View>
							<Buttons>
								<Button
									onPress={async () => {
										await dispatch(
											activateUser({
												userId: user._id,
												isActive: !user.isActive,
											}),
										);
										dispatch(getUsers());
									}}
								>
									<FontAwesome5
										name={
											user.isActive ? 'ban' : 'user-check'
										}
										color={
											user.isActive
												? theme.wrong
												: theme.success
										}
										size={25}
									/>
									<ButtonText
										style={{
											color: theme.text,
											marginLeft: 5,
										}}
									>
										{user.isActive
											? s.deleteUser
											: s.activateUser}
									</ButtonText>
								</Button>
							</Buttons>
						</UserInfo>
					</UserCard>
				))}
		</UserCardsContainer>
	);
};

const StyledText = styled.Text`
	font-family: 'Nunito_400Regular';
	color: ${(props) => props.theme.text};
`;

const UserCardsContainer = styled.View`
	width: 95%;
	align-self: center;
`;
const UserCard = styled.View`
	width: 100%;
	height: 120px;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
	align-items: center;
	flex-direction: row;
	padding: 15px 10px 10px 0px;
`;

const UserImg = styled.Image`
	z-index: 3;
	height: 80px;
	width: 80px;
	border-radius: 10px;
`;

const UserInfo = styled.View`
	flex: 1;
	height: 100%;
	padding: 5px 15px;
	justify-content: space-between;
`;

const UserInfoTitle = styled.Text`
	font-size: 16px;
	font-family: 'Nunito_800ExtraBold';
	color: ${(props) => props.theme.text};
`;

const Buttons = styled.TouchableOpacity`
	flex-direction: row;
`;

const Button = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
`;

const ButtonText = styled.Text`
	text-transform: uppercase;
	font-family: 'Nunito_600SemiBold';
	color: ${(props) => props.theme.white};
`;

export default UserCards;
