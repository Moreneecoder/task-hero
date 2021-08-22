import { reassignTaskIds, taskFactory, storeTask } from '../src/components/appCompontents/factories/task';

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

const task = taskFactory({
    title: 'Do something',
    desc: 'Lorem is a goat',
    dueDate: '2021-08-27',
    priority: 'medium',
    project: 'Deeds',
    done: false,
});

const task1 = taskFactory({
    title: 'Do nothing',
    desc: 'Lorem is a cow',
    dueDate: '2021-08-27',
    priority: 'medium',
    project: 'Intro',
    done: false,
});

const getProjects = () => projects;
const saveProjects = (newProj) => { projects = newProj; };

describe('#taskFactory', () => {
  it('expects the correct passed in string title', () => {
    expect(task.title).toBe('Do something');
    expect(typeof task.title).toBe('string');
  });

  it('expects the correct passed in string description', () => {
    expect(task.desc).toBe('Lorem is a goat');
    expect(typeof task.desc).toBe('string');
  });

  it('expects the correct passed in string due date', () => {
    expect(task.dueDate).toBe('2021-08-27');
    expect(typeof task.dueDate).toBe('string');
  });

  it('expects the correct passed in string priority', () => {
    expect(task.priority).toBe('medium');
    expect(typeof task.priority).toBe('string');
  });

  it('expects the correct passed in string project name', () => {
    expect(task.project).toBe('Deeds');
    expect(typeof task.project).toBe('string');
  });

  it('expects the correct passed in boolean completed status', () => {
    expect(task.done).toBe(false);
    expect(typeof task.done).toBe('boolean');
  });
});

describe('#reassignTask', () => {
  const taskSorted = [
    {
      id: 0,
      title: 'Do something',
      desc: 'Lorem Ipsum is a Ipsum ooo',
      dueDate: '2021-08-05',
      priority: 'Medium',
      done: false,
    },
    {
      id: 1,
      title: 'Do Another thing',
      desc: 'Lorem Ipsum is not a Ipsum ooo',
      dueDate: '2021-10-05',
      priority: 'High',
      done: true,
    },
  ];

  it('loops and reassign the ids for each task', () => {
    reassignTaskIds(projects[0].todos);
    expect(projects[0].todos).toEqual(taskSorted);
  });
});

describe('#storeTask', () => {
    it('saves a new task in projects if provided project name exists', () => {
        storeTask(task1, getProjects(), saveProjects)
        
        const projectTasks = getProjects()[0].todos;
        const lastTaskInProject = projectTasks[projectTasks.length - 1]
        expect(lastTaskInProject).toEqual(task1)
    })
})