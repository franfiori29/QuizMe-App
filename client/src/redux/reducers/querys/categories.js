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
