import { CREATE_BOARD, REMOVE_BOARD } from '../constants';
import { load } from 'redux-localstorage-simple';

let BOARDS = load({ namespace: 'redux-intro' });

if (!BOARDS || !BOARDS.boards || !BOARDS.boards.length) {
    BOARDS = {
        boards: [],
    }
}

const boards = (state = BOARDS.boards, { id, name, type }) => {
    switch (type) {
        case CREATE_BOARD:
            return [
                ...state, {
                    id: id,
                    name: name,
                }
            ];
        case REMOVE_BOARD:
            return [...state].filter(board =>
                board.id !== id
            );
        default:
            return state;
    }
}

export default boards;