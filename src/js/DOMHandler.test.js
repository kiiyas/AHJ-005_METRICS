import DOMpopHandler from './DOMHandler';

const container = document.querySelector('.container');
const button = document.querySelector('.btn');
const testDOM = new DOMpopHandler(container, button);

test('Method DOMpopHandler.create() should create a DIV-element in DOM', () => {
  testDOM.create();
  expect(container.lastElementChild.className).toBe('btn-popover-container');
});
