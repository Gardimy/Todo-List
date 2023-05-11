// todoFunctions.js
export function addTask(tasks, description) {
  const newTask = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
}

export function deleteTask(tasks, index) {
  tasks.splice(index - 1, 1);

  tasks.forEach((task, i) => {
    task.index = i + 1;
  });
}

export function editTaskDescription(tasks, index, newDescription) {
  tasks[index - 1].description = newDescription;
}

export function updateLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
