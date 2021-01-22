import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
	name: 'user',
	initialState: {
		quiz: {},
		quizzes: [],
	},
	reducers: {
		getQuizzes: (state, { payload }) => {
			state.quizzes = payload;
		},
	},
});

export const { getQuizzes } = quizSlice.actions;

export default quizSlice.reducer;
