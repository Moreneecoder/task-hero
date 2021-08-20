import {saveProjects, storageName} from '../src/components/appCompontents/factories/project'

it.todo('makes the world go round')

describe('#projectExists', () => {
  const projects = [
    {
      name: 'Welcome',
      todos: [
        {
          id: 0,
          title: 'Start Test Here',
          desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni culpa veniam non rem eos illo temporibus architecto quas, voluptatibus facere!',
          dueDate: '2021-08-05',
          priority: 'Low',
          done: false,
        },
      ],
    },
  ];

  saveProjects(projects, storageName('test_projects'))
})