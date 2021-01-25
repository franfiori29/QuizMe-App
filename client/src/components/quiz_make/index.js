import React, { useEffect, useState } from 'react';
import { Button, Text, TextInput, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components/native';
import fb from '@root/src/firebase';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

//==>Assets
import strings from './strings';

//==> Components
import ScrollCategory from '@components/utils/ScrollCategory';
import ButtonPpal from '@components/utils/ButtonPpal';
import NavBar from '@components/utils/NavBar';

/* ----- SACAR ESTA LINEA LUEGO DE TERMINAR --- */
import { getCategories } from '@redux/reducers/categories';
/* ----- SACAR ESTA LINEA LUEGO DE TERMINAR --- */

const QuizMake = ({ navigation }) => {
	const { theme, language } = useSelector((state) => state.global);
	const dispatch = useDispatch();
	const s = strings[language];

	const { categories } = useSelector((state) => state.categories);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [image, setImage] = useState(null);
	const [time, setTime] = useState(0);

	/* ----- SACAR ESTA LINEA LUEGO DE TERMINAR --- */
	useEffect(() => {
		dispatch(getCategories());
	}, []);
	/* ----- SACAR ESTA LINEA LUEGO DE TERMINAR --- */

	const handleSubmit = async () => {
		/* --- SUBE IMAGEN A FIREBASE --- */
		let url;
		let randomID = uuidv4();
		try {
			const blob = await new Promise((resolve, reject) => {
				const xhr = new XMLHttpRequest();
				xhr.onload = function () {
					resolve(xhr.response);
				};
				xhr.onerror = function (e) {
					reject(new TypeError('Network request failed'));
				};
				xhr.responseType = 'blob';
				xhr.open('GET', image, true);
				xhr.send(null);
			});
			const ref = fb.storage().ref(`QuizImage/${randomID}`);
			const snapshot = await ref.put(blob);
			url = await snapshot.ref.getDownloadURL();
			blob.close();
		} catch (err) {
			console.log(err);
		}
		/* --- SUBE IMAGEN A FIREBASE --- */
		let quiz = {
			title,
			description,
			image:
				url ||
				'https://therubyhub.com/wp-content/uploads/2019/09/Quiz.jpg',
			categoryId: category,
			time: Number(time),
			questions: [],
		};
		navigation.navigate('QuizMakeQuestions', { quiz });
	};

	const handleSelect = (select) => {
		setCategory(select);
	};

	const pickImage = async () => {
		if (Platform.OS !== 'web') {
			const {
				status,
			} = await ImagePicker.requestMediaLibraryPermissionsAsync();
			if (status !== 'granted') {
				alert(
					'Necesitamos permiso a tu galería para que puedas subir una imagen',
				);
				return;
			}
		}
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			aspect: [4, 3],
			quality: 1,
		});
		if (!result.cancelled) {
			setImage(result.uri);
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<Screen centerContent={true}>
				<NavBar
					string={s.nav}
					nav1={() => navigation.navigate('Home')}
					icon1='ios-close'
					icon2=''
				/>
				<Title>
					<Text
						style={{
							fontSize: 28,
							fontWeight: 'bold',
							color: theme.text,
							textAlign: 'center',
						}}
					>
						{s.title}
					</Text>
				</Title>
				<FormContainer>
					<QuizInput
						placeholder={s.titlePlace}
						placeholderTextColor={theme.text}
						onChangeText={(text) => setTitle(text)}
						value={title}
					/>

					<QuizInput
						placeholder={s.descPlace}
						placeholderTextColor={theme.text}
						onChangeText={(text) => setDescription(text)}
						value={description}
					/>
					<Text
						style={{
							fontSize: 18,
							color: theme.text,
							marginBottom: 10,
						}}
					>
						{s.img}
					</Text>
					<ButtonPpal
						string={image ? s.img1 : s.img2}
						onSubmit={pickImage}
						navigation={navigation}
						nav=''
					/>
					<Text
						style={{
							fontSize: 18,
							color: theme.text,
							marginTop: 20,
							marginBottom: 10,
						}}
					>
						{s.cat}
					</Text>
					<ScrollCategory
						categories={categories}
						handleSelect={handleSelect}
					/>
					<View
						style={{
							width: '95%',
							alignSelf: 'center',
							marginTop: 20,
							marginBottom: 5,
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Text
							style={{
								fontSize: 18,
								color: theme.text,
								marginTop: 20,
								alignSelf: 'center',
							}}
						>
							{s.time}
						</Text>
						<QuizInput
							style={{ marginTop: 10, width: '100%' }}
							placeholder='0'
							placeholderTextColor={theme.text}
							keyboardType='numeric'
							onChangeText={(text) =>
								setTime(text.replace(/[^0-9]+/, ''))
							}
							value={time.toString()}
						/>
					</View>
					<ButtonPpal
						string={s.next}
						onSubmit={handleSubmit}
						navigation={navigation}
						nav=''
					/>
				</FormContainer>
			</Screen>
		</ThemeProvider>
	);
};

const Screen = styled.ScrollView`
	flex: 1;
	background-color: ${(props) => props.theme.bg};
`;

const Title = styled.View`
	width: 95%;
	align-self: center;
	margin: 20px 0;
	align-items: center;
	justify-content: center;
`;

const FormContainer = styled.View`
	width: 95%;
	align-self: center;
	margin: 0 20px 20px 20px;
	border-radius: 10px;
	justify-content: space-between;
	align-items: center;
`;

const QuizInput = styled.TextInput`
	width: 95%;
	align-self: center;
	height: 40px;
	border-color: #ccc;
	border-width: 1px;
	border-radius: 5px;
	color: ${(props) => props.theme.text};
	margin-bottom: 20px;
	padding: 10px;
`;

export default QuizMake;
