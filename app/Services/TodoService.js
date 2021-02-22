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

    delete(todoId) {
        ProxyState.todos = ProxyState.todos.filter(t => t.id != todoId)
    }

}

export const todoService = new TodoService()