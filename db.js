const mongoose = require('mongoose');

// const mongo_URL = process.env.local_mongo_URL; // local_url
// const mongo_URL = process.env.online_mongo_URL; // remote_url

// const mongo_Connection = mongoose.connect(mongo_URL).then(() => {
//     console.log("Connection establish ")
// }).catch((e) => {
//     console.log("Connection failed ", e)
// })

const mongo_Connection = async () => {
    try {
        // const connection = await mongoose.connect(mongo_URL);
        const connection = await mongoose.connect(process.env.URL);
        console.log("Connection establish successfully ")
    } catch (error) {
        console.log("Server error occured please try again later ", error)
    }
}

module.exports = mongo_Connection;