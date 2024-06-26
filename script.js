const todoInput = document.getElementById('newTodo');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoLists');

function addTodo() {
    const newTodoText = todoInput.value;
    todoInput.value = '';

    const listItem = document.createElement('li');
    const completeBtn = document.createElement('input');
    const todoText = document.createElement('span');
    const deleteBtn = document.createElement('button');

    completeBtn.type = 'checkbox';
    completeBtn.id = 'completeBtn';
    deleteBtn.id = 'deleteBtn';
    todoText.id = 'todoText'

    listItem.appendChild(completeBtn);
    listItem.appendChild(todoText);
    listItem.appendChild(deleteBtn);

    deleteBtn.textContent = 'DELETE';
    todoText.textContent  = newTodoText;

    todoList.append(listItem);

    completeBtn.addEventListener('click', () => todoText.style.textDecoration = 'line-through');
    deleteBtn.addEventListener('click', () => todoList.removeChild(listItem));
}

addBtn.addEventListener('click', addTodo);


