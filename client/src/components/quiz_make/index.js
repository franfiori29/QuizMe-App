import React, { useEffect, useState } from 'react';
import { Text, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components/native';
import fb from '@root/src/firebase';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { useForm, Controller } from 'react-hook-form';

//==>Assets
import strings from './strings';
import Icon from 'react-native-vector-icons/Ionicons';

//==> Components
import ButtonPpal from '@components/utils/ButtonPpal';
import NavBar from '@components/utils/NavBar';

/* ----- SACAR ESTA LINEA LUEGO DE TERMINAR --- */
import { getCategories } from '@redux/reducers/categories';
import { Picker } from '@react-native-picker/picker';
/* ----- SACAR ESTA LINEA LUEGO DE TERMINAR --- */

const QuizMake = ({ navigation, route: { params } }) => {
	const { theme, language } = useSelector((state) => state.global);
	const dispatch = useDispatch();
	const s = strings[language];
	const { control, handleSubmit, errors } = useForm();

	const { categories } = useSelector((state) => state.categories);
	const [image, setImage] = useState(null);

	/* ----- SACAR ESTA LINEA LUEGO DE TERMINAR --- */
	useEffect(() => {
		dispatch(getCategories(language));
	}, []);
	/* ----- SACAR ESTA LINEA LUEGO DE TERMINAR --- */
	const onSubmit = async (data) => {
		/* --- SUBE IMAGEN A FIREBASE --- */
		if (params?.quiz) {
			let quiz = {
				title: data.title,
				description: data.description,
				language: data.language,
				image: params.quiz.image,
				categoryId: data.category,
				time: Number(data.time),
				questions: params.quiz.questions,
			};

			return navigation.navigate('QuizMakeDetails', {
				quiz,
			});
		}
		let url;
		let randomID = uuidv4();
		if (image) {
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
				if (Platform.OS !== 'web') {
					blob.close();
				}
			} catch (err) {
				console.log(err);
			}
		}
		/* --- SUBE IMAGEN A FIREBASE --- */
		let quiz = {
			title: data.title,
			description: data.description,
			language: data.language,
			image:
				url ||
				'https://therubyhub.com/wp-content/uploads/2019/09/Quiz.jpg',
			categoryId: data.category,
			time: Number(data.time),
			questions: [],
		};
		navigation.navigate('QuizMakeQuestions', { quiz });
	};

	const pickImage = async () => {
		if (Platform.OS !== 'web') {
			const {
				status,
			} = await ImagePicker.requestMediaLibraryPermissionsAsync();
			if (status !== 'granted') {
				alert(
					'Necesitamos permiso a tu galería para que puedas subir una imagen'
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
					<InputContainer>
						<Controller
							control={control}
							render={({ onChange, onBlur, value }) => {
								return (
									<QuizInput
										onBlur={onBlur}
										placeholder={s.titlePlace}
										onChangeText={(value) =>
											onChange(value)
										}
										value={value}
									/>
								);
							}}
							name='title'
							rules={{ required: true }}
							defaultValue=''
						/>
						{errors.title && (
							<ErrorIcon>
								<Text
									style={{
										color: '#D53051',
										fontSize: 10,
										textTransform: 'uppercase',
										marginRight: 5,
									}}
								>
									{s.req}
								</Text>
								<Icon
									name={'ios-alert-circle'}
									size={15}
									color={'#D53051'}
								/>
							</ErrorIcon>
						)}
					</InputContainer>

					<InputContainer>
						<Controller
							control={control}
							render={({ onChange, onBlur, value }) => {
								return (
									<QuizInput
										onBlur={onBlur}
										placeholder={s.descPlace}
										onChangeText={(value) =>
											onChange(value)
										}
										value={value}
									/>
								);
							}}
							name='description'
							rules={{ required: true }}
							defaultValue=''
						/>
						{errors.description && (
							<ErrorIcon>
								<Text
									style={{
										color: '#D53051',
										fontSize: 10,
										textTransform: 'uppercase',
										marginRight: 5,
									}}
								>
									{s.req}
								</Text>
								<Icon
									name={'ios-alert-circle'}
									size={15}
									color={'#D53051'}
								/>
							</ErrorIcon>
						)}
					</InputContainer>

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
					<Controller
						control={control}
						render={({ onChange, onBlur, value }) => {
							return (
								<Picker
									selectedValue={value}
									style={{
										height: 50,
										width: 300,
									}}
									onValueChange={onChange}
								>
									<Picker.Item key={'none'} label='' />
									{categories.map((cat) => (
										<Picker.Item
											key={cat._id}
											value={cat._id}
											label={
												cat[`description_${language}`]
											}
										/>
									))}
								</Picker>
							);
						}}
						name='category'
						rules={{ required: true }}
						defaultValue=''
					/>
					{errors.category && <ErrorBubble>{s.req2}</ErrorBubble>}
					<Text
						style={{
							fontSize: 18,
							color: theme.text,
							marginTop: 20,
							marginBottom: 10,
						}}
					>
						Idioma
					</Text>
					<Controller
						control={control}
						render={({ onChange, onBlur, value }) => {
							return (
								<Picker
									selectedValue={value}
									style={{
										height: 50,
										width: 300,
									}}
									onValueChange={onChange}
								>
									<Picker.Item key={'none'} label='' />
									<Picker.Item
										key={'es'}
										value={'es'}
										label='Español'
									/>
									<Picker.Item
										key={'en'}
										value={'en'}
										label='English'
									/>
								</Picker>
							);
						}}
						name='language'
						rules={{ required: true }}
						defaultValue=''
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
						{errors.language && (
							<ErrorBubble>Elegí un lenguaje</ErrorBubble>
						)}
						<InputContainer>
							<Controller
								control={control}
								render={({ onChange, onBlur, value }) => {
									return (
										<QuizInput
											onBlur={onBlur}
											placeholder={s.time}
											keyboardType='numeric'
											onChangeText={(value) =>
												onChange(
													value.replace(/[^0-9]+/, '')
												)
											}
											value={value}
										/>
									);
								}}
								name='time'
								rules={{ required: true }}
								defaultValue=''
							/>
							{errors.time && (
								<ErrorIcon>
									<Text
										style={{
											color: '#D53051',
											fontSize: 10,
											textTransform: 'uppercase',
											marginRight: 5,
										}}
									>
										{s.req}
									</Text>
									<Icon
										name={'ios-alert-circle'}
										size={15}
										color={'#D53051'}
									/>
								</ErrorIcon>
							)}
						</InputContainer>
					</View>
					<ButtonPpal
						string={s.next}
						onSubmit={handleSubmit(onSubmit)}
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

const InputContainer = styled.View`
	width: 100%;
	position: relative;
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

const ErrorIcon = styled.View`
	position: absolute;
	top: 11px;
	right: 35px;
	flex-direction: row;
	align-items: center;
`;

const ErrorBubble = styled.Text`
	color: #d53051;
	padding: 10px 20px;
	border-color: #d53051;
	border-width: 1px;
	border-radius: 5px;
	margin: 10px 0;
`;

export default QuizMake;
