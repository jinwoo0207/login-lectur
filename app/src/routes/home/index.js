"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.hello);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/bringTodo", ctrl.output.bringTodo);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);
router.post("/todolist", ctrl.process.todolist);

router.patch("/updateTodo/:id", ctrl.process.updateTodo);
router.delete("/deleteTodo/:todoId", ctrl.process.deleteTodo);


module.exports = router;    