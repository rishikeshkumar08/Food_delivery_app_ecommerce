const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();
const url = process.env.DB;
mongoose.connect(url, {
    family: 4
})
.then(db => console.log("Connected to database.."))
.catch(err => console.log(`resused to connect: ${err}`))
    