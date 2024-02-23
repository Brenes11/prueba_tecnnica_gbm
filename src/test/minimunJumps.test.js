const minimumJumps = require('../ejercicio3');

describe('minimumJumps Function', () => {
  test('Número pequeño', () => {
    expect(minimumJumps([3])).toEqual([2]);
  });

  test('Número que requiere ajuste', () => {
    expect(minimumJumps([4])).toEqual([3]);
  });

  test('Caso con múltiples números', () => {
    expect(minimumJumps([3, 4])).toEqual([2, 3]);
  });

  test('Número grande', () => {
    expect(minimumJumps([50])).toEqual([11]);
  });

  test('Manejo de número negativo', () => {
    const testCases = [-2, -4];
    const expectedOutput = "El testCase no puede ser negativo";
    expect(minimumJumps(testCases)).toBe(expectedOutput);
  });
});
