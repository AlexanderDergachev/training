import { CREATE_BOARD, REMOVE_BOARD, CREATE_TASKLIST, REMOVE_TASKLIST, EDIT_TASKLIST, CREATE_TASK, REMOVE_TASK} from '../constants';

export const createBoard = (id, name) => ({
    type: CREATE_BOARD,
    id,
    name
});

export const removeBoard = ( id ) => ({
    type: REMOVE_BOARD,
    id
})

export const createTaskList = (board_id, id, name) => ({
    type: CREATE_TASKLIST,
    board_id,
    id,
    name
});

export const removeTaskList = (board_id, id) => ({
    type: REMOVE_TASKLIST,
    board_id,
    id
})

export const editTaskList = (board_id, id, name) => ({
    type: EDIT_TASKLIST,
    board_id,
    id,
    name
})

export const createTask = (board_id, tasklist_id, id, name, isСompleted) => ({
    type: CREATE_TASK,
    board_id,
    tasklist_id,
    id,
    name, 
    isСompleted
})

export const removeTask = (board_id, tasklist_id, id) => ({
    type: REMOVE_TASK,
    board_id,
    tasklist_id,
    id
})
