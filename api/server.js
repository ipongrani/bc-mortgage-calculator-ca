import express from 'express';
const app = express();
const port = 3000;

app.use(express.json());


// GET
app.get('/', async (req, res) => {
    return res.status(200).json({hello: 'world'});
});


// Start the server
const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


// Export the server and app for test
export const expressApp = app;
export const expressServer = server
