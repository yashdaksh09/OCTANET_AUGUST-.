// Select elements
const todoInput = document.getElementById('todo-input');
const addTodoButton = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

addTodoButton.addEventListener('click', addTodo);


function addTodo() {

    const todoText = todoInput.value.trim();

    if (todoText !== '') {
       
        const li = document.createElement('li');

    
        li.textContent = todoText;

       
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        li.appendChild(deleteButton);

       
        todoList.appendChild(li);

       
        todoInput.value = '';

        // Add event listener to the delete button
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });
    }
}
