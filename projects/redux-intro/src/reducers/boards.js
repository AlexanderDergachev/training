import { CREATE_BOARD } from '../constants';

const boards = (state = [], action) => {
    switch (action.type) {
        case CREATE_BOARD :
            return [
                ...state, {
                    name: action.name,
                }
            ];
        default:
            return state;
    }
}

export default boards;