import DOMpopHandler from './DOMHandler';

document.body.innerHTML = `
  <div class="container">
    <button type="button" class="btn" data-header="Header of popover" data-content="Vivamus sagittis el augue laoreet rutrum faucibus.">
      Click to toggle popover
    </button>
  </div> 
`;

const container = document.querySelector('.container');
container.style.position = 'relative';

const addPopover = new DOMpopHandler();

test('Method DOMpopHandler.create() should create popover in DOM', () => {
  addPopover.create();
  expect(container.lastElementChild.className).toBe('btn-popover-container');
});

test('Method DOMpopHandler.create() should remove the previously created popover from DOM', () => {
  addPopover.create();
  expect(container.lastElementChild.className).toBe('btn');
});
