const express = require('express');
const { hexToRgb } = require('./converter');

const app = express();
const port = 3000;

/**
 * API Route: Converts hex color to rgb.
 * Expects a query parameter 'hex'.
 * * @name GET /hex-to-rgb
 * @param {string} req.query.hex - The hex color code to convert.
 * @returns {object} JSON object with hex and rgb values.
 */
app.get('/hex-to-rgb', (req, res) => {
  const hex = req.query.hex;

  try {
    const rgb = hexToRgb(hex);
    res.status(200).json({
      original: hex,
      rgb: rgb
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
});

// Start server only if NOT in test mode
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

module.exports = app;