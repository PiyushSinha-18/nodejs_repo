const mongoose = require('mongoose')
const mongo_URL = "mongodb://127.0.0.1:27017/Personal_db";

// const mongo_Connection = mongoose.connect(mongo_URL).then(() => {
//     console.log("Connection establish ")
// }).catch((e) => {
//     console.log("Connection failed ", e)
// })

const mongo_Connection = () => {
    try {
        const connection = mongoose.connect(mongo_URL).then(() => {
            console.log("Connection establish ")
        }).catch((e) => {
            console.log("Connection failed ", e)
        })
    } catch (error) {
        console.log("Server error occured please try again later " + error)
    }
}

module.exports = mongo_Connection;