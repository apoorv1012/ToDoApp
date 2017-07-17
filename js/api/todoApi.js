import axios from 'axios';

class TodoApi {
    static getAllToDos() {
        return axios('https://api.myjson.com/bins/68haf')
            .then((response) => response.data.toDoList)
            .catch((error) => error);
    }
}

export default TodoApi;
