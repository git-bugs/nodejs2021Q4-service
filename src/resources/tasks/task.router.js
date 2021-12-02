const Task = require('./task.model');
const tasksService = require('./task.service');

const tasksRouter = (fastify, options, done) => {
  fastify.get('/', async (req, reply) => {
    const { boardId } = req.params;
    const tasks = await tasksService.getAllTasks(boardId);
    reply.status(200).send(tasks);
  });
  fastify.get('/:taskId', async (req, reply) => {
    const { taskId } = req.params;
    const task = await tasksService.getTaskById(taskId);
    if (!task) return reply.status(404).send({ message: 'Task not found' });
    return reply.status(200).send(task);
  });
  fastify.post('/', async (req, reply) => {
    const { boardId } = req.params;
    const { title, order, description, userId, columnId } = req.body;
    const newTask = new Task({
      title,
      order,
      description,
      userId,
      columnId,
      boardId,
    });
    await tasksService.addNewTask(newTask);
    reply.status(201).send(newTask);
  });
  fastify.put('/:taskId', async (req, reply) => {
    const { boardId, taskId } = req.params;
    const { title, order, description, userId, columnId } = req.body;
    const updatedTask = new Task({
      title,
      order,
      description,
      userId,
      columnId,
      boardId,
    });
    updatedTask.id = taskId;
    await tasksService.updateTask(updatedTask);
    reply.status(200).send(updatedTask);
  });
  fastify.delete('/:taskId', async (req, reply) => {
    const { taskId } = req.params;
    await tasksService.deleteTask(taskId);
    reply.status(204);
  });
  done();
};

module.exports = tasksRouter;
