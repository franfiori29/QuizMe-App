import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		info: {},
		token: '',
	},
	reducers: {
		getUser: (state, { payload }) => {
			state.info = payload;
		},
		getUserA: (state, { payload }) => {
			state.info = payload;
		},
		setToken: (state, { payload }) => {
			state.token = payload;
		},
		logout: (state) => {
			state.token = '';
			state.info = {};
		},
	},
});

export const { getUser, setToken, logout } = userSlice.actions;

export default userSlice.reducer;
