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
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(getAllCategories);
		return clientRequest;
	}
);

const categorySlice = createSlice({
	name: 'quiz',
	initialState: {
		categories: [],
	},
	extraReducers: {
		[getCategories.fulfilled]: (state, { payload }) => {
			state.categories = payload.getCategories;
		},
	},
});

export default categorySlice.reducer;
