import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new ApolloClient({

  uri: 'http://localhost:4000/',

  cache: new InMemoryCache(),

});

/*
You connect Apollo Client to React with the ApolloProvider component. Similar to React's Context.Provider, ApolloProvider wraps your React app and places Apollo Client on the context, enabling you to access it from anywhere in your component tree.
*/
root.render(

  <ApolloProvider client={client}>

    <App />

  </ApolloProvider>,

);


reportWebVitals();
