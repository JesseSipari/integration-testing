/**
 * Converter module for color formats.
 * @module converter
 */

/**
 * Converts a hexadecimal color code to an RGB object.
 * Supports both 6-digit (e.g., "#ffffff") and 3-digit (e.g., "#fff") formats.
 *
 * @param {string} hex - The hexadecimal string (e.g., "#FF5733" or "FF5733").
 * @returns {object} An object containing r, g, and b integer values.
 * @throws {Error} Throws an error if input is not a string or has invalid format.
 * * @example
 * Returns { r: 255, g: 0, b: 0 }
 * hexToRgb("#FF0000");
 */
function hexToRgb(hex) {
  if (typeof hex !== 'string') {
    throw new Error("Input must be a string");
  }

  // Remove '#' if present
  hex = hex.replace(/^#/, '');

  // Validate format (3 or 6 hex characters)
  const isValid = /^[0-9A-Fa-f]{3}$|^[0-9A-Fa-f]{6}$/.test(hex);
  if (!isValid) {
    throw new Error("Invalid Hex format");
  }

  // Expand short format (e.g. "03F" -> "0033FF")
  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('');
  }

  // Parse values
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
}

module.exports = { hexToRgb };