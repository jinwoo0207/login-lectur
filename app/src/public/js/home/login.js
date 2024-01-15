"use strict"

// const { json } = require("body-parser");

//dom --> 문서 객체 모델
// 4줄 : 질의 선택자 html에서 선택자를 지정하면 값을 가져올 수 있다.
const id = document.querySelector("#id"), //#은 input id = "id" <- 이 값을 가져온다는 뜻  
    psword = document.querySelector("#psword"),
    loginBut = document.querySelector("button");

loginBut.addEventListener("click", login);

function login(){
    const req = {
        id : id.value,
        psword : psword.value,
    };
    fetch("/login", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req)
    }).then((res) => res.json())
    .then(console.log);
}





