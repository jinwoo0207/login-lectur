"use strict";

const id = document.querySelector("#id"),
    createTodoBtn = document.querySelector("#button");
    //getTodolist = document.querySelector("#newBoxId");
    createTodoBtn.addEventListener("click", createTodo);
const deleteTodoAllBtu = document.querySelector('#deleteAll');

    window.addEventListener("load", getTodo);
    // window.onload(getTodo);

    deleteTodoAllBtu.addEventListener("click", deleteTodoAll);
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
            
            // 삭제가 성공했을 때
            if (res.success) {
                const deletedElement = document.querySelector(`#delete${id}`).parentNode;
                deletedElement.remove();
            } else {
                // 삭제에 실패한 경우
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
    
    function deleteTodoAll() {
        if (confirm("정말로 전체를 삭제하시겠습니까?")) {
            fetch(`/deleteTodoAll`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => res.json())
            .then((res) => {
                // 삭제가 성공했을 때
                if (res.success) {
                    // 모든 할일 목록 삭제
                    const todoList = document.querySelectorAll('p');
                    todoList.forEach(element => element.remove());
                } else {
                    // 삭제에 실패한 경우
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
        } else {
            alert("취소되었습니다.");
        }
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