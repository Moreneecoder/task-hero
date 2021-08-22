import { create, projectExists } from '../src/components/appCompontents/factories/project';

let projects = [
    {
      name: 'Intro',
      todos: [
        {
          id: 0,
          title: 'Do something',
          desc: 'Lorem Ipsum is a Ipsum ooo',
          dueDate: '2021-08-05',
          priority: 'Medium',
          done: false,
        },
        {
          id: 2,
          title: 'Do Another thing',
          desc: 'Lorem Ipsum is not a Ipsum ooo',
          dueDate: '2021-10-05',
          priority: 'High',
          done: true,
        },
      ],
  
    },
  ];

  const task = {
    title: 'Do something',
    desc: 'Lorem is a goat',
    dueDate: '2021-08-27',
    priority: 'medium',
    project: 'Deeds',
    done: false,
  };

  const getProjects = () => projects;
  const saveProjects = (newProj) => projects = newProj

describe('#create', () => {   
    it('creates a new project object with name and empty todo array', () => {
        const name = 'testProject';
        const todos = [];

        create({ name, todos }, getProjects, saveProjects);
        const lastProject = projects[projects.length - 1]; 
        expect(lastProject).toEqual({ name, todos });
    })
})

describe('#projectExists', () => {
  it('returns a boolean', () => {
      const status = projectExists(task, getProjects())
      expect(typeof status).toBe('boolean')
  })

  it('returns false if project name does not exists', () => {
    const status = projectExists(task, getProjects())
    expect(status).toBe(false)
  })

  it('returns true if project name exists', () => {
    task.project = 'Intro';
    const status = projectExists(task, getProjects())
    expect(status).toBe(true)
  })
})

