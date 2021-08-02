import { getProjects, projectExists, saveProjects, Project } from './project';

const taskHtml  = (todo) => {
    return `<div class="row mt-3 mx-2">
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
             </div>`
}

const projectList = getProjects();

const storeTask = (task, projects) => {
  projects.forEach((project) => {
    if (project.name.toLowerCase() === task.project.toLowerCase()) {
      project.todos.push(task);
    }
  });

  saveProjects(projects);
};

const createNewTask = (taskObj, projects = projectList) => {
  // check if project exists in localstorage
  if (projectExists(taskObj, projects)) {
      // if yes, store new task in corresponding project
    storeTask(taskObj, projects);
  }
  else{
    // if no, create project and store new task in it
    Project(taskObj.project)
    storeTask(taskObj, projects);

  }


  // load and display project task
};

export {createNewTask, taskHtml};