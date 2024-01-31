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

