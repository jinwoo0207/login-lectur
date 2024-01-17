"use strict";

class UserStorage{
    static #users = {
        id: ["jinwoo", "ajw", "진우"],
        name : ["안진우", "나개발", "안팀장"],
        psword: ["0724", "1234", "12345"],
    };
    
    static getUsers(...flelds) {
        const users = this.#users;
        const newUsers = flelds.reduce((newUsers, field) =>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); //유저들의 키값만 리스트로 만듬
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return {success : true};
    }
}

module.exports = UserStorage;