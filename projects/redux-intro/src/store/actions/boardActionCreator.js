import { CREATE_BOARD, REMOVE_BOARD, CREATE_TASKLIST, REMOVE_TASKLIST} from '../constants';

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