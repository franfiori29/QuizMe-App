import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getClient } from '@constants/api';
import { gql } from 'graphql-request';

/* --- Get all categories --- */
const getAllCategories = gql`
	{
		getCategories {
			_id
			description_en
			description_es
		}
	}
`;
export const getCategories = createAsyncThunk(
	'category/getAll',
	async (lang, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(getAllCategories);
		return { clientRequest, lang };
	}
);

const categorySlice = createSlice({
	name: 'quiz',
	initialState: {
		categories: [],
	},
	reducers: {
		sortCategories: (state, { payload }) => {
			state.categories = state.categories.sort((a, b) =>
				a[`description_${payload}`] > b[`description_${payload}`]
					? 1
					: -1
			);
		},
	},
	extraReducers: {
		[getCategories.fulfilled]: (
			state,
			{ payload: { clientRequest, lang } }
		) => {
			state.categories = clientRequest.getCategories.sort((a, b) =>
				a[`description_${lang}`] > b[`description_${lang}`] ? 1 : -1
			);
		},
	},
});

export const { sortCategories } = categorySlice.actions;

export default categorySlice.reducer;
