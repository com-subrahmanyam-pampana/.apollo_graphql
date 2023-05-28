import { ApolloServer } from '@apollo/server';
import { startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda'; //highlight-line

const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello Subbu !!!How are you',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// This final export is important!
export const graphqlHandler = startServerAndCreateLambdaHandler(server); //highlight-line