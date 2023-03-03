"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_controller_1 = require("../controllers/todo_controller");
const router = (0, express_1.Router)();
router.post('/', todo_controller_1.createTodo);
router.get('/', todo_controller_1.getTodos);
router.patch('/:id', todo_controller_1.updateTodo);
router.delete('/:id', todo_controller_1.delTodo);
exports.default = router;