import React, { useEffect, useState } from 'react';
import { Alert, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useForm, Controller } from 'react-hook-form';

import ButtonPpal from '@components/utils/ButtonPpal';

import strings from '../strings';
import NavBar from '../../utils/NavBar';
import {
	getCategories,
	updateCategory,
} from '../../../redux/reducers/categories';

const EditCategory = ({
	navigation,
	route: {
		params: { category },
	},
}) => {
	const { control, handleSubmit, errors } = useForm();
	const dispatch = useDispatch();
	const { theme, language } = useSelector((state) => state.global);
	const s = strings[language];
	const onSubmit = async (data) => {
		await dispatch(updateCategory({ catId: category._id, category: data }));
		dispatch(getCategories(language));
		navigation.navigate('AdminCategories');
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
				<InputContainer>
					<Controller
						control={control}
						render={({ onChange, onBlur, value }) => {
							return (
								<InputCategory
									placeholder='Nombre de categoría'
									onChangeText={(value) => onChange(value)}
									placeholderTextColor={
										'rgba(255,255,255,0.7)'
									}
									underlineColorAndroid='transparent'
									value={value}
								/>
							);
						}}
						name='description_es'
						rules={{
							required: true,
						}}
						defaultValue={category.description_es}
					/>
					{errors.email && (
						<ErrorIcon>
							<Text
								style={{
									color: '#D53051',
									fontSize: 13,
									textTransform: 'uppercase',
									marginRight: 5,
									fontFamily: 'Nunito_800ExtraBold',
								}}
							>
								{s.req}
							</Text>
							<Icon
								name={'ios-alert-circle'}
								size={25}
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
								<InputCategory
									placeholder='Category name'
									onChangeText={(value) => onChange(value)}
									placeholderTextColor={
										'rgba(255,255,255,0.7)'
									}
									underlineColorAndroid='transparent'
									value={value}
								/>
							);
						}}
						name='description_en'
						rules={{
							required: true,
						}}
						defaultValue={category.description_en}
					/>
					{errors.email && (
						<ErrorIcon>
							<Text
								style={{
									color: '#D53051',
									fontSize: 13,
									textTransform: 'uppercase',
									marginRight: 5,
									fontFamily: 'Nunito_800ExtraBold',
								}}
							>
								{s.req}
							</Text>
							<Icon
								name={'ios-alert-circle'}
								size={25}
								color={'#D53051'}
							/>
						</ErrorIcon>
					)}
				</InputContainer>

				<ButtonContainer>
					<ButtonPpal
						string={s.edit}
						onSubmit={handleSubmit(onSubmit)}
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
const InputContainer = styled.View`
	margin-top: 10px;
	width: 100%;
	position: relative;
`;
const InputCategory = styled.TextInput`
	width: 95%;
	align-self: center;
	height: 45px;
	border-radius: 5px;
	font-size: 16px;
	padding-left: 45px;
	background-color: rgba(0, 0, 0, 0.35);
	color: rgba(255, 255, 255, 0.7);
	margin: 0 25px;
	font-family: 'Nunito_400Regular';
`;
const ButtonContainer = styled.View`
	margin-top: 15px;
	width: 100%;
	height: 90px;
	justify-content: space-between;
	align-items: center;
`;

const IconImage = styled(Icon)`
	position: absolute;
	top: 8px;
	left: 20px;
	z-index: 1;
`;

export default EditCategory;
