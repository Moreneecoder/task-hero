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
      },
    ];

    localStorage.setItem('projects', JSON.stringify(projects));
  }

  return JSON.parse(localStorage.getItem('projects'));
};

const Project = (name) => {
  this.name = name;
};

// Project.prototype.success = () => `Project ${this.name} successfully created`;

export { getProjects, Project };