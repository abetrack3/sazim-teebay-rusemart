import { authMiddleware } from '../middlewares/auth.middleware';
import express, { Application } from 'express';
import { ApolloServer } from '@apollo/server';
import { typeDefinitions } from '../graphql/schema';
import { resolvers } from '../graphql/resolvers';
import http from 'http';
import cors from 'cors';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { expressMiddleware } from '@apollo/server/express4';
import ApplicationContext from '../common/model';

export const initServer = async () => {

    const expressApplication: Application = express();
    const port: number = parseInt(process.env.WEB_SERVER_PORT!);

    const httpServer = http.createServer(expressApplication);

    const apolloServer = new ApolloServer<ApplicationContext>({
        typeDefs: typeDefinitions,
        resolvers: [resolvers],
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer }) ]
    });

    await apolloServer.start();

    expressApplication.use(
        '/api/graphql',
        cors<cors.CorsRequest>(),
        express.json(),
        expressMiddleware(apolloServer, { context: async ({ req }) => authMiddleware(req) }),
    );

    await new Promise<void>((resolve) => httpServer.listen({ port: port }, resolve));
    console.log(`🚀 Server ready at http://localhost:${port}/`);

}