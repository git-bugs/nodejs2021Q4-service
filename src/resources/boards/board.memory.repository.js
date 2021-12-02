let boards = [];

const getAllBoards = () => boards;

const getBoardById = (boardId) => boards.find((item) => item.id === boardId);

const addNewBoard = (newBoard) => {
  boards.push(newBoard);
};

const updateBoard = (updatedBoard) => {
  boards = boards.map((item) =>
    item.id === updatedBoard.id ? updatedBoard : item
  );
};

const deleteBoard = (boardId) => {
  boards = boards.filter((item) => item.id !== boardId);
};

module.exports = {
  getAllBoards,
  getBoardById,
  addNewBoard,
  updateBoard,
  deleteBoard,
};
