const saveProjects = (projects) => {
    localStorage.setItem('projects', JSON.stringify(projects));
}

const getProjects = () => {
  if (!localStorage.getItem('projects')) {
    const projects = [
      {
        name: 'Welcome',
        todos: [
          {
            title: 'Start Here',
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni culpa veniam non rem eos illo temporibus architecto quas, voluptatibus facere!',
            dueDate: 'Aug 5, 2021',
            priority: 'Low',
            done: false,
          },
        ],
      },
      {
        name: 'Study',
        todos: [],
      },
    ];

    saveProjects(projects)
  }

  return JSON.parse(localStorage.getItem('projects'));
};

const projectExists = (task, prjs) => {
  const matchingProj = prjs.filter((prj) => prj.name.toLowerCase() === task.project.toLowerCase());
  if (matchingProj.length > 0) {
    return true;
  }

  return false;
};

// Array.prototype.loadAsHtml = function (callback) {
//   let list = '';
//   this.forEach((obj) => {
//     list += (callback(obj));
//   });

//   return list;
// };

const Project = (name) => {
  this.name = name;
};

// Project.prototype.success = () => `Project ${this.name} successfully created`;

export { getProjects, projectExists, saveProjects, Project };