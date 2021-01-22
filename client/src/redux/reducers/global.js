import { createSlice } from '@reduxjs/toolkit';
import { lightTheme, darkTheme } from '@root/Theme';

const globalSlice = createSlice({
	name: 'global',
	initialState: {
		language: 'en',
		theme: lightTheme,
	},
	reducers: {
		changeLanguage: (state) => {
			state.language = state.language === 'en' ? 'es' : 'en';
		},
		switchTheme: (state) => {
			state.theme =
				state.theme.mode === lightTheme.mode ? darkTheme : lightTheme;
		},
	},
});

export const { changeLanguage, switchTheme } = globalSlice.actions;

export default globalSlice.reducer;
