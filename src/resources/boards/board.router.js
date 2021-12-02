const Board = require('./board.model');
const boardsService = require('./board.service');
const { removeTasksByBoard } = require('../tasks/task.memory.repository');

const boardsRoute = (fastify, options, done) => {
  fastify.get('/', async (_, reply) => {
    const boards = await boardsService.getAllBoards();
    reply.status(200).send(boards);
  });
  fastify.get('/:boardId', async (req, reply) => {
    const { boardId } = req.params;
    const board = await boardsService.getBoardById(boardId);
    if (!board) return reply.status(404).send({ message: 'Board not found' });
    return reply.status(200).send(board);
  });
  fastify.post('/', async (req, reply) => {
    const { title, columns } = req.body;
    const newBoard = new Board({ title, columns });
    await boardsService.addNewBoard(newBoard);
    reply.status(201).send(newBoard);
  });
  fastify.put('/:boardId', async (req, reply) => {
    const { boardId } = req.params;
    const { title, columns } = req.body;
    const updatedBoard = new Board({ title, columns });
    updatedBoard.id = boardId;
    await boardsService.updateBoard(updatedBoard);
    reply.status(200).send(updatedBoard);
  });
  fastify.delete('/:boardId', async (req, reply) => {
    const { boardId } = req.params;
    await removeTasksByBoard(boardId);
    await boardsService.deleteBoard(boardId);
    reply.status(204);
  });
  done();
};

module.exports = boardsRoute;
