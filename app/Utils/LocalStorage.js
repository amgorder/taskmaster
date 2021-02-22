import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import Todo from "../Models/Todo.js";


export function saveState() {
    localStorage.setItem('taskmaster', JSON.stringify({
        tasks: ProxyState.tasks,
        todos: ProxyState.todos
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('taskmaster'))
    if (data) {
        ProxyState.tasks = data.tasks.map(oldTask => new Task(oldTask))
        ProxyState.todos = data.todos.map(t => new Todo(t))
    }
    console.log('export loadstate');
}