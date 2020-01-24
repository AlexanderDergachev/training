import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { save } from 'redux-localstorage-simple';

const middleware = [save({ namespace: 'redux-intro'}), ];

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);


export default store;