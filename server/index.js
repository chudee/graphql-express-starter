import express from 'express';
import expressGraphQL from 'express-graphql';
import http from 'http';

import Schema from './schema';

const app = express();

app.use('/', expressGraphQL({
    schema: Schema,
    graphiql: true
}));

const server = http.createServer(app);
let currentApp = app;

server.listen(3000, () => {
    console.log(`GraphQL-server listening on port 3000.`)
});

if (module.hot) {
    module.hot.accept('./schema', () => {
        server.removeListener('request', currentApp);
        server.on('request', app);
        currentApp = app;
    });
}