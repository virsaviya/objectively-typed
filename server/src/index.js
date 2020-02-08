const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { createStore } = require('./utils');

const GreeingAPI = require('./datasources/greeting');

const store = createStore();

const server = new ApolloServer({
    typeDefs,
    dataSources: () => ({
        greeingAPI: new GreeingAPI({ store })
    })
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});