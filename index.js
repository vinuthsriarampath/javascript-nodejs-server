//import the express module
import express from 'express';

//create an express application instance
const app = express();

//define the port you need to run the server
const port = 8080;

// define a simple get route
app.get('/', (req, res) => {
    res.send('Hello World');
});

//start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});