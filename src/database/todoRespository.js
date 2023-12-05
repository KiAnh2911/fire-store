import db from "../firestore/config";
const admin = require("firebase-admin");
const todoRef = db.collection("todos");

export async function getListTodo(sort = "ASC", limit = 0) {
  const todos = await todoRef
    .orderBy("createAt", sort)
    .limit(Number(limit))
    .get();

  return todos.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
}

export async function getAdd(data) {
  const addTodo = {
    createAt: admin.firestore.Timestamp.now().toDate(),
    ...data,
    completed: false,
  };

  const todo = await todoRef.add(addTodo);

  return { id: todo.id, ...addTodo };
}

export async function updateTodos(todos = []) {
  const todoAll = await getListTodo();

  const updateAll = todoAll.filter((todoItem) => {
    return todos.includes(todoItem.id);
  });

  const updates = updateAll.map((todo) => {
    return todoRef.doc(`${todo.id}`).update({
      ...todo,
      completed: !todo.completed,
      updatedAt: admin.firestore.Timestamp.now().toDate(),
    });
  });
  return await Promise.all(updates);
}

export async function removeManyTodo(ids = []) {
  const todoRemove = ids.map((id) => todoRef.doc(String(id)).delete());

  return await Promise.all(todoRemove);
}
