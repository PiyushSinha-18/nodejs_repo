const express = require('express')
const router = express.Router();

// connection establish with mongodb server to do curd operation
const person_Model = require('../Models/Person');

router.post('/', async (req, res) => {
    try {
        const Person_data = req.body;
        console.log("Person_data ", Person_data);

        const new_Person = new person_Model(Person_data);
        console.log("new_Person ", new_Person)

        const response = await new_Person.save();

        console.log("response ", response);

        res.send(response).status(200);

    } catch (error) {
        console.log(error);
        res.send("Server failed").status(500);
    }
})

router.get('/', async (req, res) => {
    try {
        const Person_data = await person_Model.find();
        res.send(Person_data).status(200);
    } catch (error) {
        console.log(error);
        res.send("Server failed").status(500);
    }
})

module.exports = router;