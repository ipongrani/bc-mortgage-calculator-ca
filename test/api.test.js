import request from 'supertest';
import { expressApp, expressServer } from '../api/server';




describe('Express Server', () => {


    afterAll(async () => {
        await expressServer.close();
        jest.clearAllTimers();
    });


    it('should receive "Hello World" in json on GET /', async () => {
        console.log('+++++++ expressApp: ', expressApp)
        console.log('+++++++ expressServer: ', expressServer)
        const response = await request(expressApp).get('/hello');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            "hello": "world"
        });
    });


})