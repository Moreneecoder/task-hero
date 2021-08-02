import { getProjects, projectExists, saveProjects } from './project';

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
    storeTask(taskObj, projects);
  }

  // if yes, store new task in corresponding project
  // if no, create project and store new task in it

  // load and display project task
};

export default createNewTask;