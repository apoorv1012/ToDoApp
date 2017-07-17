import { createStore, applyMiddleware } from 'redux';
import todo from 'js/src/modules//todoReducers';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { watchToDoSaga } from 'js/src/modules/watchToDoSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(todo, applyMiddleware(thunk, sagaMiddleware));
sagaMiddleware.run(watchToDoSaga);

export default store;
