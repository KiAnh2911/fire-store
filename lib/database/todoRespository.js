"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAdd = getAdd;
exports.getListTodo = getListTodo;
exports.removeManyTodo = removeManyTodo;
exports.updateTodos = updateTodos;
var _config = _interopRequireDefault(require("../firestore/config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const admin = require("firebase-admin");
const todoRef = _config.default.collection("todos");
async function getListTodo(sort = "ASC", limit = 5) {
  const todos = await todoRef.orderBy("createAt", sort).limit(Number(limit)).get();
  return todos.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data()
    };
  });
}
async function getAdd(data) {
  const addTodo = {
    createAt: admin.firestore.Timestamp.now().toDate(),
    ...data,
    completed: false
  };
  const todo = await todoRef.add(addTodo);
  return {
    id: todo.id,
    ...addTodo
  };
}
async function updateTodos(todos = []) {
  const todoAll = await getListTodo();
  const updateAll = todoAll.filter(todoItem => {
    return todos.includes(todoItem.id);
  });
  const updates = updateAll.map(todo => {
    return todoRef.doc(`${todo.id}`).update({
      ...todo,
      completed: !todo.completed,
      updatedAt: admin.firestore.Timestamp.now().toDate()
    });
  });
  return await Promise.all(updates);
}
async function removeManyTodo(ids = []) {
  const todoRemove = ids.map(id => todoRef.doc(String(id)).delete());
  return await Promise.all(todoRemove);
}
//# sourceMappingURL=todoRespository.js.map