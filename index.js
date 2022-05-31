import tasks, {addTask, editTask, deleteTask, render, showEdit} from './task.js';

const form = document.querySelector('form');
export const tasksContainer = document.querySelector('.tasks-container');

export const createTask = taskName => {
  const div = document.createElement('div');
  div.classList.add('task');
  div.textContent = taskName;

  const button = document.createElement('button');
  button.textContent = 'Edit';

  button.addEventListener('click', showEdit)

  div.appendChild(button);
  
  tasksContainer.appendChild(div);
}

const onSubmit = event => {
  event.preventDefault();
  const [input] = event.target;

  addTask(input.value);

  input.value = '';
  input.focus();
}

form.addEventListener('submit', onSubmit);

render();
