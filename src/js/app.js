import DOMpopHandler from './DOMHandler';

const container = document.querySelector('.container');
const button = container.querySelector('.btn');

const addPopover = new DOMpopHandler(container, button);

document.addEventListener('click', (event) => {
  if (event.target === button) {
    addPopover.create();
    addPopover.colorChanger();
  }
});
