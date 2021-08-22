import { create } from '../src/components/appCompontents/factories/project';

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

