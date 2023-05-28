const { ApolloServer } = require('apollo-server-lambda');
 

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
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
  playground: {
    endpoint: "/dev/graphql"
  }
});

let data={expressGetMiddlewareOptions:{cors: {
  origin: false,
  credentials: false,
},}}

//This creates an export named graphqlHandler with a Lambda function handler.
export const graphqlHandler = server.createHandler(); 

