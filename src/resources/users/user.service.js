const usersRepo = require('./user.memory.repository');

const getAllUsers = () => usersRepo.getAllUsers();

const getUserById = (userId) => usersRepo.getUserById(userId);

const addNewUser = (newUser) => usersRepo.addNewUser(newUser);

const updateUser = (updatedUser) => usersRepo.updateUser(updatedUser);

const deleteUser = (userId) => usersRepo.deleteUser(userId);

module.exports = { getAllUsers, getUserById, addNewUser, updateUser, deleteUser };
