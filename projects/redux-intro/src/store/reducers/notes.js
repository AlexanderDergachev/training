import { CREATE_NOTE, REMOVE_NOTE, EDIT_NOTE } from '../constants'
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
        case REMOVE_NOTE:
            return [...state].filter(note =>
                note.id !== id
            );
        case EDIT_NOTE:
            return [...state].map(note => {
                if (note.id === id) {
                    note.name = name
                }
                return note;
            })
        default:
            return state;
    }
}

export default notes;