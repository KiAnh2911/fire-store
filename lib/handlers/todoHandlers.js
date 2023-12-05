"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTodo = addTodo;
exports.getTodos = getTodos;
exports.removeMany = removeMany;
exports.updataMany = updataMany;
var _todoRespository = require("../database/todoRespository");
async function getTodos(ctx) {
  try {
    const {
      limit,
      sort
    } = ctx.query;
    const data = await (0, _todoRespository.getListTodo)(sort, limit);
    ctx.status = 200;
    return ctx.body = {
      todo: data
    };
  } catch (error) {
    ctx.status = 400;
    ctx.body = {
      success: false,
      error: error.message
    };
  }
}
async function addTodo(ctx) {
  try {
    const postData = ctx.request.body;
    const data = await (0, _todoRespository.getAdd)(postData);
    ctx.status = 201;
    return ctx.body = {
      success: true,
      todo: data
    };
  } catch (error) {
    console.error("error", error);
    ctx.status = 500;
    ctx.body = {
      success: false,
      data: [],
      error: error.message
    };
  }
}
async function updataMany(ctx) {
  try {
    const todos = ctx.request.body;
    const update = await (0, _todoRespository.updateTodos)(todos);
    ctx.status = 200;
    return ctx.body = {
      success: true,
      todo: update
    };
  } catch (error) {
    console.error("error", error);
    ctx.status = 500;
    ctx.body = {
      success: false,
      todo: [],
      error: error.message
    };
  }
}
async function removeMany(ctx) {
  try {
    const id = ctx.request.body;
    const remove = await (0, _todoRespository.removeManyTodo)(id);
    ctx.status = 200;
    return ctx.body = {
      success: true,
      todo: remove
    };
  } catch (error) {
    console.error("error", error);
    ctx.status = 500;
    ctx.body = {
      success: false,
      todo: [],
      error: error.message
    };
  }
}
//# sourceMappingURL=todoHandlers.js.map