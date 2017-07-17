import _ from 'lodash';
import store from 'js/store';
import * as actionTypes from 'js/src/modules/todoActionTypes';
import { watchToDoSaga } from 'js/src/modules/watchToDoSaga';

export function addToDoItem(toDoList) {
    return {
        type: actionTypes.ADD_TODO,
        toDoList,
    };
}

export function addToDo(inputText, fullInputText, inputPriority, timestamp) {
    return function(dispatch) {
        const state = store.getState();
        const updatedArr = _.slice(state.toDoList, 0);
        updatedArr.push({
            message: inputText,
            fullMessage: fullInputText,
            priority: inputPriority,
            timestamp,
        });
        dispatch(addToDoItem(updatedArr));
    };
}

export function removeToDoItem(toDoList) {
    return {
        type: actionTypes.REMOVE_TODO,
        toDoList,
    };
}

export function removeToDo(timestamp) {
    return function(dispatch) {
        const state = store.getState();
        const updatedArr = _.reject(state.toDoList, ['timestamp', timestamp]);
        dispatch(removeToDoItem(updatedArr));
    };
}

export function sortToDoList(toDoList) {
    return {
        type: actionTypes.SORT_TODO,
        toDoList,
    };
}

export function sortToDo(type, order) {
    return function(dispatch) {
        const state = store.getState();
        let sortedArr = [];
        if (type === 'time') {
            sortedArr = _.slice(state.toDoList, 0);
            sortedArr = order === 'ascending' ?
                _.orderBy(sortedArr, ['timestamp'], ['asc']) :
                _.orderBy(sortedArr, ['timestamp'], ['desc']);
        } else if (type === 'priority') {
            const lowPrArr = _.filter(state.toDoList, ['priority', 'Low']);
            const mediumPrArr = _.filter(state.toDoList, ['priority', 'Medium']);
            const highPrArr = _.filter(state.toDoList, ['priority', 'High']);

            sortedArr = order === 'ascending' ?
                [...lowPrArr, ...mediumPrArr, ...highPrArr] :
                [...highPrArr, ...mediumPrArr, ...lowPrArr];
        }
        dispatch(sortToDoList(sortedArr));
    };
}

export function loadToDo() {
    return {
        type: actionTypes.LOAD_TODO,
    };
}
