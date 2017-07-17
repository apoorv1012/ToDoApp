import * as actionTypes from 'js/src/modules/todoActionTypes';
import _ from 'lodash';

const DEFAULT_STATE = {
    toDoList: [],
    userDetails: {
        username: 'Aniket',
        emailId: 'aniketarena@gm.com',
        contact: '9999999999',
    },
};

const loadedToDo = (state, action) =>
    _.defaults({
        toDoList: action.toDoList,
    }, state);

const addToDo = (state, action) =>
    _.defaults({
        toDoList: action.toDoList,
    }, state);

const removeToDo = (state, action) =>
    _.defaults({
        toDoList: action.toDoList,
    }, state);

const sortToDo = (state, action) =>
    _.defaults({
        toDoList: action.toDoList,
    }, state);

export default function todo(state = DEFAULT_STATE, action) {
    switch (action.type) {
        case actionTypes.LOADED_TODO:
            return loadedToDo(state, action);

        case actionTypes.ADD_TODO:
            return addToDo(state, action);

        case actionTypes.REMOVE_TODO:
            return removeToDo(state, action);

        case actionTypes.SORT_TODO:
            return sortToDo(state, action);

        default:
            return state;
    }
}
