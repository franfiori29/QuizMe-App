import { createSlice } from '@reduxjs/toolkit';
import { lightTheme, darkTheme } from '@root/Theme';

const globalSlice = createSlice({
	name: 'global',
	initialState: {
		language: 'en',
		theme: lightTheme,
		sound: true,
	},
	reducers: {
		changeLanguage: (state) => {
			state.language = state.language === 'en' ? 'es' : 'en';
		},
		switchTheme: (state) => {
			state.theme =
				state.theme.mode === lightTheme.mode ? darkTheme : lightTheme;
		},
		switchSound: (state) => {
			state.sound = state.sound ? false : true;
		},
	},
});

export const { changeLanguage, switchTheme, switchSound } = globalSlice.actions;

export default globalSlice.reducer;
