import { CREATE_BOARD, REMOVE_BOARD } from '../constants';

export const createBoard = (id, name) => ({
    type: CREATE_BOARD,
    id,
    name
});

export const removeBoard = ( id ) => ({
    type: REMOVE_BOARD,
    id
})