import { appState } from "../AppState.js"



export class Todo {
  constructor() {
    this.user = appState.user
  }

  get ListTemplate() {
    return /*html*/ `
    <div class="col-md-3 m-2 p-2 todo-card">
      <div class="d-flex justify-content-between">
        <h3 class="text-light">${this.user}'s To Do:</h3>
        <p class="text-light p-2"><strong>${this.TasksRemaining} left</strong></p>
      </div>
      <ul class="list-group" id="tasks-target">
        ${this.TasksTemplate}
      </ul>
      <form onsubmit="app.todosController.addTask()" class="d-flex">
        <input type="text" class="form-control m-2" name="description" placeholder="Add New Task" required>
        <label for="description"></label>
        <button class="btn btn-outline-light fs-5 m-2" type="submit">+</button>
      </form>
    </div>
    `
  }

  get Tasks() {
    let tasks = appState.todoListTasks
    return tasks
  }

  get TasksTemplate() {
    let template = ''
    this.Tasks.forEach(task => template += task.TaskTemplate)
    return template
  }

  get TasksRemaining() {
    let remaining = 0
    this.Tasks.forEach(task => {
      if (task.completed == false) {
        remaining++
      }
    })
    return remaining
  }
}