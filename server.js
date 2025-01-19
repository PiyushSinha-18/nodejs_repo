// express require
const express = require("express");
const app = express();

// dot env file added into server file so that we can access sensitive data
const env = require('dotenv');
env.config();

// connection establish between nodejs server and mongodb server by mongoose driver
const mongoConnection = require('./db');
mongoConnection();

// access front-end data by using body-praser because it helps us to fetch the data from the body
const body_Parser = require('body-parser');
app.use(body_Parser.json());

// Person routes 
const person_route = require('./Routes/Person_routes')
app.use('/person', person_route);

app.get('/hello', (req, res) => {
    res.send("Hello Piyush")
})
app.get('/', (req, res) => {
    res.send("Hello Server")
})

const PORT = process.env.local_PORT || 3100;
app.listen(PORT, () => {
    // mongoConnection();
    console.log("Server is active");
})