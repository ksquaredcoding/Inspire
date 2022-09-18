


export class Quote {
  constructor(data) {
    this.content = data.content
    this.author = data.author
  }

  get Template() {
    return /*html*/ `
    <div class="col-md-6 m-auto text-shadow">
        <p class="text-center">${this.content}</p>
        <p class="text-center on-hover"><strong>- ${this.author}</strong></p>
      </div>
    `
  }
}