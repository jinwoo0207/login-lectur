"use strict";

//랜더를 사용하면 처음엔 200번 반환 후 304를 반환한다.
const logger = require("../../config/logger");
const User = require("../../models/todo"); 
const output = {
    hello: (req, res) => {
        logger.info(`GET / 304 "홈 화면으로 이동"`);
        res.render("home/index");
    },
    bringTodo : async (req, res) => {
        const user = new User();
        const response = await user.bringTodo();
        return res.json(response);
    },  
};

const process = {
    updateTodo : async (req, res) => {
        const user = new User();
        const response = await user.updateTodo(req.body, req.params);
        return res.json(response);
    },  
    deleteTodo : async (req, res) => {
        const user = new User();
        const response = await user.deleteTodo(req.params);
        return res.json(response);
    },
    todolist : async (req, res) => {
        const user = new User();
        const response = await user.todolist(req.body);
        const url = {
            method : "POST",
            path : "/todolist",
            status : response.err ? 409 : 201,
        }
        log(response, url);
        return res.status(url.status).json(response);
    }
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


