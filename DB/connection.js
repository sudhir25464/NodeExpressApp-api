const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () =>  {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Successfully connected to the database');
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
        process.exit(1); // Exit process with failure
    });
}


module.exports = connectDB;
// Optional: Listen to events
