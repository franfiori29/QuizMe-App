import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';

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
	const s = strings[language];
	const { control, handleSubmit, errors, reset } = useForm();

	const [checked, setChecked] = useState('1');

	const onNext = (data) => {
		let objQuestion = {
			title: data.title,
			options: [
				{
					title: data.option1,
					result: false,
				},
				{
					title: data.option2,
					result: false,
				},
				{
					title: data.option3,
					result: false,
				},
				{
					title: data.option4,
					result: false,
				},
			],
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
	};

	const onSubmit = (data) => {
		let objQuestion = {
			title: data.title,
			options: [
				{
					title: data.option1,
					result: false,
				},
				{
					title: data.option2,
					result: false,
				},
				{
					title: data.option3,
					result: false,
				},
				{
					title: data.option4,
					result: false,
				},
			],
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

	return (
		<ThemeProvider theme={theme}>
			<Screen centerContent={true}>
				<NavBar
					string={s.nav}
					nav1={() => navigation.navigate('Home')}
					icon1='ios-close'
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
					}}
				>
					{s.question} N° {params.quiz.questions.length + 1}
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
					{[1, 2, 3, 4].map((n) => (
						<InputContainer key={`option${n}`}>
							<Controller
								control={control}
								render={({ onChange, onBlur, value }) => {
									return (
										<QuizInput
											onBlur={onBlur}
											placeholder={s.option + n}
											placeholderTextColor={theme.text}
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
					<View style={{ marginTop: 10 }}>
						<ButtonPpal
							string={s.next}
							onSubmit={handleSubmit(onNext)}
							navigation={navigation}
							nav=''
						/>
					</View>
					{params.quiz.questions.length >= 3 && (
						<View style={{ marginTop: 10, marginBottom: 10 }}>
							<ButtonPpal
								string={s.finish}
								onSubmit={handleSubmit(onSubmit)}
								navigation={navigation}
								nav=''
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

const ErrorBubble = styled.Text`
	color: #d53051;
	padding: 10px 20px;
	border-color: #d53051;
	border-width: 1px;
	border-radius: 5px;
	margin: 10px 0;
`;

export default QuizMakeQuestions;
