"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.hello);
router.get("/bringTodo", ctrl.output.bringTodo);

router.post("/createTodo", ctrl.process.createTodo);
router.patch("/updateTodo/:updateTodoId", ctrl.process.updateTodo);
router.delete("/deleteTodo/:deleteTodoId", ctrl.process.deleteTodo);

module.exports = router;    