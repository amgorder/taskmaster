import { todoService } from "../Services/TodoService.js";
import { ProxyState } from "../AppState.js";

export default class TodoController {

    constructor() {

    }

    create(event, taskId) {
        event.preventDefault()
        let form = event.target
        let newTodo = {
            title: form.title.value,
            taskId: taskId,
            color: form.color.value
        }
        debugger
        todoService.create(newTodo)
    }

    delete(todoId) {
        todoService.delete(todoId)
    }

    lineThrough(todoId) {
        todoService.lineThrough()


    }
}