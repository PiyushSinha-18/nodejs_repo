// express require
const express = require("express");
const app = express();

// connection establish between nodejs server and mongodb server
const mongoConnection = require('./db');

// access data by using body-praser
const body_Parser = require('body-parser');
app.use(body_Parser.json());

// Person routes 
const person_route = require('./Routes/Person_routes')
app.use('/person', person_route);

app.get('/hello', (req, res) => {
    console.log("Hello");
    res.send("Hello Piyush")
})

app.get('/', (req, res) => {
    res.send("Hello Server")
})

app.listen(3001, () => {
    console.log("Server is active");
})