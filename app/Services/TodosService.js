import { appState } from "../AppState.js";
import { Task } from "../Models/Task.js";
import { Todo } from "../Models/Todo.js";
import { sandboxServer } from "./AxiosService.js"



class TodosService {
  async addTask(formData) {
    let task = new Task(formData)
    const res = await sandboxServer.post(`${appState.user}/todos`, task)
    let newTask = new Task(res.data)
    appState.todoListTasks = [...appState.todoListTasks, newTask]
  }
  async removeTask(id) {
    await sandboxServer.delete(`${appState.user}/todos/${id}`)
    appState.todoListTasks = appState.todoListTasks.filter(t => t.id !== id)
  }
  async toggleTaskCompleted(id) {
    const task = appState.todoListTasks.find(t => t.id == id)
    if (!task) {
      throw new Error('BAD ID')
    }
    task.completed = !task.completed
    await sandboxServer.put(`${appState.user}/todos/${id}`, task)
    appState.emit('todoListTasks')
  }
  async getTodos() {
    appState.todoList = new Todo()
    const res = await sandboxServer.get(`${appState.user}/todos`)
    console.log(res.data);
    appState.todoListTasks = res.data.map(l => new Task(l))
    console.log('task list:', appState.todoListTasks);
  }

}

export const todosService = new TodosService()