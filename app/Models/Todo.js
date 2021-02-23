import { generateId } from "../Utils/GenerateId.js";

export default class ToDo {

    constructor({ title, id = generateId(), taskId }) {

        this.title = title
        this.id = id
        this.taskId = taskId
    }

    get Template() {
        console.log("todo template called");
        return /* html */ `
                <div class="col">
                <card>
                    <h1 class="${this.title.includes('now') ? 'text-danger' : ''}">${this.title} <button type="button"
                    class="text-danger close mt-3" onclick="${this.title.strike}"> <span><i class="fa fa-check fa-color-success" aria-hidden="true"></i></span> </button> <button type="button"
                            class="text-danger close mt-3" onclick="app.todosController.delete('${this.id}')">
                            <span>&times;</span> </button> </h1>
                </card>
                </div>

        `

    }
}