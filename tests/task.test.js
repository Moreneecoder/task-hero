import { reassignTaskIds, taskFactory } from '../src/components/appCompontents/factories/task';

const projects = [
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

describe('#taskFactory', () => {
  const task = taskFactory({
    title: 'Do something',
    desc: 'Lorem is a goat',
    dueDate: '2021-08-27',
    priority: 'medium',
    project: 'Deeds',
    done: false,
  });

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