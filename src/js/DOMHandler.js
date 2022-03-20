/* eslint-disable max-len */
export default class DOMpopHandler {
  constructor(container, button) {
    this.container = container;
    this.button = button;
  }

  create() {
    if (!document.querySelector('div.container div.btn-popover-container')) {
      this.btnPopover = document.createElement('div');
      this.btnPopover.classList.add('btn-popover-container');
      this.btnPopover.innerHTML = `<div class="btn-popover-title">${this.button.dataset.header}</div>
    <div class="btn-popover-body">${this.button.dataset.content}</div>`;
      this.button.offsetParent.appendChild(this.btnPopover);
      this.btnPopover.style.bottom = `${this.button.offsetHeight + 20}px`;
    } else {
      this.container.removeChild(this.btnPopover);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  colorChanger() {
    this.r = this.getRandomInt(256);
    this.g = this.getRandomInt(256);
    this.b = this.getRandomInt(256);
    this.color = `rgb(${this.r}, ${this.g}, ${this.b})`;
    this.button.style.background = this.color;
  }
}
