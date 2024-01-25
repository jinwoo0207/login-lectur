"use strict";

const { error } = require("console");

const db = require("../config/db");
const { resolve } = require("path");
const { reject } = require("async");
// const fs = require("fs").promises; //프로미스에 pending은 데이터를 다 읽어오지 못했다.

class UserStorage {
    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM abc WHERE id = ?";
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
}

module.exports = UserStorage;