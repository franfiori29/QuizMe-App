import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Platform, Vibration } from 'react-native';
import styled from 'styled-components/native';
import { getQuizByCategory } from '@redux/reducers/quizzes';

const ScrollCategory = ({ categories, handleSelect }) => {
	const { language } = useSelector((state) => state.global);
	const [selected, setSelected] = useState(-1);
	const dispatch = useDispatch();

	return (
		<ScrollCategoryStyled
			horizontal={true}
			centerContent={true}
			overScrollMode='never'
		>
			{categories.map((category) => (
				<Category
					selectedColor={
						selected === category._id ? '#01493d' : false
					}
					key={category._id}
					onPress={() => {
						setSelected((prev) =>
							prev === category._id
								? setSelected(-1)
								: setSelected(category._id),
						);
						handleSelect(
							selected === category._id ? '' : category._id,
						);

						Platform.OS === 'android' && Vibration.vibrate(100);
					}}
				>
					<CategoryName>
						{category[`description_${language}`]}
					</CategoryName>
				</Category>
			))}
		</ScrollCategoryStyled>
	);
};

const ScrollCategoryStyled = styled.ScrollView`
	border-top-width: 1px;
	border-top-color: #ccc;
	border-bottom-width: 1px;
	border-bottom-color: #ccc;
	height: 80px;
	width: 95%;
	align-self: center;
`;

const Category = styled.TouchableOpacity`
	height: 60px;
	width: 200px;
	margin: auto 20px;
	border: 2px solid ${(props) => props.theme.primary};
	justify-content: center;
	align-items: center;
	background-color: ${({ selectedColor }) => selectedColor || 'transparent'};
	border-radius: 5px;
`;

const CategoryName = styled.Text`
	font-size: 18px;
	text-align: center;
	text-transform: uppercase;
	color: ${(props) => props.theme.primary};
`;

export default ScrollCategory;
