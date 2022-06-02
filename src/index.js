import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from "@apollo/client";
import { App } from './App';
import { AppProvider } from './contex';
import { setContext } from "@apollo/client/link/context";
import { onError } from '@apollo/client/link/error'
const httpLink = createHttpLink({
  uri: "https://petgramapionedrako.vercel.app/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),

  onError: onError(
    ({ networkError }) => {
      if (networkError && networkError.result.code === 'invalid_token') {
        window.sessionStorage.removeItem('token')
        window.location.href = '/'
      }
    }
  )

});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <AppProvider value={{ isAuth: true }}>
      <App />
    </AppProvider>
  </ApolloProvider>
);


