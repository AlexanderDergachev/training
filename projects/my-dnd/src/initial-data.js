const initialData = {
    tasks: {
        'task-1':{ id: 'task-1', content: 'Take out the garbage 1' },
        'task-2':{ id: 'task-2', content: 'Take out the garbage 2' },
        'task-3':{ id: 'task-3', content: 'Take out the garbage 3' },
        'task-4':{ id: 'task-4', content: 'Take out the garbage 4' },
        'task-5':{ id: 'task-5', content: 'Take out the garbage 5' },
        'task-6':{ id: 'task-6', content: 'Take out the garbage 6' },
        'task-7':{ id: 'task-7', content: 'Take out the garbage 7' },
        'task-8':{ id: 'task-8', content: 'Take out the garbage 8' },
        'task-9':{ id: 'task-9', content: 'Take out the garbage 9' },
        'task-10':{ id: 'task-10', content: 'Take out the garbage 10' },
        'task-11':{ id: 'task-11', content: 'Take out the garbage 11' },

    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To-do 1',
            taskIds: ['task-1', 'task-2', 'task-3']
        },
        'column-2': {
            id: 'column-2',
            title: 'To-do 2',
            taskIds: ['task-4']
        },
        'column-3': {
            id: 'column-3',
            title: 'To-do 3',
            taskIds: []
        },
        'column-4': {
            id: 'column-4',
            title: 'To-do 4',
            taskIds: ['task-5', 'task-6', 'task-7', 'task-8']
        },
        'column-5': {
            id: 'column-5',
            title: 'To-do 5',
            taskIds: []
        },
        'column-6': {
            id: 'column-6',
            title: 'To-do 6',
            taskIds: ['task-9', 'task-10', 'task-11']
        },
        

    },
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5', 'column-6'],
}

export default initialData;