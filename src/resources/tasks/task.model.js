const { v4 } = require('uuid');

class Task {
  constructor({
    title,
    order,
    description,
    userId = null,
    boardId = null,
    columnId = null,
  }) {
    this.id = v4();
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = Task;
