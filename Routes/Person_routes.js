const express = require('express')
const router = express.Router();
const person_Model = require('../Models/Person');

router.post('/', async (req, res) => {
    try {
        const Person_data = req.body;
        // console.log("Person_data ", Person_data);

        const new_Person = new person_Model(Person_data);
        // console.log("new_Person ", new_Person)

        const response = await new_Person.save();

        // console.log("response ", response);

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

router.get('/profile', async (req, res) => {
    res.send("Welcome to Person Database");
})

router.get('/:person_name', async (req, res) => {
    try {
        const person_Name = req.params.person_name;
        const response = await person_Model.find({ fname: person_Name });
        res.json(response).status(200);
    } catch (error) {
        console.log(error);
        res.send("Server failed").status(500);
    }
})

router.put('/:personId', async (req, res) => {
    try {
        const new_Data = req.body;
        const personId = req.params.personId;
        const response = await person_Model.findByIdAndUpdate(personId, new_Data, {
            new: true,
            runValidators: true,
        });
        if (!response) {
            console.log("Person not found")
            return res.status(404).json({ error: "Person not found" })
        }
        res.status(200).json(response);

    } catch (error) {
        console.log(error);
        res.send("Server failed").status(500);
    }
})

router.delete('/:personId', async (req, res) => {
    try {
        const personId = req.params.personId;
        const response = await person_Model.findByIdAndDelete(personId);
        if (!response) {
            console.log("Person not found")
            return res.status(404).json({ error: "Person not found" })
        }
        console.log(response);
        res.status(200).json("Person data deleted");

    } catch (error) {
        console.log(error);
        res.send("Server failed").status(500);
    }
})


module.exports = router;