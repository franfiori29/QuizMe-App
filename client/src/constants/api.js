import { GraphQLClient } from 'graphql-request';

export function getClient(state) {
	const { REACT_APP_API } = process.env.APP_MANIFEST.extra;
	const authToken = state.user.token;
	const client = new GraphQLClient(`${REACT_APP_API}/graphql`, {
		headers: {
			Authorization: `Bearer ${authToken}`,
		},
	});
	return client;
}
