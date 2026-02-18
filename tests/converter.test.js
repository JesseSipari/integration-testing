/**
 * @fileoverview Unit tests for hexToRgb converter function.
 * Tests cover valid inputs, edge cases, and error handling.
 */

const { hexToRgb } = require('../src/converter');

describe('Unit Test: hexToRgb', () => {
  
  /**
   * Test: 6-digit hexadecimal color conversion
   * Should correctly convert 6-digit hex strings to RGB objects
   */
  test('converts 6-digit hex correctly', () => {
    expect(hexToRgb('#ffffff')).toEqual({ r: 255, g: 255, b: 255 });
    expect(hexToRgb('000000')).toEqual({ r: 0, g: 0, b: 0 });
  });

  /**
   * Test: 3-digit hexadecimal shorthand conversion
   * Should expand and convert 3-digit hex notation (e.g., #f00 -> #ff0000)
   */
  test('converts 3-digit hex correctly', () => {
    expect(hexToRgb('#f00')).toEqual({ r: 255, g: 0, b: 0 });
  });

  /**
   * Test: Error handling for invalid input
   * Should throw appropriate errors for:
   * - Non-hexadecimal characters
   * - Non-string input types
   */
  test('throws error on invalid input', () => {
    expect(() => hexToRgb('zzzzzz')).toThrow('Invalid Hex format');
    expect(() => hexToRgb(123)).toThrow('Input must be a string');
  });
});