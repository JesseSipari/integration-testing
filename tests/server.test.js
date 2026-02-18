const request = require('supertest');
const app = require('../src/server');

describe('Integration Test: GET /hex-to-rgb', () => {

  test('returns 200 and JSON for valid hex', async () => {
    // We send a request to our Express app
    const response = await request(app).get('/hex-to-rgb?hex=%2300ff00');
    
    // We expect the status to be 200 (OK)
    expect(response.statusCode).toBe(200);
    
    // We expect the body to contain the correct RGB object
    expect(response.body.rgb).toEqual({ r: 0, g: 255, b: 0 });
  });

  test('returns 400 Bad Request for invalid hex', async () => {
    // We send an invalid hex code
    const response = await request(app).get('/hex-to-rgb?hex=invalid');
    
    // We expect the status to be 400 (Bad Request)
    expect(response.statusCode).toBe(400);
    
    // We expect an error message in the body
    expect(response.body).toHaveProperty('error');
  });
  
});