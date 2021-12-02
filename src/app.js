const fastify = require('fastify')({ logger: true });
const path = require('path');

fastify.register(require('fastify-swagger'), {
  exposeRoute: true,
  routePrefix: '/doc',
  mode: 'static',
  specification: {
    path: path.join('./doc/api.yaml'),
  },
});

fastify.get('/', (req, reply) => {
  reply.send('Service is running!');
});

fastify.register(require('./resources/users/user.router'));

module.exports = fastify;
