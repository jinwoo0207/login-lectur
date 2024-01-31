"use strict";

const id = document.querySelector("#id"),
    createTodoBtn = document.querySelector("#button");

    createTodoBtn.addEventListener("click", createTodo);

function createTodo() {
    if(!id.value){
        return alert("할일을 입력해 주세요!");
    }
    const req = {
        id: id.value,
    };
    fetch("/createTodo", {
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
            console.error("할일 입력 중 에러 발생");
        });
        }
