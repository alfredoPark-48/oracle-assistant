const request = require('supertest');
const app = require('./src/server/index.js');

describe('Test root path', () => {
    it('should be to defined', async () => {
        expect(app).toBeDefined();
    }) 
})
