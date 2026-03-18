const { tambah, kurang, kali } = require('./math');

test('tambah 2 + 3 harusnya 5', () => {
  expect(tambah(2, 3)).toBe(5);
});

test('kurang 5 - 3 harusnya 2', () => {
  expect(kurang(5, 3)).toBe(2);
});

test('kali 3 x 4 harusnya 12', () => {
  expect(kali(3, 4)).toBe(12);
});