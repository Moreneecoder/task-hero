import * as Projects from './factories/project'

const loadProjects = (projects) => {
    let list = ``
    projects.forEach((project) => {
        list += (`<hr><p>${project.name}</p>`)
    });

    return list
}

const appSkeleton = () => {
    let projectList = Projects.getProjects()
    return `
    <div class="row px-3">
      <div class="col-md-3 card alert alert-success">
          <h5 class="mb-0">PROJECTS</h5>
          
          <div class="project-list">
              ${loadProjects(projectList)}
          </div>
      </div>
      <div class="col-md-9">
          <h3 class="float-start">${projectList[0].name}</h3>
          <button class="btn btn-primary float-end">New Task</button>

          <div style="clear: both;"></div>
          
          <div class="row mt-3 mx-2">
              <div class="col-12 border-top border-bottom p-2 d-flex align-items-center justify-content-between">
                <input type="checkbox" name="" id="">
                <p class="m-0">${projectList[0].todos[0].title}</p>
                <p class="m-0">${ projectList[0].todos[0].dueDate }</p>
                <p class="m-0 text-primary">${ projectList[0].todos[0].priority }</p>

                <div class="ml-auto">                    
                  <button class="btn btn-warning text-white">Edit</button>
                  <button class="btn btn-danger">Delete</button>
                </div>
              </div>
          </div>
      </div>
    </div> `
}

const appComponent = () => {
  const appWrapper = document.createElement('section');
  appWrapper.id = 'app-wrapper';

  appWrapper.innerHTML = appSkeleton();
  return appWrapper;
};

export default appComponent;