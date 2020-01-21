import { CREATE_NOTE } from '../constants';


export const createNote = (id, name) => ({
    type: CREATE_NOTE,
    id,
    name
})