import 'babel-polyfill';
import { call, put, fork, take, takeEvery } from 'redux-saga/effects';
import store from 'js/store';
import TodoApi from 'js/api/todoApi';
import * as actionTypes from 'js/src/modules/todoActionTypes';

export function* loadToDos() {
    try {
        const toDoList = yield call(TodoApi.getAllToDos);
        yield put({type: actionTypes.LOADED_TODO, toDoList});
    } catch(error) {
        yield put({type: actionTypes.FAILEDLOAD_TODO, error});
    }    
}

export function* watchToDoSaga() {
    yield takeEvery(actionTypes.LOAD_TODO, loadToDos);
}