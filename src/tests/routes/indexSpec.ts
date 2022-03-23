import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('Test api endpoint responses', () => {
    it('redirects from the api endpoint', async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(302);
    });
});
