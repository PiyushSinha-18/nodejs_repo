// express require
const express = require("express");
const app = express();

// dot env file adding into server file so that e can use private data
const env = require('dotenv');
env.config();

// connection establish between nodejs server and mongodb server
const mongoConnection = require('./db');
mongoConnection();

// access data by using body-praser
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

const PORT = process.env.PORT || 30001;
app.listen(PORT, () => {
    // mongoConnection();
    console.log("Server is active");
})