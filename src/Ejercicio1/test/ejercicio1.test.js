const isPalindrome = require('../ejercicio1');

test('isPalindrome devuelve "Es palíndroma" para una frase palíndroma', () => {
  expect(isPalindrome('Anita lava la tina')).toBe('Es palíndroma');
});

test('isPalindrome devuelve "No es palíndroma" para una frase no palíndroma', () => {
  expect(isPalindrome('Hola mundo')).toBe('No es palíndroma');
});

test('isPalindrome devuelve "Es palíndroma" para una frase vacía', () => {
  expect(isPalindrome('')).toBe('La palabra no puede ser vacía');
});

test('isPalindrome devuelve "Es palíndroma" para una sola letra', () => {
  expect(isPalindrome('a')).toBe('Es palíndroma');
});
