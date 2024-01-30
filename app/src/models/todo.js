"use strict";

const { log } = require("winston");
const UserStorage = require("./todoStorage");
class User {
    async todolist(body){
        try {
            const response = await UserStorage.todolist(body);
            return response;
        }catch (err) {
            return { success : false, err };
        }
    }
    async bringTodo(){
        try{
            const response = await UserStorage.bringTodo();
            return response;
        }catch (err){
            return { success : false, err};
        }
    }
    async updateTodo(body, params){
        console.log(body,params);
        const todoId = params.id;
        const description = body.id;
        console.log(description,todoId);
        try{
            const response = await UserStorage.updateTodo(description, todoId);
            return response;
        }catch (err){
            return { success : false, err};
        }
    }
    async deleteTodo(params){
        console.log(params);
        const todoId = params.todoId;
        console.log(todoId);
        try{
            const response = await UserStorage.deleteTodo(todoId);
            return response;
        }catch (err){
            return { success : false, err};
        }
    }
}

module.exports = User;