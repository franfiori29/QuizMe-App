import React, { useState, useCallback } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { useFocusEffect } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

//==> Styles
import styled, { ThemeProvider } from 'styled-components/native';
import { RadioButton } from 'react-native-paper';

//==> Components
import ButtonPpal from '@components/utils/ButtonPpal';
import NavBar from '@components/utils/NavBar';

//==>Assets
import strings from './strings';
import Icon from 'react-native-vector-icons/Ionicons';

const QuizMakeQuestions = ({ navigation, route: { params } }) => {
	const { theme, language } = useSelector((state) => state.global);
	const [type, setType] = useState('classic');
	const s = strings[language];
	const { control, handleSubmit, errors, reset } = useForm();

	const [checked, setChecked] = useState('1');
	const onNext = (data) => {
		let options;
		if (type === 'classic') {
			options = [
				{ title: data.option1, result: false },
				{ title: data.option2, result: false },
				{ title: data.option3, result: false },
				{ title: data.option4, result: false },
			];
		} else {
			options = [
				{ title: strings[params.quiz.language].true, result: false },
				{ title: strings[params.quiz.language].false, result: false },
			];
		}

		let objQuestion = {
			title: data.title,
			options,
			score: 5,
		};

		objQuestion.options[checked - 1].result = true;

		let quiz = {
			...params.quiz,
		};
		if (params.edit !== undefined) {
			quiz.questions[params.edit] = objQuestion;
			return navigation.navigate('QuizMakeDetails', { quiz });
		}

		quiz.questions.push(objQuestion);
		setChecked('1');
		reset({
			title: '',
			option1: '',
			option2: '',
			option3: '',
			option4: '',
		});
	};

	const onSubmit = (data) => {
		let options;
		if (type === 'classic') {
			options = [
				{ title: data.option1, result: false },
				{ title: data.option2, result: false },
				{ title: data.option3, result: false },
				{ title: data.option4, result: false },
			];
		} else {
			options = [
				{ title: strings[params.quiz.language].true, result: false },
				{ title: strings[params.quiz.language].false, result: false },
			];
		}
		let objQuestion = {
			title: data.title,
			options: options,
			score: 5,
		};
		objQuestion.options[checked - 1].result = true;

		let quiz = {
			...params.quiz,
		};

		quiz.questions.push(objQuestion);
		setChecked('1');
		reset({
			title: '',
			option1: '',
			option2: '',
			option3: '',
			option4: '',
		});
		navigation.navigate('QuizMakeDetails', { quiz });
	};
	useFocusEffect(
		useCallback(() => {
			if (params.edit !== undefined) {
				if (params.quiz.questions[params.edit].options.length > 2) {
					reset({
						title: params.quiz.questions[params.edit].title,
						option1:
							params.quiz.questions[params.edit].options[0].title,
						option2:
							params.quiz.questions[params.edit].options[1].title,
						option3:
							params.quiz.questions[params.edit].options[2].title,
						option4:
							params.quiz.questions[params.edit].options[3].title,
					});
				} else {
					setType('boolean');
					reset({
						title: params.quiz.questions[params.edit].title,
					});
					setChecked(
						(
							params.quiz.questions[
								params.edit
							].options.findIndex((option) => option.result) + 1
						).toString(),
					);
				}
			}
		}, [params.edit]),
	);

	return (
		<ThemeProvider theme={theme}>
			<Screen centerContent={true}>
				<NavBar
					string={s.nav}
					nav1={() => navigation.goBack()}
					icon1='ios-arrow-back'
					icon2=''
				/>
				<Text
					style={{
						textAlign: 'right',
						fontWeight: 'bold',
						paddingVertical: 10,
						paddingHorizontal: 20,
						textTransform: 'uppercase',
						fontSize: 11,
						color: theme.text,
					}}
				>
					{s.question} N°{' '}
					{params?.edit + 1 || params.quiz.questions.length + 1}
				</Text>
				<Title>
					<Text
						style={{
							fontSize: 28,
							fontWeight: 'bold',
							color: theme.text,
							textAlign: 'center',
						}}
					>
						{s.title2}
					</Text>
					<Text
						style={{
							alignSelf: 'center',
							color: '#ccc',
							fontSize: 18,
							marginTop: 5,
						}}
					>
						{s.title2_1}
					</Text>
				</Title>
				<FormContainer>
					<Picker
						selectedValue={type}
						style={{
							marginBottom: 20,
							height: 40,
							width: '95%',
							alignSelf: 'center',
							color: theme.text,
							backgroundColor: theme.bg,
							borderRadius: 10,
							padding: 10,
							borderColor: theme.primary,
							fontFamily: 'Nunito_400Regular',
						}}
						onValueChange={(value) => {
							setType(value);
						}}
					>
						<Picker.Item value='classic' label={s.typeClassic} />
						<Picker.Item value='boolean' label={s.typeBoolean} />
					</Picker>

					<InputContainer>
						<Controller
							control={control}
							render={({ onChange, onBlur, value }) => {
								return (
									<QuizInput
										onBlur={onBlur}
										placeholder={s.question}
										placeholderTextColor={theme.text}
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
					{type === 'classic' ? (
						<>
							{[1, 2, 3, 4].map((n) => (
								<InputContainer key={`option${n}`}>
									<Controller
										control={control}
										render={({
											onChange,
											onBlur,
											value,
										}) => {
											return (
												<QuizInput
													onBlur={onBlur}
													placeholder={s.option + n}
													placeholderTextColor={
														theme.text
													}
													onChangeText={(value) =>
														onChange(value)
													}
													value={value}
												/>
											);
										}}
										name={`option${n}`}
										rules={{ required: true }}
										defaultValue=''
									/>
									{errors[`option${n}`] && (
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
							))}
							<Text
								style={{
									color: theme.text,
									alignSelf: 'center',
									fontSize: 18,
									marginTop: 5,
									marginBottom: 5,
								}}
							>
								{s.correct}
							</Text>
							<View
								style={{
									width: '95%',
									alignSelf: 'center',
									flexDirection: 'row',
									justifyContent: 'space-between',
								}}
							>
								{[1, 2, 3, 4].map((n) => (
									<View
										key={`check${n}`}
										style={{
											width: 40,
											flexDirection: 'row',
											alignItems: 'center',
											justifyContent: 'center',
										}}
									>
										<Text
											style={{
												fontSize: 20,
												color: theme.text,
												margin: 'auto',
											}}
										>
											{n}
										</Text>
										<RadioButton
											uncheckedColor={theme.text}
											value={`${n}`}
											status={
												checked === `${n}`
													? 'checked'
													: 'unchecked'
											}
											onPress={() => setChecked(`${n}`)}
										/>
									</View>
								))}
							</View>
						</>
					) : (
						<>
							<View
								style={{
									width: '95%',
									alignSelf: 'center',
									flexDirection: 'row',
									justifyContent: 'space-around',
								}}
							>
								{[s.true, s.false].map((n, i) => (
									<View
										key={`check${n}`}
										style={{
											flexDirection: 'column',
											alignItems: 'center',
											justifyContent: 'center',
										}}
									>
										<Text
											style={{
												fontSize: 20,
												color: theme.text,
											}}
										>
											{n}
										</Text>

										<RadioButton
											uncheckedColor={theme.text}
											value={`${n}`}
											status={
												checked === `${i + 1}`
													? 'checked'
													: 'unchecked'
											}
											onPress={() =>
												setChecked(`${i + 1}`)
											}
										/>
									</View>
								))}
							</View>
						</>
					)}
					<View style={{ marginTop: 10 }}>
						<ButtonPpal
							string={
								params.edit !== undefined
									? s.finishEdit
									: s.next
							}
							onSubmit={handleSubmit(onNext)}
						/>
					</View>
					{params.quiz.questions.length >= 3 &&
						params.edit === undefined && (
							<View style={{ marginTop: 10, marginBottom: 10 }}>
								<ButtonPpal
									string={s.finish}
									onSubmit={handleSubmit(onSubmit)}
								/>
							</View>
						)}
				</FormContainer>
			</Screen>
		</ThemeProvider>
	);
};

// QuizMakeQuestions.defaultProps = {
// 	routes: {
// 		params: {
// 			quiz: {
// 				categoryId: '5959e34adf833e1451a00005',
// 				description: 'Demuestra que tan fan eres de rapido y furioso',
// 				image:
// 					'https://therubyhub.com/wp-content/uploads/2019/09/Quiz.jpg',
// 				questions: [],
// 				time: 10,
// 				title: 'Eres fan de Rapido y furioso?',
// 				language: 'es',
// 			},
// 		},
// 	},
// };

const Screen = styled.ScrollView`
	flex: 1;
	background-color: ${(props) => props.theme.bg};
	position: relative;
`;

const Title = styled.View`
	width: 95%;
	align-self: center;
	margin: 0 0 20px;
`;

const FormContainer = styled.View`
	width: 95%;
	align-self: center;
	border-radius: 10px;
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

export default QuizMakeQuestions;
