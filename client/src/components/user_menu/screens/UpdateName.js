import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components/native';

//==> Redux
import { updateUser } from '@redux/reducers/user';

//==> Components
import ButtonPpal from '@components/utils/ButtonPpal';
import NavBar from '@components/utils/NavBar';

//==> Assets
import nameS from './strings/nameS';

const UpdateName = ({ navigation }) => {
	const dispatch = useDispatch();
	const { theme, language } = useSelector((state) => state.global);
	const [name, setName] = useState({
		name: '',
		lastName: '',
	});
	const s = nameS[language];

	const handleSubmit = () => {
		if (name.name.length > 0 && name.lastName.length > 0) {
			dispatch(
				updateUser({ firstName: name.name, lastName: name.lastName }),
			);
			navigation.navigate('UserMenu');
		} else {
			if (Platform.OS !== 'web') {
				Alert.alert(
					'Error',
					s.err1[{ text: 'OK', onPress: () => {} }],
					{ cancelable: false },
				);
			} else {
				alert(s.err1);
			}
		}
	};
	return (
		<ThemeProvider theme={theme}>
			<NameScreen>
				<NavBar
					string={s.nav}
					nav1={() => navigation.goBack()}
					icon1='ios-arrow-back'
					icon2=''
				/>
				<NameInput
					placeholder={s.ph1}
					placeholderTextColor={theme.text}
					onChangeText={(text) =>
						setName({
							...name,
							name: text,
						})
					}
					value={name.name}
					style={{ marginTop: 20 }}
				/>
				<NameInput
					placeholder={s.ph2}
					placeholderTextColor={theme.text}
					onChangeText={(text) =>
						setName({
							...name,
							lastName: text,
						})
					}
					value={name.lastName}
				/>

				<ButtonContainer>
					<ButtonPpal string={s.btn1} onSubmit={handleSubmit} />
					<ButtonPpal
						string={s.btn2}
						handleNav={() => {
							navigation.navigate('UserMenu');
						}}
					/>
				</ButtonContainer>
			</NameScreen>
		</ThemeProvider>
	);
};

const NameScreen = styled.View`
	flex: 1;
	background-color: ${(props) => props.theme.bg};
`;
const NameInput = styled.TextInput`
	width: 95%;
	align-self: center;
	height: 40px;
	border-color: #ccc;
	border-width: 1px;
	border-radius: 5px;
	color: ${(props) => props.theme.text};
	margin-bottom: 20px;
	padding: 10px;
	font-family: 'Nunito_600SemiBold';
`;
const ButtonContainer = styled.View`
	width: 100%;
	height: 90px;
	justify-content: space-between;
	align-items: center;
`;
export default UpdateName;
