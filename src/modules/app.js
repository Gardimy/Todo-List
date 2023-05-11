const addTask = (tasks, description) => {
  const newTask = {
    description,
    completed: false,
    index: tasks.length + 1,
  };
  tasks.push(newTask);
};

const deleteTask = (tasks, taskId) => {
  if (taskId >= 0 && taskId < tasks.length) {
    tasks.splice(taskId, 1);
    for (let i = taskId; i < tasks.length; i += 1) {
      tasks[i].index -= 1;
    }
  }
};

const editTaskDescription = (tasks, taskId, newDescription) => {
  if (taskId >= 0 && taskId < tasks.length) {
    tasks[taskId].description = newDescription;
  }
};

const updateLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export {
  addTask, deleteTask, editTaskDescription, updateLocalStorage,
};
