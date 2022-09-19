


export class Task {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed || false
    this.description = data.description
    this.user = data.user || 'kevin'
  }

  get TaskTemplate() {
    return /*html*/ `
    <li class="list-group-item d-flex justify-content-between"><input
        onchange="app.todosController.toggleTaskCompleted('${this.id}')" class="ms-2" type="checkbox"
        ${this.completed ? 'checked' : ''}> ${this.description} <i class="bi bi-trash selectable text-danger"
        onclick="app.todosController.removeTask('${this.id}')"></i>
    </li>
    `
  }
}