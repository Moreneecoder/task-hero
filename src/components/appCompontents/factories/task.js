import {
  getProjects, projectExists, saveProjects, Project, addToProjectsMenu,
} from './project';
import { loadAsHtml, makeActive, removeFromDom } from '../../../utils/domActions';

const taskHtml = (todo) => `<div data-id="${todo.id}" class="row task mt-3 mx-2">
                <div class="col-12 border-top border-bottom p-2 d-flex align-items-center justify-content-between">
                <input type="checkbox" name="" id="">
                <p class="m-0">${todo.title}</p>
                <p class="m-0">${todo.dueDate}</p>
                <p class="m-0 text-primary">${todo.priority}</p>

                <div class="ml-auto">                    
                    <button class="btn btn-warning text-white edit-btn" data-bs-toggle="modal" data-bs-target=".editModal">Edit</button>
                    <button class="btn btn-danger delete-btn">Delete</button>
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
    let count = 0
    tasks.forEach(task => {
        task.id = count
        count++
    })

}

const removeTaskFromStorage = (obj) => {
  const projects = getProjects();
  const taskId = obj.task.getAttribute('data-id');
  const index = getProjectIndex(obj.project, projects);
  const tasks = projects[index].todos
  tasks.splice(taskId, 1);
        
  reassginTaskIds(tasks)
  saveProjects(projects);
};

const deleteTask = (obj) => {
  removeTaskFromStorage(obj);
  removeFromDom(obj.task);
};

const selectPriority = (priority) => {
    const editSelect = document.querySelector('#edit-priority')
    const selectOpts = editSelect.querySelectorAll('option')

    selectOpts.forEach(opt => {
        console.log(opt.value, priority);
        opt.value === priority ? opt.setAttribute('selected', 'selected') : opt.removeAttribute('selected')
    });

}

const loadTaskOnEditForm = (obj) => {
    const projects = getProjects();
    const taskId = obj.task.getAttribute('data-id');
    const index = getProjectIndex(obj.project, projects);
    const taskFromStorage = projects[index].todos[taskId];

    document.querySelector('#task-id').value = taskFromStorage.id
    document.querySelector('#edit-title').value = taskFromStorage.title
    document.querySelector('#edit-desc').value = taskFromStorage.desc
    document.querySelector('#edit-date').value = taskFromStorage.dueDate
    document.querySelector('#edit-project').value = obj.project

    selectPriority(taskFromStorage.priority)
}

const updateTaskInStorage = (obj) => {
    const projects = getProjects();
    const index = getProjectIndex(obj.project, projects);
    const currentTask = projects[index].todos[obj.id];

    Object.keys(obj).forEach(element => {
        if(currentTask[element]){
            currentTask[element] = obj[element]
        }
    });
    
    saveProjects(projects)
}

const editTask = (obj) => {
    
    updateTaskInStorage(obj)
    displayTasks(obj.project)

}

export {
  createNewTask, taskHtml, displayTasks, updateHeader, deleteTask, editTask, loadTaskOnEditForm
};