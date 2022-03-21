import DOMpopHandler from './DOMHandler';

const button = document.querySelector('.btn');

const addPopover = new DOMpopHandler();

document.addEventListener('click', (event) => {
  if (event.target === button) {
    addPopover.create();
    addPopover.colorChanger();
  }
});
