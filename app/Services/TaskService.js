import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js"



class TaskService {
    constructor() {
        //console.log("hello from the task Service");
        ProxyState.on('tasks', saveState)

    }

    create(newTask) {
        let temp = ProxyState.tasks
        let newestTask = new Task(newTask)
        temp.push(newestTask)
        ProxyState.tasks = temp

        //This is another way to create a new (i don't fully understand how it works yet)
        //ProxyState.tasks = [new Task(newTask), ...ProxyState.tasks]
    }

    delete(taskId) {
        // let temp = ProxyState.tasks
        // let taskIndex = temp.findIndex(t => t.id == taskId)
        // temp.splice(taskIndex, 1)
        // ProxyState.tasks = temp

        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != taskId)
        ProxyState.todos = ProxyState.todos.filter(t => t.taskId != taskId)
    }

}


export const taskService = new TaskService()