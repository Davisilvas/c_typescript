"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_model_1 = require("../models/todo_model");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todo_model_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Successfully created', createdTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error('could not find todo.');
    }
    TODOS[todoIndex] = new todo_model_1.Todo(TODOS[todoIndex].id, updatedText);
    res.json({ message: 'updated', updatedTodo: TODOS[todoIndex] });
};
exports.updateTodo = updateTodo;
const delTodo = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error('could not find todo.');
    }
    TODOS.splice(todoIndex, 1);
    res.json({ message: 'ToDo Deleted!' });
};
exports.delTodo = delTodo;
