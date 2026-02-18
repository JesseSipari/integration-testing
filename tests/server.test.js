/**
 * @fileoverview Integration tests for hex-to-rgb API endpoint.
 * Tests HTTP responses, status codes, and error handling.
 */

const request = require('supertest');
const app = require('../src/server');

describe('Integration Test: GET /hex-to-rgb', () => {

  /**
   * Test: Successful conversion with valid hex color
   * @description Sends a valid hex color and expects:
   * - HTTP 200 status
   * - JSON response
   * - Correct RGB conversion
   */
  test('returns 200 and JSON for valid hex', async () => {
    // Send request with URL-encoded hex color (#00ff00)
    const response = await request(app).get('/hex-to-rgb?hex=%2300ff00');
    
    // Expect successful HTTP status
    expect(response.statusCode).toBe(200);
    
    // Expect correct RGB values for green (#00ff00)
    expect(response.body.rgb).toEqual({ r: 0, g: 255, b: 0 });
  });

  /**
   * Test: Error handling for invalid hex input
   * @description Sends invalid hex format and expects:
   * - HTTP 400 Bad Request status
   * - Error message in response body
   */
  test('returns 400 Bad Request for invalid hex', async () => {
    // Send request with invalid hex format
    const response = await request(app).get('/hex-to-rgb?hex=invalid');
    
    // Expect Bad Request status
    expect(response.statusCode).toBe(400);
    
    // Expect error property in response
    expect(response.body).toHaveProperty('error');
  });
  
});