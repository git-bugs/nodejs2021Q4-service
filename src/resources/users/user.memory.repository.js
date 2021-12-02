let users = [];

const getAllUsers = async () => users;

const getUserById = (userId) => users.find((item) => item.id === userId);

const addNewUser = (newUser) => {
  users.push(newUser);
};

const updateUser = (updatedUser) => {
  users = users.map((item) =>
    item.id === updatedUser.id ? updatedUser : item
  );
};

const deleteUser = (userId) => {
  users = users.filter((item) => item.id !== userId);
};

module.exports = {
  getAllUsers,
  addNewUser,
  getUserById,
  updateUser,
  deleteUser,
};
