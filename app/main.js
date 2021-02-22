import TaskController from "./Controllers/TaskController.js";
import TodoController from "./Controllers/TodoController.js";
import ValuesController from "./Controllers/ValuesController.js";
import { loadState } from "./Utils/LocalStorage.js";

class App {
  //valuesController = new ValuesController();

  taskController = new TaskController();
  todosController = new TodoController();
}

window["app"] = new App();
loadState()