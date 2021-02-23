import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { saveState } from "../Utils/LocalStorage.js";

class TodoService {
    constructor() {
        ProxyState.on('todos', saveState)
    }

    create(newTodo) {
        ProxyState.todos = [new Todo(newTodo), ...ProxyState.todos]
    }

    strike() {
        let str = '${this.title}';
        let result = str.strike();
        document.getElementById("strike").innerHTML = result;
    }



    delete(todoId) {
        debugger
        ProxyState.todos = ProxyState.todos.filter(t => t.id != todoId)
    }

}

export const todoService = new TodoService()