const { tambah, kurang } = require('./math');

test('tambah 2 + 3 harusnya 5', () => {
  expect(tambah(2, 3)).toBe(5);
});

test('kurang 5 - 3 harusnya 2', () => {
  expect(kurang(5, 3)).toBe(2);
});