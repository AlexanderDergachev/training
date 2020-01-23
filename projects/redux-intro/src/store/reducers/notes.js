import { CREATE_NOTE, REMOVE_NOTE, EDIT_NOTE, EDIT_NOTE_TEXT } from '../constants'
import { load } from 'redux-localstorage-simple';


let NOTES = load({ namespace: 'redux-intro' });

if (!NOTES || !NOTES.notes || !NOTES.notes.length) {
    NOTES = {
        notes: [],
    }
}

const notes = (state = NOTES.notes, { id, name, type, text }) => {
    switch (type) {
        case CREATE_NOTE:
            return [
                ...state, {
                    id: id,
                    name: name,
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
        case EDIT_NOTE_TEXT:
            return [...state].map(note => {
                if (note.id === id) {
                    note.text = text
                }
                return note;
            })
        default:
            return state;
    }
}

export default notes;