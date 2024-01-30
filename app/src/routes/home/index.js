"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.hello);
router.get("/bringTodo", ctrl.output.bringTodo);

// router.post("/todolist", ctrl.process.todolist);
router.post("/createTodo", ctrl.process.createTodo);
router.patch("/updateTodo/:id", ctrl.process.updateTodo);
router.delete("/deleteTodo/:todoId", ctrl.process.deleteTodo);


module.exports = router;    