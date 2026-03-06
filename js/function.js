export const displayTodo = function (arr) {
    for (const todo of arr) {
        const { main, sub, start, deadline } = todo;
        const todoHtml = `<div class="todo-box--card">
                          <select class="todo-box--card__select">
                             <option value="yet">未着手</option>
                             <option value="in-progress">進行中</option>
                             <option value=" done">完了</option>
                           </select>
                           <h3>${main}</h3>
                           <h5>${sub}</5>
                           <p>開始:${start}</p>
                           <p>期限:${deadline}</div>
                         </div>`;

        todoBox.insertAdjacentHTML("afterbegin", todoHtml);
    }
};
