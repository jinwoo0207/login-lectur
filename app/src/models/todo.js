"use strict";

const { log } = require("winston");
const todoStorage = require("./todoStorage");
class Todo {

    async createTodo(body) {
        try {
            const description = body.id;
            const response = await todoStorage.createTodo(description);
            return response;
        } catch (error) {
            return { "DB 생성 여부": false };
        }
    }

    async updateTodo(body, todoId) {
        try {
            const description = body.id;
            const updateTodoId = todoId.updateTodoId;
            const response = await todoStorage.updateTodo(description, updateTodoId);
            return response;
        } catch (error) {
            return { "DB 수정 여부": false };
        }
    }

    async deleteTodo(todoId) {
        try {
            const deleteTodoId = todoId.deleteTodoId;
            const response = await todoStorage.deleteTodo(deleteTodoId);
            return response;
        } catch (error) {
            return { "DB 삭제 여부": false };
        }
    }

    async bringTodo() {
        try {
            const response = await todoStorage.bringTodo();
            return response;
        } catch (error) {
            return { "DB 조회 여부": false };
        }
    }
    async deleteTodoAll() {
        try {
            const response = await todoStorage.deleteTodoAll();
            return response;
        } catch (error) {
            return { "DB 전체 삭제 여부": false };
        }
    }
    async checkTodo(body, todoId) {
        try {
            const is_check = body.id;
            const checkTodoId = todoId.checkTodoId
            const response = await todoStorage.checkTodo(is_check, checkTodoId);
            return response;
        } catch (error) {
            return { "DB 체크 여부": false }
        }
    }
}

module.exports = Todo;    //이것도