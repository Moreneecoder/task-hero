import {reassignTaskIds} from '../src/components/appCompontents/factories/task'

const projects = [   
    {
        "name": 'Intro',
        "todos": [
          {
            "id":0,
            "title": 'Do something',
            "desc": 'Lorem Ipsum is a Ipsum ooo',
            "dueDate": '2021-08-05',
            "priority": 'Medium',
            "done": false
          },
          {
            "id":2,
            "title": 'Do Another thing',
            "desc": 'Lorem Ipsum is not a Ipsum ooo',
            "dueDate": '2021-10-05',
            "priority": 'High',
            "done": true
            }
        ]

    }
]

describe('#reassignTask', () => {
    const taskSorted = [
        {
          "id":0,
          "title": 'Do something',
          "desc": 'Lorem Ipsum is a Ipsum ooo',
          "dueDate": '2021-08-05',
          "priority": 'Medium',
          "done": false
        },
        {
          "id":1,
          "title": 'Do Another thing',
          "desc": 'Lorem Ipsum is not a Ipsum ooo',
          "dueDate": '2021-10-05',
          "priority": 'High',
          "done": true
          }
      ]
      
  it('loops and reassign the ids for each task', () => {
    reassignTaskIds(projects[0].todos)
    expect(projects[0].todos).toEqual(taskSorted)
  })
})