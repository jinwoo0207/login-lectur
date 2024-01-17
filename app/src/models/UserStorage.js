"use strict";

class UserStirage{
    static #users = {
        id: ["jinwoo", "ajw", "진우"],
        psword: ["0724", "1234", "12345"],
        name : ["안진우", "나개발", "안팀장"]
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
}

module.exports = UserStirage;