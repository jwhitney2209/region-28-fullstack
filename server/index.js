import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import path from 'path';
import typeDefs from './graphql/typeDefs.js';
import { Query, Mutation } from './graphql/resolvers/index.js';
import db from './config/connection.js';
import { authMiddleware } from './utils/auth.js';
import cors from 'cors';

const resolvers = {
  Query,
  Mutation
}

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  context: ({ req }) => authMiddleware(req),
  cors: false,  // <-- This should be set to false
});

const startApolloServer = async () => {
  await server.start();
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(cors());
  app.use("/graphql", expressMiddleware(server, {
    context: authMiddleware,
  }));

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    })
  })
}

startApolloServer();