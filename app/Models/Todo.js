import { generateId } from "../Utils/GenerateId.js";

export default class ToDo {

    constructor({ title, id = generateId(), taskId, color }) {

        this.title = title
        this.id = id
        this.taskId = taskId
        this.color = color
    }

    get Template() {
        console.log("todo template called");
        return /* html */ `
        <div class="col" style="background-color: ${this.color};">

        <h1  class="${this.title.includes('now') ? 'text-danger' : ''}">${this.title} <button type="button"
                class="text-success close mt-3" onclick="app.todosController.lineThrough('${this.id}')">
                <span><i class="fa fa-check fa-color-success" aria-hidden="true"></i></span> </button> <button
                type="button" class="text-danger close mt-3" onclick="app.todosController.delete('${this.id}')">
                <span>&times;</span> </button> </h1>

    </div>
        `

    }
}