const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./db/db');
const bodyParser = require('body-parser');
const apiRouter = require('./Routes/api/apiRoute');
const userRouter = require('./Routes/user/userRoute');

dotenv.config();
const app = express();
const port = process.env.PORT;

//middelwares
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


app.use('/api', apiRouter);
app.use('/user', userRouter);

app.get("/", (req,res)=>{
    res.send({data:{"name": "Rishik", "age": 23}});
})



app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})


