import {tasksContainer, createTask} from './index.js';

const modalEdit = document.querySelector('.modal-edit');

const editCancel = document.querySelector('#edit-cancel')
const editAccept = document.querySelector('#edit-accept')
let oldName;

const tasks  = [
  'Trabajo de fisica',
  'Trabajo de lectura',
  'Trabajo de programación'
]

export const showEdit = event => {
  modalEdit.classList.remove('hide');
  oldName = event.target.parentElement.firstChild.textContent;
  modalEdit.childNodes[1][0].value = oldName;
}

editCancel.addEventListener('click', () => {
  modalEdit.classList.add('hide');
})

editAccept.addEventListener('click', event => {
  event.preventDefault();
  const newName = modalEdit.childNodes[1][0].value

  editTask(newName);
  modalEdit.classList.add('hide');
})

export const addTask = taskName => {
  tasks.unshift(taskName);
  render();
}

export const editTask = newName => {

  const index = tasks.findIndex(task => task === oldName);

  tasks.splice(index, 1, newName);
  render();
}

export const deleteTask = taskName => {

  render();
}

export const render = () => {
  tasksContainer.innerHTML = '';

  tasks.forEach(createTask);
}

export default tasks;
