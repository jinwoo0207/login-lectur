"use strict";

const { error } = require("console");

const db = require("../config/db");
const { resolve } = require("path");
const { reject, log } = require("async");
// const fs = require("fs").promises; //프로미스에 pending은 데이터를 다 읽어오지 못했다.

class todoStorage {
    static async createTodo(description) {
        const sql = `INSERT INTO todolist(description) VALUES ("${description}")`;
        return new Promise((resolve, reject) => {
            db.query(sql),
                (err) => {
                    if (err) { reject("할일 추가 실패") };
                }
            resolve({success : true});
        })
    };

    static async updateTodo(description, updateTodoId) {
        const sql = `UPDATE todolist SET description="${description}" WHERE id="${updateTodoId}";`
        return new Promise((resolve, reject) => {
            db.query(sql),
                (err) => {
                    if (err) { reject("할일 수정 실패") };
                }
            resolve("할일 수정 성공");
        })
    }

    static async deleteTodo(deleteTodoId) {
        const sql = `DELETE FROM todolist WHERE id="${deleteTodoId}";`
        return new Promise((resolve, reject) => {
            db.query(sql),
                (err) => {
                    if (err) { reject("할일 삭제 실패") };
                }
            resolve({success : true});
        })
    }

    static async bringTodo() {
        const sql = `select*from todolist;`
        return new Promise((resolve, reject) => {
            db.query(sql,
                (err, result) => {
                    if (err) { reject("할일 리스트 불러오기 실패"); }
                    // resolve({success : true});
                    resolve(result);
                    // console.log(result);
                }
            )
        })
    }
    static async deleteTodoAll(){
        const sql = `DELETE FROM todolist;`
        return new Promise((resolve, reject) => {
            db.query(sql),
                (err) => {
                    if (err) { reject("할일 전체 삭제 실패")}
                }
            resolve("할일 전체 삭제 성공")
        })
    }
    static async checkTodo(is_check, checkTodoId){
        const sql = `UPDATE todolist SET is_check = "${is_check}" WHERE id = "${checkTodoId}";`
        return new Promise((resolve, reject) => {
            db.query(sql),
                (err) => {
                    if (err) {reject("할일 체크 실패")}
                }
            resolve({success : true})
        })
    }
}
module.exports = todoStorage;























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