import DOMpopHandler from './DOMHandler';

const container = document.querySelector('.container');
const button = document.querySelector('.btn');
// const container = document.getElementsByClassName('container');
// const button = document.getElementsByClassName('btn');

const addPopover = new DOMpopHandler(container, button);

document.addEventListener('click', (event) => {
  if (event.target === button) {
    addPopover.create();
    addPopover.colorChanger();
  }
});

export { container, button };
