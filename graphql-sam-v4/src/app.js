const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const serverlessExpress = require('@vendia/serverless-express');
const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');

const server = new ApolloServer({
  typeDefs: 'type Query { hello: ID }',
  resolvers: { Query: { hello: () => 'hi! Subbu' } },
});

server.startInBackgroundHandlingStartupErrorsByLoggingAndFailingAllRequests();

const app = express();
app.use(
  cors(),
  json(),
  expressMiddleware(server, {
    // The Express request and response objects are passed into
    // your context initialization function
    context: async ({ req, res }) => {
      // Here is where you'll have access to the
      // API Gateway event and Lambda Context
      const { event, context } = serverlessExpress.getCurrentInvoke();
      return {
        expressRequest: req,
        expressResponse: res,
        lambdaEvent: event,
        lambdaContext: context,
      };
    },
  }),
);

exports.handler = serverlessExpress({ app });