import { getProjects } from './factories/project';
import { loadAsHtml, makeActive } from '../../utils/domActions';
import { taskHtml } from './factories/task';

// Dynamically add options to project select for new task form
const projectSelect = document.querySelector('#project');
const projectsHtml = loadAsHtml(getProjects(), (project) => `<option value="${project.name}">${project.name}</option>`);

projectSelect.innerHTML = projectsHtml;

const appSkeleton = () => {
  const projectList = getProjects();

  return `
    <div class="row px-3">
      <div class="col-md-3 card alert alert-success">
          <h5 class="mb-0">PROJECTS</h5>
          
          <div class="project-list">
              ${loadAsHtml(projectList, (project) => `<hr><p class="projects cursor">${project.name}</p>`)}
          </div>
      </div>
      <div class="col-md-9">
          <h3 id="project-title" class="float-start">${projectList[0].name}</h3>
          <button class="btn btn-primary float-end" data-bs-toggle="modal" data-bs-target="#new-task-modal">New Task</button>

          <div style="clear: both;"></div>
          
          <div id="task-list">
            ${loadAsHtml(projectList[0].todos, (todo) => taskHtml(todo))}
          </div>          

      </div>
    </div> `;
};

const appComponent = () => {
  const appWrapper = document.createElement('section');
  appWrapper.id = 'app-wrapper';

  appWrapper.innerHTML = appSkeleton();

  const firstProject = appWrapper.querySelectorAll('.projects')[0];
  //   console.log(firstProject);
  makeActive(firstProject);

  return appWrapper;
};

export default appComponent;