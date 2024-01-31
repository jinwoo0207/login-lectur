"use strict";

const { log } = require("winston");
const todoStorage = require("./todoStorage");
const { response } = require("express");
const { param } = require("../routes/home");
class todo {

    async createTodo(body) {
        const description = body.id;
        try {
            const response = await todoStorage.createTodo(description);
            return response;

        } catch (error) {
            return {
                "테이블 생성 여부": false,
                "오류입니다 오류메세지": error,
            };
            // return {success: false} 이런식이였던 것 같아
            // 그리고, 모든걸 다 똑같이 구현할 필요는 없어
            // 프론트에서 작성한 데이터가 백엔드에서 어떻게 동작되는지를 중심으로 살펴봐.
        }
    }

    async updateTodo(body, params) {
        const description = body.id;
        const todoId = params.updateTodoId;
        console.log();
        try {
            const response = await todoStorage.updateTodo(description, todoId);
            return response;
        } catch (error) {
            return {
                "테이블 수정 여부": false,
                "오류입니다 오류메세지": error,
            };
        }
    }

    async deleteTodo(params) {
        const todoId = params.deleteTodoId;
        try {
            const response = await todoStorage.deleteTodo(todoId);
            return response;
        } catch (error) {
            return {
                "테이블 삭제 여부": false,
                "오류입니다 오류메세지": error,
            };
        }
    }

    async bringTodo() {
        try {
            const response = await todoStorage.bringTodo();
            return response;
        } catch (error) {
            return {
                "테이블 가져오기 여부": false,
                "오류입니다 오류메세지": error,
            };
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