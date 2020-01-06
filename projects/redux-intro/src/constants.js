export const CREATE_BOARD = 'CREATE_BOARD';


const boards = JSON.parse(localStorage.getItem('boards'));
export const INITIAL_BOARDS = (boards === null ? [] : boards);