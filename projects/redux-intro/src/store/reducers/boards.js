import { CREATE_BOARD, REMOVE_BOARD, CREATE_TASKLIST } from '../constants';
import { load } from 'redux-localstorage-simple';

let BOARDS = load({ namespace: 'redux-intro' });

if (!BOARDS || !BOARDS.boards || !BOARDS.boards.length) {
    BOARDS = {
        boards: [],
    }
}

const boards = (state = BOARDS.boards, { id, name, type, board_id}) => {
    switch (type) {
        case CREATE_BOARD:
            return [
                ...state, {
                    id: id,
                    name: name,
                    tasklists: []
                }
            ];
        case REMOVE_BOARD:
            return [...state].filter(board =>
                board.id !== id
            );
        case CREATE_TASKLIST:
            const newTaskList = {
                id: id,
                name: name,
                tasks: []
            }
            return [...state].map(board => {
                if (board.id === +board_id) {
                    console.log('hui');
                    board.tasklists = [...board.tasklists, newTaskList];
                }
                return board;
            })            
        default:
            return state;
    }
}

export default boards;