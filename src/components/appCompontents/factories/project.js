const saveProjects = (projects, storageName = 'projects') => {
  localStorage.setItem(storageName, JSON.stringify(projects));
};

const saveDefaultProject = () => {
  const projects = [
    {
      name: 'Welcome',
      todos: [
        {
          id: 0,
          title: 'Start Here',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni culpa veniam non rem eos illo temporibus architecto quas, voluptatibus facere!',
          dueDate: '2021-08-05',
          priority: 'Low',
          done: false,
        },
      ],
    },
  ];

  saveProjects(projects);
};

const getProjects = (storageName = 'projects') => {
  if (!localStorage.getItem(storageName)) {
    saveDefaultProject();
  }

  return JSON.parse(localStorage.getItem(storageName));
};

const projectExists = (task, prjs) => {
  const matchingProj = prjs.filter((prj) => prj.name.toLowerCase() === task.project.toLowerCase());
  if (matchingProj.length > 0) {
    return true;
  }

  return false;
};

const create = (project, myGetProjects, mySaveFunction) => {
  const projects = myGetProjects();
  projects.push(project);
  mySaveFunction(projects);
};

const Project = (Name) => {
  const name = Name;
  const todos = [];

  create({ name, todos }, getProjects, saveProjects);
  return { name, todos };
};

const addToProjectsMenu = (projectName) => {
  document.querySelector('.project-list').innerHTML += `
        <hr><p data-id='${projectName}' class="projects cursor">${projectName}</p>
    `;
};

export {
  getProjects, projectExists, saveProjects, Project, addToProjectsMenu, create,
};