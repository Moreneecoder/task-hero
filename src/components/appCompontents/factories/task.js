import {
  getProjects, projectExists, saveProjects, Project, addToProjectsMenu,
} from './project';
import { loadAsHtml, makeActive } from '../../../utils/domActions';

const taskHtml = (todo) => `<div class="row mt-3 mx-2">
                <div class="col-12 border-top border-bottom p-2 d-flex align-items-center justify-content-between">
                <input type="checkbox" name="" id="">
                <p class="m-0">${todo.title}</p>
                <p class="m-0">${todo.dueDate}</p>
                <p class="m-0 text-primary">${todo.priority}</p>

                <div class="ml-auto">                    
                    <button class="btn btn-warning text-white">Edit</button>
                    <button class="btn btn-danger">Delete</button>
                </div>
                </div>
             </div>`;

const projectList = getProjects();

const storeTask = (task, projects) => {
  projects.forEach((project) => {
    if (project.name.toLowerCase() === task.project.toLowerCase()) {
      task.id = project.todos.length;
      project.todos.push(task);
    }
  });

  saveProjects(projects);
};

const getProjectIndex = (projectName, projects = projectList) => {
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

const createNewTask = (taskObj, projects = projectList) => {
  // check if project exists in localstorage
  if (projectExists(taskObj, projects)) {
    // if yes, store new task in corresponding project
    storeTask(taskObj, projects);
    // console.log(savedTask);
  } else {
    // if no, create project and store new task in it
    // console.log('no project');
    Project(taskObj.project);
    storeTask(taskObj, getProjects());
    addToProjectsMenu(taskObj.project);
  }

  // load and display project tasks
  displayTasks(taskObj.project);
  updateHeader(taskObj.project);

  const currentProject = document.querySelectorAll('.projects')[getProjectIndex(taskObj.project, getProjects())];
  makeActive(currentProject);
};

export {
  createNewTask, taskHtml, displayTasks, updateHeader,
};