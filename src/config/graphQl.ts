import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  from
} from '@apollo/client';
import { getToken } from '../utils';
import { onError } from '@apollo/client/link/error';

const errlink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({
  uri: `${process.env.REACT_APP_BASEURL}graphql`
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }: any) => ({
    headers: {
      ...headers,
      Authorization: `BEARER ${getToken()}`
    }
  }));

  return forward(operation);
});

const link = from([errlink, authMiddleware, httpLink]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
});
