"use strict";

const { json } = require("body-parser");
//랜더를 사용하면 처음엔 200번 반환 후 304를 반환한다.
const logger = require("../../config/logger");
const Todo = require("../../models/todo");
const { response } = require("express");

const output = {
    hello: (req, res) => {
        logger.info(`GET / 304 "홈 화면으로 이동"`);
        res.render("home/index");
    },  
};
// construct 이용해보기.
const process = {
    createTodo : async (req, res) =>{
        const todo = new Todo(); //이걸 빼먹었네
        const response = await todo.createTodo(req.body);
        return res.json(response);
    },  
    updateTodo : async (req, res) => {
        const todo = new Todo();
        // const todo = Reflect.construct(Todo());
        const response = await todo.updateTodo(req.body, req.params);
        return res.json(response);  
    },  
    deleteTodo : async (req, res) => {
        const todo = new Todo();
        const response = await todo.deleteTodo(req.params);
        return res.json(response);
    },
    deleteTodoAll : async (req, res) => {
        const todo = new Todo();
        const response = await todo.deleteTodoAll();
        return res.json(response);
    },
    checkTodo : async (req, res) => {
        const todo = new Todo();
        const response = await todo.checkTodo(req.body, req.params);
        return res.json(response);
    },
    bringTodo : async (req, res) => {
        const todo = new Todo();
        const response = await todo.bringTodo();
        return res.json(response);
    },
};
module.exports = {
    output,
    process,
};

const log = (response, url) => {
    if(response.err){
        logger.error(`${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.err}`)
    }else{
        logger.info(`${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.msg || ""}`);
    };
}

