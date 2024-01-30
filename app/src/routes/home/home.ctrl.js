"use strict";

//랜더를 사용하면 처음엔 200번 반환 후 304를 반환한다.
const logger = require("../../config/logger");
const Todo = require("../../models/todo"); 
const output = {
    hello: (req, res) => {
        logger.info(`GET / 304 "홈 화면으로 이동"`);
        res.render("home/index");
    },
    bringTodo : async (req, res) => {

    },  
};

const process = {
    createTodo : async (req, res) =>{
        
    },
    updateTodo : async (req, res) => {
        
    },  
    deleteTodo : async (req, res) => {
        
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




















// todolist : async (req, res) => {
//     const user = new User();
//     const response = await user.todolist(req.body);
//     const url = {
//         method : "POST",
//         path : "/todolist",
//         status : response.err ? 409 : 201,
//     }
//     log(response, url);
//     return res.status(url.status).json(response);
// }













/// process
// const process = {
//     createTodo : async (req, res) =>{
//         const todo = new Todo();
//         const response = await todo.createTodo(req.body);
//         return res.json(response);
//     },
//     updateTodo : async (req, res) => {
//         const todo = new Todo();
//         const response = await todo.updateTodo(req.body, req.params);
//         return res.json(response);
//     },  
//     deleteTodo : async (req, res) => {
//         const todo = new Todo();
//         const response = await todo.deleteTodo(req.params);
//         return res.json(response);
//     },

// };

// output
// const output = {
//     hello: (req, res) => {
//         logger.info(`GET / 304 "홈 화면으로 이동"`);
//         res.render("home/index");
//     },
//     bringTodo : async (req, res) => {
//         const todo = new Todo();
//         const response = await todo.bringTodo();
//         return res.json(response);
//     },  
// };
