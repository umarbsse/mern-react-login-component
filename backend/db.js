const mongoose = require('mongoose');
const db_name = "react_user_management"
const mongoURI ="mongodb://localhost:27017/"+db_name
const connectToMongo = async ()=>{
    await mongoose.connect(mongoURI)
    console.log("connected to mongoose")
}
module.exports = connectToMongo; 