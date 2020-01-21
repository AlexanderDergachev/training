import { combineReducers } from 'redux';
import boards from './boards';
import notes from './notes';

const rootReducer = combineReducers({ boards, notes });

export default rootReducer;