import * as Projects from './project';
const projectList = Projects.getProjects();

const projectExists = (task, projects) => { 
    const matchingProjects = projects.filter(project => project.name.toLowerCase() === task.project.toLowerCase());
    if(matchingProjects.length > 0){
        return true;
    }

    return false
}

const createNewTask = (taskObj, projects = projectList) => {
    // check if project exists in localstorage
    console.log(projectExists(taskObj, projects));

    // if yes, store new task in corresponding project
    // if no, create project and store new task in it

    // load and display project task
}

export { createNewTask }