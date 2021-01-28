import { gql } from 'graphql-request';

/* --- Querys --- */

/* --- Mutations --- */
export const mutationUpdateHighscore = gql`
	mutation updateHighscore($quizId: ID!, $score: Int!) {
		updateHighscore(quizId: $quizId, score: $score)
	}
`;
