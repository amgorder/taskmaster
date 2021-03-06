import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/GenerateId.js";
import ToDo from "../Models/Todo.js"



export default class Task {

    constructor({ title, id = generateId() }) {
        this.title = title
        this.id = id
    }

    //keeping this.title and this.id straight is difficult ?'s around how this works 
    get Template() {
        return /*html*/ `
        <div class="col-3  card shadow-light-sm m-3">
        <h1>${this.title}<button class="text-danger close mt-2"
                onclick="app.taskController.delete('${this.id}')"><span>&times;</span></button></h1>
        <h5>New To Do</h5>
        <p>Choose your Todo's colors:</p>

        
        
        <form onsubmit="app.todosController.create(event, '${this.id}',)">
        <div class="form-group">
        
        <div>
            <input type="color" id="head" name="color" value="#e66465">
        </div>
                <input type="text" name="title" minlength="3char" maxlength="50char"
                    placeholder="Enter To Do Here...">
                <button class="btn btn-success btn-sm" type="submit"> <i class="fa fa-plus"
                        aria-hidden="true"></i></button>
                <div class="row">
                    <div class="col">
                        <h4><span>${this.Todo}</span></h4>
                    </div>
                </div>
            </div>
        </form>
    </div>
    
    `
    }

    get Todo() {
        let template = ""
        let todos = ProxyState.todos.filter(t => t.taskId == this.id)
        todos.forEach(t => template += t.Template)
        return template
    }
}