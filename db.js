const mongoose = require('mongoose');

const mongo_URL = process.env.local_mongo_URL;

// const mongo_Connection = mongoose.connect(mongo_URL).then(() => {
//     console.log("Connection establish ")
// }).catch((e) => {
//     console.log("Connection failed ", e)
// })

const mongo_Connection = async () => {
    try {
        await mongoose.connect(mongo_URL);
        console.log("Connection establish successfully ")
    } catch (error) {
        console.log("Server error occured please try again later ")
    }
}

module.exports = mongo_Connection;