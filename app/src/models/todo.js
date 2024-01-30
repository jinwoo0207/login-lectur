"use strict";

const { log } = require("winston");
const todoStorage = require("./todoStorage");
class todo {

    async createTodo(){
        try {
            
        } catch (error) {
            
        }
    }

    async updateTodo(){
        try {
            
        } catch (error) {
            
        }
    }

    async deleteTodo(){
        try {
            
        } catch (error) {
            
        }
    }

    async bringTodo(){
        try {
            
        } catch (error) {
            
        }
    }







    
    // async createTodo(body){
    //     const description = body.id
    //     console.log(description);
    //     try{
    //         const response = await todoStorage.createTodo(description);
    //         return response;
    //     }catch (err){
    //         return {success : false, err}
    //     }
    // }

    // async bringTodo(){
    //     try{
    //         const response = await todoStorage.bringTodo();
    //         return response;
    //     }catch (err){
    //         return { success : false, err};
    //     }
    // }
    // async updateTodo(body, params){
    //     console.log(body,params);
    //     const todoId = params.id;
    //     const description = body.id;
    //     console.log(description,todoId);
    //     try{
    //         const response = await todoStorage.updateTodo(description, todoId);
    //         return response;
    //     }catch (err){
    //         return { success : false, err};
    //     }
    // }
    // async deleteTodo(params){
    //     console.log(params);
    //     const todoId = params.todoId;
    //     console.log(todoId);
    //     try{
    //         const response = await todoStorage.deleteTodo(todoId);
    //         return response;
    //     }catch (err){
    //         return { success : false, err};
    //     }
    // }
    // async todolist(body){
    //     try {
    //         const response = await todoStorage.todolist(body);
    //         return response;
    //     }catch (err) {
    //         return { success : false, err };
    //     }
    // }
}

module.exports = todo;