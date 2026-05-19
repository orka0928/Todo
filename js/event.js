import { setNewTodoToLocal, removeChild, renderTodos, todos, fil, changeSelectColor, deleteTodo } from "./functions.js";
import {
    addnewTodoBtn,
    addCardBtn,
    todoModal,
    clsModal,
    alertModalCls,
    alertModal,
    filter,
    todoBox,
} from "./variables.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addnewTodoBtn.addEventListener("click", setNewTodoToLocal);
addCardBtn.addEventListener("click", () => {
    todoModal.classList.remove("hidden");
});
clsModal.addEventListener("click", () => {
    todoModal.classList.add("hidden");
});
alertModalCls.addEventListener("click", () => {
    alertModal.classList.add("hidden");
});
filter.addEventListener("change", (e) => {
    const value = filter.value;
    removeChild();
    if (value === "all") {
        renderTodos(todos);
    } else {
        renderTodos(fil(value));
    }
});
todoBox.addEventListener("change", changeSelectColor);
todoBox.addEventListener("click", deleteTodo);
