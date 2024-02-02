"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.hello);
router.get("/bringTodo", ctrl.process.bringTodo);

router.post("/createTodo", ctrl.process.createTodo);
router.patch("/updateTodo/:updateTodoId", ctrl.process.updateTodo);
router.patch("/checkTodo/:checkTodoId", ctrl.process.checkTodo);
router.delete("/deleteTodo/:deleteTodoId", ctrl.process.deleteTodo);
router.delete("/deleteTodoAll", ctrl.process.deleteTodoAll);


module.exports = router;     