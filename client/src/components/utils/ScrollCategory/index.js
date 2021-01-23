import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';

const ScrollCategory = ({ categories, handleSelect }) => {
	const { language } = useSelector((state) => state.global);
	const [selected, setSelected] = useState(-1);

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
						setSelected(category._id);
						handleSelect(category._id);
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
`;

const Category = styled.TouchableOpacity`
	height: 60px;
	width: 200px;
	margin: auto 20px;
	border: 2px solid ${(props) => props.theme.primary};
	justify-content: center;
	align-items: center;
	background-color: ${({ selectedColor }) => selectedColor || 'transparent'};
`;

const CategoryName = styled.Text`
	font-size: 18px;
	text-align: center;
	text-transform: uppercase;
	color: ${(props) => props.theme.primary};
`;

export default ScrollCategory;
