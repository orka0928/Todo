const todos = [
    { id: 0, main: "口座 名義変更", sub: "みずほの名義変更", start: 28, deadline: 14 },
    { id: 1, main: "銀行口座 名義変更", sub: "みずほの名義変更", start: 28, deadline: 14 },
];
const addCard = document.querySelector(".add-card");
const addCardBtn = document.querySelector(".add-card__btn");
const todoCard = document.querySelector(".todo-card");

const addnewTodoBtn = document.querySelector(".add-new-todo-btn");
const todoBox = document.querySelector(".todo-box");
const todoModal = document.querySelector(".todo-modal");
const clsModal = document.querySelector(".todo-modal--close");

const displayTodo = function (arr) {
    for (const todo of arr) {
        const { main, sub, start, deadline } = todo;
        const todoHtml = `<div class="todo-card card--layout">
                          <select class="todo-card__select">
                             <option value="yet">未着手</option>
                             <option value="in-progress">進行中</option>
                             <option value="done">完了</option>
                           </select>
                           <h3>${main}</h3>                    
                           <h5>${sub}</h5>
                           <p>開始:${start}</p>
                           <p>期限:${deadline}</p>
                         </div>`;

        todoBox.insertAdjacentHTML("beforeend", todoHtml);
    }
};

addCardBtn.addEventListener("click", () => {
    todoModal.classList.remove("hidden");
});
clsModal.addEventListener("click", () => {
    todoModal.classList.add("hidden");
});
addnewTodoBtn.addEventListener("click", () => {
    const id = todos.length + 1;
    const newMain = document.querySelector(".input--main").value;
    const newSub = document.querySelector(".input--sub").value;
    const newStart = document.querySelector(".input--start").value;
    const newDeadline = document.querySelector(".input--deadline").value;
    const newObj = {
        id: id,
        main: newMain,
        sub: newSub,
        start: newStart,
        deadline: newDeadline,
    };
    todos.push(newObj);
    console.log(newObj, todos);
    const { main, sub, start, deadline } = newObj;

    const newTodoHtml = `<div class="todo-card card--layout">
    <select class="todo-card__select">
    <option value="yet">未着手</option>
    <option value="in-progress">進行中</option>
    <option value="done">完了</option>
    </select>
    <h3>${main}</h3>
    <h5>${sub}</5>
    <p>開始:${start}</p>
    <p>期限:${deadline}</div>
    </div>`;
    addCard.insertAdjacentHTML("afterend", newTodoHtml);
});

displayTodo(todos);
const selectes = document.querySelectorAll(".todo-card__select");
// select.addEventListener("change", () => {
//     let color;
//     if (select.value === "in-progress") {
//         color = "#a5d8ff";
//     } else if (select.value === "done") {
//         color = "#63e6be";
//     } else {
//         color = "#fff";
//     }
//     todoCard.style.backgroundColor = color;
// });
// selectes.forEach((select) => {
//     select.addEventListener("change", () => {
//         console.log(select);
//         let color;
//         if (select.value === "in-progress") {
//             color = "#a5d8ff";
//         } else if (select.value === "done") {
//             color = "#63e6be";
//         } else {
//             color = "#fff";
//         }
//         todoCard.style.backgroundColor = color;
//     });
// });
