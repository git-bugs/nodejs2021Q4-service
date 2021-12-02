const boardsRepo = require('./board.memory.repository');

const getAllBoards = () => boardsRepo.getAllBoards();

const getBoardById = (boardId) => boardsRepo.getBoardById(boardId);

const addNewBoard = (newBoard) => boardsRepo.addNewBoard(newBoard);

const updateBoard = (updatedBoard) => boardsRepo.updateBoard(updatedBoard);

const deleteBoard = (boardId) => boardsRepo.deleteBoard(boardId);

module.exports = {
  getAllBoards,
  getBoardById,
  addNewBoard,
  updateBoard,
  deleteBoard,
};
