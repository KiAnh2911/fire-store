import Router from "koa-router";
import * as todosHandler from "../handlers/todoHandlers";
// Prefix all routes with /books
const router = new Router({
  prefix: "/api",
});

// router todo
router.get("/todos", todosHandler.getTodos);
router.post("/todo", todosHandler.addTodo);
router.patch("/todos", todosHandler.updataMany);
router.delete("/todos", todosHandler.removeMany);

export default router;
