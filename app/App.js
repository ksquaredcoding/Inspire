// import { ValuesController } from "./Controllers/ValuesController.js";
import { BackgroundImagesController } from "./Controllers/BackgroundImagesController.js";
import { ClocksController } from "./Controllers/ClocksController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { WeathersController } from "./Controllers/WeathersController.js";

class App {
  // valuesController = new ValuesController();
  todosController = new TodosController()
  backgroundImagesController = new BackgroundImagesController()
  clocksController = new ClocksController()
  weathersController = new WeathersController()
}


window["app"] = new App();
