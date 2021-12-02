// const { updateTasksByUser } = require('../tasks/task.memory.repository');
const User = require('./user.model');
const usersService = require('./user.service');

const userRouter = (fastify, options, done) => {
  fastify.get('/users', async (req, reply) => {
    const users = await usersService.getAllUsers();
    reply.status(200).send(users.map(User.toResponse));
  });
  fastify.get('/users/:userId', async (req, reply) => {
    const { userId } = req.params;
    const user = await usersService.getUserById(userId);
    reply.status(200).send(User.toResponse(user));
  });
  fastify.post('/users', async (req, reply) => {
    const { name, login, password } = req.body;
    const newUser = new User({ name, login, password });
    await usersService.addNewUser(newUser);
    reply.status(201).send(User.toResponse(newUser));
  });
  fastify.put('/users/:userId', async (req, reply) => {
    const { userId } = req.params;
    const { name, login, password } = req.body;
    const updatedUser = new User({ name, login, password });
    updatedUser.id = userId;
    await usersService.updateUser(updatedUser);
    reply.status(200).send(User.toResponse(updatedUser));
  });
  // fastify.delete('/:userId', async (req, reply) => {
  //   const { userId } = req.params;
  //   await updateTasksByUser(userId);
  //   await usersService.deleteUser(userId);
  //   reply.status(204).send({ message: 'Success' });
  // });

  done();
};

module.exports = userRouter;
