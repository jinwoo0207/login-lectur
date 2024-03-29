"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login() {
    if(!id.value){
        return alert("아이디를 입력해주세요.");
    }
    if(!psword.value){
        return alert("비밀번호가 일치하지 않습니다. 비밀번호를 확인해주세요");
    }
    const req = {
        id: id.value,
        psword: psword.value,
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => (res.json()))
        .then((res) => {
            if (res.success){
                location.href = "/";
            }else {
                if (res.err) {
                return alert(res.err);
                }else{
                alert(res.msg);
                };
            }
        })
        .catch((err) => {
            console.error("로그인 중 에러 발생");
        });
        }
