import { CREATE_NOTE } from '../constants'
import { load } from 'redux-localstorage-simple';


let NOTES = load({ namespace: 'redux-intro' });

if (!NOTES || !NOTES.notes || !NOTES.notes.length) {
    NOTES = {
        notes: [],
    }
}

const notes = (state = NOTES.notes, { id, name, type }) => {
    switch (type) {
        case CREATE_NOTE:
            return [
                ...state, {
                    id: id,
                    name: name,
                    title: '',
                    text: ''
                }
            ];
        default:
            return state;
    }
}

export default notes;