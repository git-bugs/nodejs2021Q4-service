const tasksRepo = require('./task.memory.repository');

const getAllTasks = (boardId) => tasksRepo.getAllTasks(boardId);

const getTaskById = (taskId) => tasksRepo.getTaskById(taskId);

const addNewTask = (newTask) => tasksRepo.addNewTask(newTask);

const updateTask = (updatedTask) => tasksRepo.updateTask(updatedTask);

const deleteTask = (taskId) => tasksRepo.deleteTask(taskId);

const removeTasksByBoard = (boardId) => tasksRepo.removeTasksByBoard(boardId);

module.exports = {
  getAllTasks,
  getTaskById,
  addNewTask,
  updateTask,
  deleteTask,
  removeTasksByBoard
};
