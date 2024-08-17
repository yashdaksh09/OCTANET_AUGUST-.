// Select DOM elements
const todoInput = document.querySelector('.todo_value');
const addBtn = document.querySelector('.add-btn');
const todoList = document.querySelector('.todo-list');

function addTodo() {
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
        const newTodo = document.createElement('li');
        newTodo.textContent = todoText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';

        newTodo.appendChild(removeBtn);
        todoList.appendChild(newTodo);
        todoInput.value = '';
        
        removeBtn.addEventListener('click', () => {
            todoList.removeChild(newTodo);
        });
    }
}
addBtn.addEventListener('click', addTodo);

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});
