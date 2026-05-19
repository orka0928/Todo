import { alertModalCls, alertModal, addCard, todoBox } from "./variables.js";

const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];
const setLocalStorage = () => localStorage.setItem("todo", JSON.stringify(todos));
export const todos = getLocalStorage("todo");
const createHtml = function ({ id, main, sub, start, deadline, status }) {
    const todoHtml = `<div class="todo-card card--layout" data-id="${id}" data-status="${status}">
    <select class="todo-card__select">
    <option value="yet">未着手</option>
    <option value="in-progress">進行中</option>
    <option value="done">完了</option>
    </select>
    <h3>${main}</h3>
    <h5>${sub}</h5>
    <p>開始:${start}</p>
    <p>期限:${deadline}</p>
    <button type="button" class="todo--delete">&times;</button>
    </div>`;
    return todoHtml;
};
////////////
const modalAlert = function (message) {
    const html = `<p class="alert-message">${message}</p>`;
    alertModalCls.insertAdjacentHTML("afterend", html);
};
const modalAlertDisplay = function (message) {
    modalAlert(message);
    alertModal.classList.remove("hidden");
};
const setOptionSelected = function () {
    const cards = document.querySelectorAll(".todo-card");
    cards.forEach(function (card) {
        const value = card.querySelector(`option[value='${card.dataset.status}']`);
        value.setAttribute("selected", "");
    });
};
const changeBackroundColor = function (target, node) {
    let backGroundColor;
    const status = target;
    if (status === "in-progress") {
        backGroundColor = "#a5d8ff";
    } else if (status === "done") {
        backGroundColor = "#c3fae8";
    } else {
        backGroundColor = "#fff";
    }
    node.style.backgroundColor = backGroundColor;
};
const setBackgoundColor = function () {
    const cards = document.querySelectorAll(".todo-card");
    cards.forEach(function (card) {
        changeBackroundColor(card.dataset.status, card);
    });
};
const render = function (obj) {
    const html = createHtml(obj);
    addCard.insertAdjacentHTML("afterend", html);
};
export const renderTodos = function (todos) {
    for (const todo of todos) {
        render(todo);
    }
    setBackgoundColor();
    setOptionSelected();
};
const search = function (id) {
    return todos.findIndex((obj) => obj.id === id);
};
export const changeSelectColor = function (e) {
    if (e.target.classList.contains("todo-card__select")) {
        changeBackroundColor(e.target.value, e.target.parentElement);
    }
    const id = e.target.parentElement.dataset.id;
    const result = search(id);
    todos[result].status = e.target.value;
    setLocalStorage();
};
const createNewTodo = function () {
    const id = crypto.randomUUID();
    const newMain = document.querySelector(".input--main").value;
    const newSub = document.querySelector(".input--sub").value;
    const newStart = document.querySelector(".input--start").value;
    const newDeadline = document.querySelector(".input--deadline").value;

    if (!newMain || !newSub || !newStart || !newDeadline) {
        modalAlertDisplay("すべて入力してください");
        return;
    } else {
        const newObj = {
            id: id,
            main: newMain,
            sub: newSub,
            start: newStart,
            deadline: newDeadline,
            status: "yet",
        };
        return newObj;
    }
};
const valueClear = function () {
    let newMain = document.querySelector(".input--main");
    let newSub = document.querySelector(".input--sub");
    let newStart = document.querySelector(".input--start");
    let newDeadline = document.querySelector(".input--deadline");
    newMain.value = newSub.value = newStart.value = newDeadline.value = "";
};
const pushTodo = function (todo) {
    todos.push(todo);
};
const saveAndRenderTodos = function (todos) {
    setLocalStorage();
    removeChild();
    renderTodos(todos);
};
export const setNewTodoToLocal = function () {
    const todo = createNewTodo();
    if (!todo) return;
    pushTodo(todo);
    saveAndRenderTodos(todos);
    valueClear();
};
export const deleteTodo = function (e) {
    if (e.target.classList.contains("todo--delete")) {
        const index = search(e.target.closest(".todo-card").dataset.id);
        todos.splice(index, 1);
        saveAndRenderTodos(todos);
    }
};
export const fil = function (value) {
    return getLocalStorage("todo").filter((todo) => todo.status === value);
};
export const removeChild = function () {
    const cards = document.querySelectorAll(".todo-card");
    cards.forEach((card) => todoBox.removeChild(card));
};
