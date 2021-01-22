import { GraphQLClient } from 'graphql-request';
import { REACT_APP_API } from '@root/env';

export function getClient(state) {
	const authToken = state.user.token;
	const client = new GraphQLClient(`${REACT_APP_API}/graphql`, {
		headers: {
			Authorization: `Bearer ${authToken}`,
		},
	});
	return client;
}
