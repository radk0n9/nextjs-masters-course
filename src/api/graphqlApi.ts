import { redirect } from "next/navigation";
import { type TypedDocumentString } from "@/gql/graphql";

export const excecuteGraphQL = async <TResult, TVariables>({
	query,
	variables,
	cache,
	next,
	headers,
}: {
	query: TypedDocumentString<TResult, TVariables>;
	cache?: RequestCache;
	headers?: HeadersInit;
	next?: NextFetchRequestConfig | undefined;
	variables: TVariables;
}): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("GRAPHQL_URL is not defined");
	}

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: {
			...headers,
			"Content-Type": "application/json",
		},
		next,
		cache,
	});

	type GraphQLResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;
	if (graphqlResponse.errors) {
		console.dir(graphqlResponse.errors, { depth: 999 });
		redirect("/error-graphql");
		throw TypeError(`GraphQL Error`, {
			cause: graphqlResponse.errors,
		});
	}
	return graphqlResponse.data;
};
