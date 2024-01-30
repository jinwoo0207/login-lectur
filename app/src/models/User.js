"use strict";

const { log } = require("winston");
const UserStorage = require("./UserStorage");
class User {

    async login(){
        const client = this.body;
        try{
        const user = await UserStorage.getUserInfo(client.id); //await은 프로미스를 반환하는 것들에게만 사용가능하다.
        // async 함수안에서만 await 사용 가능, 리턴 확인 꼭하기...
        if (user){
            if (user.id === client.id && user.psword === client.psword){
                return { success : true};
                }
                return { success : false, msg : "비밀번호가 틀렸습니다."};
        }
        return { success : false, msg : "존재하지 않는 아이디입니다."};
        }
        catch (err){
            return { success : false, err};
        }
    }
    async register(){
        const client = this.body;
        try {
        const response = await UserStorage.save(client);
            return response;
        }catch (err) {
            // console.log(err);
            return { success : false, err };
        }
    }
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