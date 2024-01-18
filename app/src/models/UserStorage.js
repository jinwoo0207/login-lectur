"use strict";

const { error } = require("console");

const fs = require("fs").promises; //프로미스에 pending은 데이터를 다 읽어오지 못했다.
class UserStorage {
    static #getUserInfo(data, id){
        const users = JSON.parse(data);
            const idx = users.id.indexOf(id);
            const usersKeys = Object.keys(users); //유저들의 키값만 리스트로 만듬
            const userInfo = usersKeys.reduce((newUser, info) => {
                newUser[info] = users[info][idx];
                return newUser;
            }, {});
        return userInfo;
    }

    static #getUsers(data, isAll, fields){
        const users = JSON.parse(data);
        if (isAll === true) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    };
    static getUsers(isAll, ...fields) {
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUsers(data, isAll, fields);
        })
        .catch(console.error);
        
    };
    static getUserInfo(id) {
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
        })
        .catch(console.error);
    }
    static async save(userInfo) {
        const users = await this.getUsers(true);
        if (users.id.includes(userInfo.id)){    //입력한 아이디가 데이터 베이스 아이디 안에 있으면
            throw "이미 존재하는 아이디입니다.";
        }
        //데이터 추가
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return { success : true };
    }
}

module.exports = UserStorage;