const Board = require('./board.model');
const boardsService = require('./board.service');
// const { removeTasksByBoard } = require('../tasks/task.memory.repository');

const boardsRoute = (fastify, options, done) => {
  fastify.get('/boards', async (req, reply) => {
    const boards = await boardsService.getAllBoards();
    reply.status(200).send(boards);
  });
  fastify.get('/boards/:boardId', async (req, reply) => {
    const { boardId } = req.params;
    const board = await boardsService.getBoardById(boardId);
    if (!board) return reply.status(404).send({ message: 'Board not found' });
    return reply.status(200).send(board);
  });
  fastify.post('/boards', async (req, reply) => {
    const { title, columns } = req.body;
    const newBoard = new Board({ title, columns });
    await boardsService.addNewBoard(newBoard);
    reply.status(201).send(newBoard);
  });
  fastify.put('/boards/:boardId', async (req, reply) => {
    const { boardId } = req.params;
    const { title, columns } = req.body;
    const updatedBoard = new Board({ title, columns });
    updatedBoard.id = boardId;
    await boardsService.updateBoard(updatedBoard);
    reply.status(200).send(updatedBoard);
  });
  // fastify.delete('/boards/:boardId', async (req, reply) => {
  //   const { boardId } = req.params;
  //   await boardsService.deleteBoard(boardId);
  //   await removeTasksByBoard(boardId);
  //   reply.status(204).send({ message: 'Deleted' });
  // });
  done();
};

module.exports = boardsRoute;
