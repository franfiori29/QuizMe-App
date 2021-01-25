import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getClient } from '@constants/api';
import { gql } from 'graphql-request';

const queryUpdateUser = gql`
	mutation($payload: UserInput) {
		updateUser(userBody: $payload) {
			_id
			firstName
			lastName
			email
			profilePic
			countryCode
			role
		}
	}
`;
export const updateUser = createAsyncThunk(
	'user/update',
	async (payload, { getState }) => {
		const client = getClient(getState());
		const clientRequest = await client.request(queryUpdateUser, {
			payload,
		});
		return clientRequest;
	}
);
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
		setToken: (state, { payload }) => {
			state.token = payload;
		},
		logout: (state) => {
			state.token = '';
			state.info = {};
		},
	},
	extraReducers: {
		[updateUser.fulfilled]: (state, { payload }) => {
			state.info = payload.updateUser;
		},
	},
});

export const { getUser, setToken, logout } = userSlice.actions;

export default userSlice.reducer;
