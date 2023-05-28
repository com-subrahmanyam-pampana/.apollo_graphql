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
  context: ({ event, context }) => {
    //console.log("<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>")
   //console.log(event)
   //onsole.log("<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>")
  },
  playground: {
    endpoint: "/dev/graphql"
  }
});

let data={expressGetMiddlewareOptions:{cors: {
  origin: "*",
  credentials: true
},}}

//This creates an export named graphqlHandler with a Lambda function handler.





exports.handler = server.createHandler(data); 
