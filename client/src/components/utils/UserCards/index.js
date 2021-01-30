import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import strings from '@components/admin_panel/strings';
import { activateUser, getUsers } from '../../../redux/reducers/user';

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
							source={{
								uri:
									user.profilePic ||
									'https://picsum.photos/100/100',
							}}
						/>
						<UserInfo>
							<UserInfoTitle
								numberOfLines={1}
								ellipsizeMode='tail'
							>
								{user.email}
							</UserInfoTitle>
							<StyledText numberOfLines={2} ellipsizeMode='tail'>
								{`${user.firstName} ${user.lastName}`}
							</StyledText>
							<Buttons>
								<Button
									bgColor={
										user.isActive
											? theme.wrong
											: theme.success
									}
									onPress={async () => {
										await dispatch(
											activateUser({
												userId: user._id,
												isActive: !user.isActive,
											})
										);
										dispatch(getUsers());
									}}
								>
									<ButtonText>
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
	height: 100%;
	width: 85%;
	padding: 0 15px;
	justify-content: space-around;
`;

const UserInfoTitle = styled.Text`
	font-size: 16px;
	font-weight: bold;
	color: ${(props) => props.theme.text};
	margin-top: 3px;
`;

const Buttons = styled.TouchableOpacity`
	flex: 1;
	flex-wrap: wrap;
	flex-direction: row;
`;

const Button = styled.TouchableOpacity`
	width: 95%;
	align-self: center;
	background-color: ${({ bgColor }) => bgColor};
	align-items: center;
	justify-content: center;
	padding: 10px;
	border-radius: 5px;
`;
const ButtonText = styled.Text`
	text-transform: uppercase;
	font-weight: bold;
	color: ${(props) => props.theme.white};
`;

export default UserCards;
