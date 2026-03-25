const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = async () => {
   await mongoose.connect(process.env.MONGOOSE_uri)
    .then(() => console.log('MongoDB connected'))

}
module.exports = connectDB;
