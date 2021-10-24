class NotComputer {
  constructor() {
    this.blockText = this.template();
  }

  template() {
    return `
    <section class="notComputer block">
      <p class="notComputer__text block__text">${texts.notComputer.first}</p>
    </section>
    `;
  }

  addOnPage() {
    document.body.insertAdjacentHTML('afterbegin', this.blockText);
  }
}