import { gql } from 'graphql-request';

/* --- Fragments --- */

/* --- Querys --- */

export const getAllCategories = gql`
	{
		getCategories {
			_id
			description_en
			description_es
		}
	}
`;

/* --- Mutations --- */
export const mutationDestroyCategory = gql`
	mutation destroyCategory($catId: ID!) {
		destroyCategory(catId: $catId)
	}
`;

export const mutationCreateCategory = gql`
	mutation createCategory($category: InputCategory) {
		createCategory(category: $category) {
			description_en
			description_es
		}
	}
`;
export const mutationUpdateCategory = gql`
	mutation updateCategory($catId: ID!, $category: InputCategory) {
		updateCategory(catId: $catId, category: $category)
	}
`;
