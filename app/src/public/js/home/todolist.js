"use strict";

const id = document.querySelector("#id"),
    createTodoBtn = document.querySelector("#button");
    //getTodolist = document.querySelector("#newBoxId");
    createTodoBtn.addEventListener("click", createTodo);
    
    window.addEventListener("load", getTodo);
    // window.onload(getTodo);


function getTodo() {fetch("/bringTodo", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((res) => (res.json()))
    .then((res) => {
        if (res){
            for(let i = 0; i < res.length; i++) {
            const newBoxId = document.getElementById("newBoxId");
            const p = document.createElement("p");
            p.innerHTML = `<input type=checkbox value="checkbox">${res[i].description}<input id="delete${res[i].id}" type=button value="삭제"><input id="update${res[i].id}" type=button value="수정">`;
            document.body.appendChild(p);
            document.querySelector(`#delete${res[i].id}`).addEventListener("click", () => {
                // console.log(1)
                deleteTodo(res[i].id)
            });  
            }
        }else {
            if (res.err) {
            return alert(res.err);
            }else{
            alert(res.msg);
            };
        }
    })}
    function deleteTodo(id) {
        fetch(`/deleteTodo/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(1);
            
            // 삭제가 성공했을 때만 해당 DOM 요소를 삭제
            if (res.success) {
                const deletedElement = document.querySelector(`#delete${id}`).parentNode;
                deletedElement.remove();
            } else {
                // 삭제에 실패한 경우에 대한 처리
                if (res.err) {
                    return alert(res.err);
                } else {
                    alert(res.msg);
                }
            }
        })
        .catch((err) => {
            console.error("할일 삭제 중 에러 발생", err);
        });
    }
    
// function deleteTodo(id) {
//     fetch(`/deleteTodo/${id}`, {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     })
//         .then((res) => (res.json()))
//         .then((res) => {
//                 console.log(1)
                
//             // else {
//             //     if (res.err) {
//             //     return alert(res.err);
//             //     }else{
//             //     alert(res.msg);
//             //     };
//             // }
//         })
//         // .catch((err) => {
//         //     console.error("할일 입력 중 에러 발생");
//         // });
//         }



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