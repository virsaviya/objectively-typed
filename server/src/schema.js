const { gql } = require('apollo-server');

const typeDefs = gql`
    # Your schema will go here
    
    type Greeting {
        message: String!
        language: String!
    }
    
    type Query {
        greeting(language: String!): Greeting!
    }
    
    type Mutation {
        changeGreeting(language: String!, message: String!): GreetingChangeResponse!
    }
    
    type GreetingChangeResponse {
        success: Boolean!
        message: String
        greeting: Greeting!
    }
`;

module.exports = typeDefs;