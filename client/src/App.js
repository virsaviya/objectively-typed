import React from 'react';
import ApolloClient, { gql } from 'apollo-boost';

import { ApolloProvider } from '@apollo/react-hooks';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';

import AppBar from 'components/AppBar';
import theme from 'assets/theme';
import Routes from 'Routes';
import GlobalWrapper from './styles';

// example endpoint, until we get our own API up
// @TODO https://trello.com/c/gfYXoxCE/68-setup-graphql-apollo-server-side
const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `,
  })
  .then(result => console.log(result));

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalWrapper>
          <BrowserRouter>
            <AppBar />
            <Routes />
          </BrowserRouter>
        </GlobalWrapper>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
