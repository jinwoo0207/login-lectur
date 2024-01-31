"use strict";

//랜더를 사용하면 처음엔 200번 반환 후 304를 반환한다.
const logger = require("../../config/logger");
const Todo = require("../../models/todo");
const output = {
    hello: (req, res) => {
        logger.info(`GET / 304 "홈 화면으로 이동"`);
        res.render("home/index");
    },
    bringTodo: async (req, res) => {
        const todo = new Todo();
        const response = await todo.bringTodo();
        return res.json(response);
    },
};

const process = {
    createTodo: async (req, res) => {
        const todo = new Todo();
        const response = await todo.createTodo(req.body);//body는 키-값 데이터쌍
        // return response;// 이 부분이 현재 무한로딩되는거 문제네요
        return res.json(response); //return response와 return res.json(response) 왜 잘못됬는지 파악하는것이 오늘의 숙제
        //찾아봤는데 express를 응답할 때에는 json형식으로 보내줘야 무한 대기가 안 생기는 것 같습니다.
    },
    updateTodo: async (req, res) => {
        const todo = new Todo();
        console.log(req.params)
        const response = await todo.updateTodo(req.body, req.params); //params 라우터의 매개변수 /뒤에 내용을 담는다

        return res.json(response);
    },
    deleteTodo: async (req, res) => {
        const todo = new Todo();
        const response = await todo.deleteTodo(req.params);
        return res.json(response);
    },

};
module.exports = {
    output,
    process,
};

const log = (response, url) => {
    if (response.err) {
        logger.error(`${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.err}`)
    } else {
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
