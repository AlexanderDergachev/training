import { CREATE_BOARD } from '../constants';

export const createBoard = (id, name) => ({
    type: CREATE_BOARD,
    id,
    name
});