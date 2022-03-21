import DOMpopHandler from './DOMHandler';
import { container, button } from './app';

// const container = document.getElementsByClassName('container');
// const button = document.getElementsByClassName('btn');
const testDOM = new DOMpopHandler(container, button);

test('Method DOMpopHandler.create() should create a DIV-element in DOM', () => {
  testDOM.create();
  expect(container.lastElementChild.className).toBe('btn-popover-container');
});
