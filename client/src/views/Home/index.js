import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

// example fetch, until we get our own API up
// @TODO https://trello.com/c/gfYXoxCE/68-setup-graphql-apollo-server-side
const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

const ExchangeRates = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
};

const Home = () => {
  return (
    <div>
      <ExchangeRates />
    </div>
  );
};

export default Home;
