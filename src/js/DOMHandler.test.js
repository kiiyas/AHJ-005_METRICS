import DOMpopHandler from './DOMHandler';

const container = document.querySelector('.container');
const addPopover = new DOMpopHandler();

test('Method DOMpopHandler.create() should create a DIV-element in DOM', () => {
  addPopover.create(); // ? не может выполнить это, отсюда не видит DOM
  expect(container.lastElementChild.className).toBe('btn-popover-container');
});
