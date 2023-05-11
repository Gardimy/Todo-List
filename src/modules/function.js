// function.js
import { addTask, updateLocalStorage } from './app.js';

export default function populateTodoList() {
  const tasksString = localStorage.getItem('tasks');
  const tasks = tasksString ? JSON.parse(tasksString) : [];

  const todoList = document.getElementById('todo');

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.className = 'task-item';
    listItem.innerHTML = `
      <div class="taskContainer">
        <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''}>
        <input type="text" class="Text" value="${task.description}" ${task.completed ? 'disabled' : ''}>
        <button class="removeBtn" type="button">&#x1F5D1;</button>
      </div>     
    `;
    todoList.appendChild(listItem);
  });

  // Functionality for adding tasks
  const addBtn = document.getElementById('addBtn');
  const newTaskInput = document.getElementById('new-task-input');

  addBtn.addEventListener('click', () => {
    const description = newTaskInput.value;
    if (description.trim() !== '') {
      addTask(tasks, description);
      updateLocalStorage(tasks);
      populateTodoList(); // Refresh the list after adding a task
      newTaskInput.value = '';
    }
  });

  // ...
}
