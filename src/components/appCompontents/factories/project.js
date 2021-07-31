const getProjects = () => {
    if(! localStorage.getItem('projects')){
        let projects = [
            {
                "name": 'Welcome'
            },
            {
                "name": 'Study'
            }
        ]

        localStorage.setItem('projects', JSON.stringify(projects))
    }

    return JSON.parse(localStorage.getItem('projects'))
};

const Project = (name) => {
  this.name = name;
};

// Project.prototype.success = () => `Project ${this.name} successfully created`;

export {getProjects}