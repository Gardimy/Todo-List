import { addTask, updateLocalStorage } from './app.js';

// Function to generate a unique ID
function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

const removeTask = (tasks, taskId) => {
  if (taskId >= 0 && taskId < tasks.length) {
    tasks.splice(taskId, 1);
  }
};

export default function populateTodoList() {
  const tasksString = localStorage.getItem('tasks');
  const tasks = tasksString ? JSON.parse(tasksString) : [];

  const todoList = document.getElementById('todo');

  // Clear the existing list before populating it again
  todoList.innerHTML = '';

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.className = 'task-item';
    listItem.innerHTML = `
      <div class="taskContainer">
        <input type="checkbox" class="checkbox" ${task.completed ? 'checked' : ''}>
        <input type="text" class="Text" value="${task.description}" ${task.completed ? 'disabled' : ''}>
        <button class="removeBtn" type="button" data-id="${task.id}">&#x1F5D1;</button>
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
      const newTask = {
        id: generateUniqueId(), // Generate a unique ID for the task
        description,
        completed: false,
      };
      addTask(tasks, newTask);
      updateLocalStorage(tasks);
      populateTodoList(); // Refresh the list after adding a task
      newTaskInput.value = '';
    }
  });

  // Functionality for removing tasks
  const removeButtons = document.getElementsByClassName('removeBtn');

  Array.from(removeButtons).forEach((button) => {
    button.addEventListener('click', (event) => {
      const taskId = event.target.getAttribute('data-id');
      removeTask(tasks, taskId);
      updateLocalStorage(tasks);
      populateTodoList(); // Refresh the list after removing a task
    });
  });
}
