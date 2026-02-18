const { hexToRgb } = require('../src/converter');

describe('Unit Test: hexToRgb', () => {
  test('converts 6-digit hex correctly', () => {
    expect(hexToRgb('#ffffff')).toEqual({ r: 255, g: 255, b: 255 });
    expect(hexToRgb('000000')).toEqual({ r: 0, g: 0, b: 0 });
  });

  test('converts 3-digit hex correctly', () => {
    expect(hexToRgb('#f00')).toEqual({ r: 255, g: 0, b: 0 });
  });

  test('throws error on invalid input', () => {
    expect(() => hexToRgb('zzzzzz')).toThrow('Invalid Hex format');
    expect(() => hexToRgb(123)).toThrow('Input must be a string');
  });
});