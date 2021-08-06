import {
  getProjects, projectExists, saveProjects, Project, addToProjectsMenu,
} from './project';
import { loadAsHtml, makeActive, removeFromDom } from '../../../utils/domActions';

const getAlterDiv = (status) => {
  let output;
  if (status) {
    output = '<div class=\'alert alert-info p-1\'>Done</div>';
  } else {
    output = `
            <button class="btn btn-warning text-white edit-btn" data-bs-toggle="modal" data-bs-target=".editModal">Edit</button>
            <button class="btn btn-danger delete-btn">Delete</button>`;
  }

  return output;
};

const checkBox = (status) => {
  let output;
  if (status) {
    output = 'checked';
  }

  return output;
};

const taskHtml = (todo) => `<div data-id="${todo.id}" class="row task mt-3 mx-2">
                <div class="col-12 border-top border-bottom p-2 d-flex align-items-center justify-content-between">
                <input type="checkbox" name="" class="done-check" id="" ${checkBox(todo.done)}>
                <p class="m-0">${todo.title}</p>
                <p class="m-0">${todo.dueDate}</p>
                <p class="m-0 text-primary">${todo.priority}</p>

                <div class="ml-auto task-alter-div">                    
                    ${getAlterDiv(todo.done)}
                </div>
                </div>
             </div>`;

const storeTask = (task, projects) => {
  projects.forEach((project) => {
    if (project.name.toLowerCase() === task.project.toLowerCase()) {
      task.id = project.todos.length;
      project.todos.push(task);
    }
  });

  saveProjects(projects);
};

const getProjectIndex = (projectName, projects = getProjects()) => {
  const index = projects.findIndex((proj) => proj.name.toLowerCase() === projectName.toLowerCase());
  return index;
};

const displayTasks = (projectName, projects = getProjects()) => {
  const taskList = document.querySelector('#task-list');
  const projectIdx = getProjectIndex(projectName, projects);

  taskList.innerHTML = loadAsHtml(projects[projectIdx].todos, (todo) => taskHtml(todo));
};

const updateHeader = (projectName, projects = getProjects()) => {
  const header = document.querySelector('#project-title');
  const projectIdx = getProjectIndex(projectName, projects);

  header.textContent = projects[projectIdx].name;
};

const createNewTask = (taskObj, projects = getProjects()) => {
  if (projectExists(taskObj, projects)) {
    storeTask(taskObj, projects);
  } else {
    Project(taskObj.project);
    storeTask(taskObj, getProjects());
    addToProjectsMenu(taskObj.project);
  }

  displayTasks(taskObj.project);
  updateHeader(taskObj.project);

  const currentProject = document.querySelectorAll('.projects')[getProjectIndex(taskObj.project, getProjects())];
  makeActive(currentProject);
};

const reassginTaskIds = (tasks) => {
  let count = 0;
  tasks.forEach((task) => {
    task.id = count;
    count += 1;
  });
};

const removeTaskFromStorage = (obj) => {
  const projects = getProjects();
  const taskId = obj.task.getAttribute('data-id');
  const index = getProjectIndex(obj.project, projects);
  const tasks = projects[index].todos;
  tasks.splice(taskId, 1);

  reassginTaskIds(tasks);
  saveProjects(projects);
};

const deleteTask = (obj) => {
  removeTaskFromStorage(obj);
  removeFromDom(obj.task);
};

const selectPriority = (priority) => {
  const editSelect = document.querySelector('#edit-priority');
  const selectOpts = editSelect.querySelectorAll('option');

  selectOpts.forEach((opt) => {
    if (opt.value === priority) {
      opt.setAttribute('selected', 'selected');
    } else {
      opt.removeAttribute('selected');
    }
  });
};

const loadTaskOnEditForm = (obj) => {
  const projects = getProjects();
  const taskId = obj.task.getAttribute('data-id');
  const index = getProjectIndex(obj.project, projects);
  const taskFromStorage = projects[index].todos[taskId];

  document.querySelector('#task-id').value = taskFromStorage.id;
  document.querySelector('#edit-title').value = taskFromStorage.title;
  document.querySelector('#edit-desc').value = taskFromStorage.desc;
  document.querySelector('#edit-date').value = taskFromStorage.dueDate;
  document.querySelector('#edit-project').value = obj.project;

  selectPriority(taskFromStorage.priority);
};

const updateTaskInStorage = (obj) => {
  const projects = getProjects();
  const index = getProjectIndex(obj.project, projects);
  const currentTask = projects[index].todos[obj.id];

  Object.keys(obj).forEach((element) => {
    if (currentTask[element]) {
      currentTask[element] = obj[element];
    }
  });

  saveProjects(projects);
};

const editTask = (obj) => {
  updateTaskInStorage(obj);
  displayTasks(obj.project);
};

const toggleDoneStatus = (obj) => {
  const projects = getProjects();
  const taskId = obj.task.getAttribute('data-id');
  const index = getProjectIndex(obj.project, projects);
  const taskFromStorage = projects[index].todos[taskId];

  if (taskFromStorage.done) {
    taskFromStorage.done = false;
  } else {
    taskFromStorage.done = true;
  }

  saveProjects(projects);

  return taskFromStorage.done;
};

const toggleDoneInDom = (obj, status) => {
  const alterDivs = obj.task.querySelector('.task-alter-div');
  alterDivs.innerHTML = getAlterDiv(status);
};

const checkTask = (obj) => {
  const projectStatus = toggleDoneStatus(obj);
  toggleDoneInDom(obj, projectStatus);
};

export {
  createNewTask, taskHtml, displayTasks, updateHeader,
  deleteTask, editTask, loadTaskOnEditForm, checkTask,
};