import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';

import { typeDefs } from './type-defs';
import { resolvers } from './resolvers';

const app = express();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use(
  '/public',
  cors(),
  bodyParser.json(),
  graphqlExpress({ schema }),
);

if (process.env.NODE_ENV !== 'production') {
  app.use(
    '/graphiql',
    graphiqlExpress({ endpointURL: '/public' }),
  );
}

app.listen(3000, () => {
  console.log('App started at port 3000');
});
