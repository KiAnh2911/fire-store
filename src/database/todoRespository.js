import db from "../firestore/config";
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
    createAt: new Date(),
    ...data,
    completed: false,
  };

  const todo = await todoRef.add(addTodo);

  return { id: todo.id, ...addTodo };
}

export async function updateTodos(todos = []) {
  const updates = todos.map(async (id) => {
    const { completed } = (await todoRef.doc(`${id}`).get()).data();

    return todoRef.doc(`${id}`).update({
      completed: !completed,
      updatedAt: new Date(),
    });
  });

  return await Promise.all(updates);
}

export async function removeManyTodo(ids = []) {
  const todoRemove = ids.map((id) => todoRef.doc(String(id)).delete());

  return await Promise.all(todoRemove);
}
