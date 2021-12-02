let tasks = [];

const getAllTasks = async (boardId) => {
  const boardIdTasks = tasks.filter((item) => item.boardId === boardId);
  return boardIdTasks;
};

const getTaskById = (taskId) => tasks.find((item) => item.id === taskId);

const addNewTask = (newTask) => {
  tasks.push(newTask);
};

const updateTask = (updatedTask) => {
  tasks = tasks.map((item) =>
    item.id === updatedTask.id ? updatedTask : item
  );
};

const deleteTask = (taskId) => {
  tasks = tasks.filter((item) => item.id !== taskId);
};

const removeTasksByBoard = (boardId) => {
  tasks = tasks.filter((item) => item.boardId !== boardId);
};

const updateTasksByUser = (userId) => {
  tasks = tasks.map((item) =>
    item.userId === userId ? { ...item, userId: null } : item
  );
};

module.exports = {
  getAllTasks,
  addNewTask,
  getTaskById,
  updateTask,
  deleteTask,
  removeTasksByBoard,
  updateTasksByUser,
};
