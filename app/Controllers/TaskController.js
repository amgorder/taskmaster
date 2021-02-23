import { ProxyState } from "../AppState.js";
import { taskService } from "../Services/TaskService.js"


function _draw() {

    let taskElem = document.getElementById("tasks")
    let template = ""
    ProxyState.tasks.forEach(task => template += task.Template)
    taskElem.innerHTML = template
}





export default class TaskController {

    constructor() {
        ProxyState.on('tasks', _draw)
        ProxyState.on('todos', _draw)

    }

    create(event) {
        event.preventDefault()
        let yes = confirm('Are you sure?');
        if (yes == true) {
            let form = event.target
            let newTask = {
                title: form.title.value
            }
            taskService.create(newTask)
        }
    }

    strike(todoId) {


    }

    delete(taskId) {
        let yes = confirm('Are you sure?');
        if (yes == true) {
            taskService.delete(taskId)
        }
    }
}