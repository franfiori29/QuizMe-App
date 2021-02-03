import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getClient } from '@constants/api';
import {
	getAllCategories,
	mutationCreateCategory,
	mutationDestroyCategory,
	mutationUpdateCategory,
} from './querys/categories';

export const getCategories = createAsyncThunk(
	'category/getAll',
	async (lang, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(getAllCategories);
		return { clientRequest, lang };
	}
);

export const destroyCategory = createAsyncThunk(
	'category/destroyCat',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(mutationDestroyCategory, {
			catId: payload,
		});
		return clientRequest.destroyCategory;
	}
);

export const createCategory = createAsyncThunk(
	'category/createOne',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(mutationCreateCategory, {
			category: payload,
		});
		return clientRequest;
	}
);
export const updateCategory = createAsyncThunk(
	'category/updateOne',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(mutationUpdateCategory, {
			category: payload.category,
			catId: payload.catId,
		});
		return clientRequest;
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
		[getCategories.pending]: (state) => {
			state.loading = true;
		},
		[getCategories.fulfilled]: (
			state,
			{ payload: { clientRequest, lang } }
		) => {
			state.categories = clientRequest.getCategories.sort((a, b) =>
				a[`description_${lang}`] > b[`description_${lang}`] ? 1 : -1
			);
			state.loading = false;
		},
	},
});

export const { sortCategories } = categorySlice.actions;

export default categorySlice.reducer;
