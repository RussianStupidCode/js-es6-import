export default class Button {
  #El;
  #listeners;

  constructor(className, textContent) {
    this.#El = document.createElement('button');
    this.#El.classList.add(className);  
    this.#El.textContent = textContent;

    this.#listeners = [];

    this.#El.addEventListener('click', (event) => {
      this.click(event);
    });
  }

  addClickListener(callback) {
    this.#listeners.push(callback);
  }

  click(event) {
    event.preventDefault();
    this.#listeners.forEach((o) => o.call(null));
  }

  bind(containerEl) {
    containerEl.insertAdjacentElement('beforeEnd', this.#El);
  }
}