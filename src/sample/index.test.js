/* eslint-disable no-undef */
import fs from 'fs';
import path from 'path';

describe('index.html', () => {
  it('Hello World', () => {
    const index = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');
    document.querySelector('html').innerHTML = index;
    expect(document.querySelector('h1').innerHTML).toBe('Users');
  });
});
