import { CREATE_NOTE, REMOVE_NOTE, EDIT_NOTE } from '../constants';


export const createNote = (id, name) => ({
    type: CREATE_NOTE,
    id,
    name
})

export const removeNote = ( id ) => ({
    type: REMOVE_NOTE,
    id
})

export const editNote = (id, name) => ({
    type: EDIT_NOTE,
    id,
    name
})