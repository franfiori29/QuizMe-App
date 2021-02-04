import { createSlice } from '@reduxjs/toolkit';
import { lightTheme, darkTheme } from '@root/Theme';

const globalSlice = createSlice({
	name: 'global',
	initialState: {
		language: 'en',
		theme: lightTheme,
		sound: true,
		vibration: true,
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
		switchVibration: (state) => {
			state.vibration = state.vibration ? false : true;
		},
	},
});

export const {
	changeLanguage,
	switchTheme,
	switchSound,
	switchVibration,
} = globalSlice.actions;

export default globalSlice.reducer;
