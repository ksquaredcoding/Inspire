import { appState } from "../AppState.js"
import { todosService } from "../Services/TodosService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

// TODO get todo list drawing to page
function _drawTodoList() {
  let template = ''
  setHTML('todo-list', appState.todoList.ListTemplate)
  appState.todoListTasks.forEach(t => template += t.TaskTemplate)
  setHTML('tasks-target', template)
}
export class TodosController {
  constructor() {
    this.getTodos()
    appState.on('todoListTasks', _drawTodoList)
  }
  async getTodos() {
    try {
      await todosService.getTodos()
    } catch (error) {
      console.error('[GETTING TodoLIST]', error)
      Pop.error(error)
    }
  }
  async toggleTaskCompleted(id) {
    try {
      await todosService.toggleTaskCompleted(id)
    } catch (error) {
      console.error('[TOGGLING TASK COMPLETED]', error)
      Pop.error(error)
    }
  }
  async removeTask(id) {
    try {
      await todosService.removeTask(id)
    } catch (error) {
      console.error('[REMOVING TASK]', error)
      Pop.error(error)
    }
  }
  async addTask() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let formData = getFormData(form)
      await todosService.addTask(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error('[ADDING TASK]', error)
      Pop.error(error)
    }
  }
  async setUser() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let formData = getFormData(form)
      appState.user = formData.user
      await this.getTodos()
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error('[SETTING USER]', error)
      Pop.error(error)
    }
  }
}