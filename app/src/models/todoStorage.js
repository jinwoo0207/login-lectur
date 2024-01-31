"use strict";

const { error } = require("console");

const db = require("../config/db");
const { resolve } = require("path");
const { reject, log } = require("async");
const { response } = require("../../app");
// const fs = require("fs").promises; //프로미스에 pending은 데이터를 다 읽어오지 못했다.

class todoStorage {

    static async createTodo(description) {
        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO todolist (description) VALUES ("${description}")`),
                (err) => {
                    if (err) { reject("DB 생성 실패") }
                }
            resolve("DB 생성 성공")
            // 잘 하고 있습니다 화이팅~~
        })


    }

    static async updateTodo(description, updateTodoId) {
        return new Promise((resolve, reject) => {
            db.query(`UPDATE todolist SET description = "${description}" WHERE id= ("${updateTodoId}")`),
                (err) => {
                    if (err) { reject("DB 수정 실패") };
                }
            resolve("DB 수정 성공");
        })
    }

    static async deleteTodo(deleteTodoId) {
        // console.log(todoId)
        return new Promise((resolve, reject) => {

            db.query(`DELETE FROM todolist WHERE id="${deleteTodoId}"`),
                (err) => {
                    if (err) { reject("DB 삭제 실패") };
                }
            resolve("DB 삭제 성공");
        })
    }

    static async bringTodo() {
        return new Promise((resolve, reject) => {
            db.query(`select*from to_do_list.todolist;`,
                (err, result) => {
                    if (err) {
                        reject("DB 조회 실패");
                    }
                    else {
                        resolve(result);
                        console.log(result);

                    }
                }
            )
        })
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