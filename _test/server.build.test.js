import request from 'supertest';
import { expressApp, expressServer } from '../api/dist/api.bundle.cjs';


describe('Express Server', () => {


    afterAll(async () => {
        await expressServer.close();
        jest.clearAllTimers();
    });


    it('should receive "Hello World" in json on GET /', async () => {
        const response = await request(expressApp).get('/');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            "hello": "world"
        });
    });


})