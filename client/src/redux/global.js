import { createSlice } from '@reduxjs/toolkit';

const globalSlice = createSlice({
	name: 'global',
	initialState: {
		language: 'en',
	},
	reducers: {
		changeLanguage: (state) => {
			state.language = state.language === 'en' ? 'es' : 'en';
		}
	},
});

export const { changeLanguage } = globalSlice.actions;

export default globalSlice.reducer;
