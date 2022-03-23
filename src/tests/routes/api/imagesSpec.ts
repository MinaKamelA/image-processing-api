import supertest from 'supertest';
import app from '../../../index';

const request = supertest(app);

describe('Test Image endpoint responses', () => {
    it(`should throw error 404`, async () => {
        const response = await request.get('/api/image?name=iceland');
        expect(response.status).toBe(404);
    });
    it(`should run without errors`, async () => {
        const response = await request.get('/api/image?name=fjord');
        expect(response.status).toBe(200);
    });
});
