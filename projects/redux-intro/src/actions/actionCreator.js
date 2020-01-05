import { CREATE_BOARD } from '../constants';

export const createBoard = (name) => ({
    type: CREATE_BOARD,
    name
});