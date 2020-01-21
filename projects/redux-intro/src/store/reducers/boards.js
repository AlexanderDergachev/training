import {
    CREATE_BOARD, REMOVE_BOARD, EDIT_BOARD, CREATE_TASKLIST, REMOVE_TASKLIST,
    EDIT_TASKLIST, CREATE_TASK, REMOVE_TASK, EDIT_TASK, COMPLETE_TASK
} from '../constants';
import { load } from 'redux-localstorage-simple';

let BOARDS = load({ namespace: 'redux-intro' });

if (!BOARDS || !BOARDS.boards || !BOARDS.boards.length) {
    BOARDS = {
        boards: [],
    }
}

const boards = (state = BOARDS.boards, { id, name, type, board_id, tasklist_id, isСompleted }) => {
    switch (type) {
        case CREATE_BOARD:
            return [
                ...state, {
                    id: id,
                    name: name,
                    tasklists: []
                }
            ];
        case EDIT_BOARD:
            return [...state].map(board => {
                if (board.id === id) {
                    board.name = name
                }
                return board;
            })
        case REMOVE_BOARD:
            return [...state].filter(board =>
                board.id !== id
            );
        case CREATE_TASKLIST:
            const newTaskList = {
                id,
                name,
                tasks: []
            }
            return [...state].map(board => {
                if (board.id === +board_id) {
                    board.tasklists = [newTaskList, ...board.tasklists];
                }
                return board;
            })
        case REMOVE_TASKLIST:
            return [...state].map(board => {
                if (board.id === +board_id) {
                    board.tasklists = board.tasklists.filter(tasklist =>
                        tasklist.id !== id
                    );
                }
                return { id: board.id, name: board.name, tasklists: board.tasklists }
            })
        case EDIT_TASKLIST:
            return [...state].map(board => {
                if (board.id === +board_id) {
                    board.tasklists.forEach(tasklist => {
                        if (tasklist.id === id) {
                            tasklist.name = name;
                        }
                    })
                }
                return { id: board.id, name: board.name, tasklists: board.tasklists }
            })
        case CREATE_TASK:
            const newTask = {
                id,
                name,
                isСompleted
            }
            return [...state].map(board => {
                if (board.id === +board_id) {
                    board.tasklists.forEach(tasklist => {
                        if (tasklist.id === +tasklist_id) {
                            tasklist.tasks = [...tasklist.tasks, newTask];
                        }
                    })
                }
                return board;
            })
        case REMOVE_TASK:
            return [...state].map(board => {
                if (board.id === +board_id) {
                    board.tasklists.forEach(tasklist => {
                        if (tasklist.id === tasklist_id) {
                            tasklist.tasks = tasklist.tasks.filter(task =>
                                task.id !== id
                            )
                        }
                    })
                }
                return { id: board.id, name: board.name, tasklists: board.tasklists }
            })
        case EDIT_TASK:
            return [...state].map(board => {
                if (board.id === +board_id) {
                    board.tasklists.forEach(tasklist => {
                        if (tasklist.id === tasklist_id) {
                            tasklist.tasks.forEach(task => {
                                if (task.id === id) {
                                    task.name = name;
                                }
                            })
                        }
                    })
                }
                return { id: board.id, name: board.name, tasklists: board.tasklists }
            })
        case COMPLETE_TASK:
            return [...state].map(board => {
                if (board.id === +board_id) {
                    board.tasklists.forEach(tasklist => {
                        if (tasklist.id === tasklist_id) {
                            tasklist.tasks.forEach(task => {
                                if (task.id === id) {
                                    task.isСompleted = !task.isСompleted;
                                }
                            })
                        }
                    })
                }
                return { id: board.id, name: board.name, tasklists: board.tasklists }
            })
        default:
            return state;
    }
}

export default boards;