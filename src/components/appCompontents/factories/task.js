import { getProjects, projectExists } from './project';

const projectList = getProjects();

const createNewTask = (taskObj, projects = projectList) => {
  // check if project exists in localstorage
  projectExists(taskObj, projects);

  // if yes, store new task in corresponding project
  // if no, create project and store new task in it

  // load and display project task
};

export default createNewTask;