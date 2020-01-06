import { CREATE_BOARD, INITIAL_BOARDS } from '../constants';

const boards = (state = INITIAL_BOARDS, { id, name, type }) => {
    switch (type) {
        case CREATE_BOARD :
            return [
                ...state, {
                    id: id,
                    name: name,
                }
            ];
        default:
            return state;
    }
}

export default boards;