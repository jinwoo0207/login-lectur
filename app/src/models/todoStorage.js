"use strict";

const { error } = require("console");

const db = require("../config/db");
const { resolve } = require("path");
const { reject, log } = require("async");
// const fs = require("fs").promises; //프로미스에 pending은 데이터를 다 읽어오지 못했다.

class todoStorage {

    static async createTodo(){
    }

    static async updateTodo(){
    }

    static async deleteTodo(){
    }

    static async getTodo(){
    }























    
    // static async createTodo(description){
    //     return new Promise((resolve, reject) =>{
    //         db.query(
    //             `INSERT INTO todolist (description) VALUES ("${description}")`,
    //             (err) => {
    //                 if (err) {
    //                     reject(err);
    //                 }{
    //                     resolve({ success : true});
    //                 }
    //             }
    //         )
    //     })
    // }
    // static async bringTodo() {
    //     return new Promise((resolve, reject) => {
    //         db.query(
    //             `select*from to_do_list.todolist;`,
    //             (err, result) => {
    //                 if (err) {
    //                     reject(err);
    //                 } else {
    //                     resolve({ success: true , todoDb : result});
    //                     console.log(result);
    //                 }   
    //             }
    //         );
    //     });
    // }

    // static async updateTodo(description, todoId) {
    //     return new Promise((resolve, reject) => {
    //         db.query(
    //             `UPDATE todolist SET description = "${description}" WHERE id = "${todoId}"`,
    //             (err) => {
    //                 if (err) {
    //                     reject(err);
    //                 } else {
    //                     resolve({ success: true });
    //                 }
    //             }
    //         );
    //     });
    // }
    
    // static async deleteTodo(todoId) {
    //     return new Promise((resolve, reject) => {
    //         console.log(todoId);
    //         db.query(
    //             `DELETE FROM todolist WHERE id="${todoId}";`,
    //             (err) => {
    //                 if (err) {
    //                     reject(err);
    //                 } else {
    //                     resolve({ success: true });
    //                 }
    //             }
    //         );
    //     });
    // }
    
    
}

module.exports = todoStorage;



// static async todolist(userInfo) {
//     return new Promise((resolve, reject) => {
//         const query = "INSERT INTO todolist(description) VALUES(?);";
//         db.query(query, 
//             [userInfo.id], 
//             (err) => {
//             if (err) {
//                 reject(`${err}`);
//             };
//             resolve({ success : true });
//         });
//     });
// }