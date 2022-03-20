import puppetteer from 'puppeteer';
// import { fork } from 'child_process';
const childProcess = require('child_process');

jest.setTimeout(30000);
describe('Creditcard validator service', () => {
  let browser = null;
  let page = null;
  let server = null;

  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    server = await childProcess.fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', () => {
        reject();
      });
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      /* headless: true,
      slowMo: 100,
      devtools: false, */
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  describe('Popover toggle button', () => {
    test('open browser', async () => {
      await page.goto(baseUrl);
    });

    test('should show a popover if it wasn-t shown.', async () => {
      await page.goto(baseUrl);
      const button = await page.$('.btn');
      button.click();
      await page.waitForSelector('.btn-popover-container');
    });
  });
});
