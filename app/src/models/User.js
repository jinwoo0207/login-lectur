"use strict";

const UserStorage = require("./UserStorage");
class User {
    constructor(body){
        this.body = body;
    }
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
}

module.exports = User;