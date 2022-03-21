import routes from "../../routes";
import supertest from "supertest";

const request = supertest(routes);
describe('Test endpoint responses', () => {
    it('gets the image endpoint', async () => {
        const response = await request.get('/image');
        expect(response.status).toBe(200);
    })
    it('redirects from the api endpoint', async () => {
        const response = await request.get('/');
        expect(response.status).toBe(302);
    })
});
