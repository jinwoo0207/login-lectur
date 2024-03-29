"use strict";

const { error } = require("console");

const db = require("../config/db");
const { resolve } = require("path");
const { reject, log } = require("async");
// const fs = require("fs").promises; //프로미스에 pending은 데이터를 다 읽어오지 못했다.

class UserStorage {
    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                if (err) {
                    reject(`${err}`);
                }else{
                    resolve(data[0]);
                }
            });
        });
    }
    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO users(id, name, psword) VALUES(?, ?, ?);";
            db.query(query, 
                [userInfo.id, userInfo.name, userInfo.psword], 
                (err) => {
                if (err) {
                    reject(`${err}`);
                };
                resolve({ success : true });
            });
        });
    }
    static async bringTodo() {
        return new Promise((resolve, reject) => {
            db.query(
                `select*from to_do_list.todolist;`,
                (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({ success: true , todoDb : result});
                        console.log(result);
                    }   
                }
            );
        });
    }
    static async todolist(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO todolist(description) VALUES(?);";
            db.query(query, 
                [userInfo.id], 
                (err) => {
                if (err) {
                    reject(`${err}`);
                };
                resolve({ success : true });
            });
        });
    }
    static async updateTodo(description, todoId) {
        return new Promise((resolve, reject) => {
            db.query(
                `UPDATE todolist SET description = "${description}" WHERE id = "${todoId}"`,
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({ success: true });
                    }
                }
            );
        });
    }
    
    static async deleteTodo(todoId) {
        return new Promise((resolve, reject) => {
            console.log(todoId);
            db.query(
                `DELETE FROM todolist WHERE id="${todoId}";`,
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({ success: true });
                    }
                }
            );
        });
    }
    
    
}

module.exports = UserStorage;