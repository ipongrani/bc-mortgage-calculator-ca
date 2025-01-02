import express from 'express';
import core from '../core/dist/core.bundle.js';

const app = express();
const port = 3000;

app.use(express.json());


// GET
app.get('/', async (req, res) => {
    console.log('====== core: ', core);
    return res.status(200).json({hello: "world"});
});


// Start the server
const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


// Export the server and app for test
export const expressApp = app;
export const expressServer = server
