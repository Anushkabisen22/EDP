const express = require('express');
const dotenv  =require('dotenv');
const connectDB = require('./config/db');
dotenv.config({path: './config/config.env'});

const app = express();
var cors = require('cors')

app.use(cors()) 
app.use(express.json());
const bootcamps = require('./routes/bootcamp');
const course = require('./routes/course');
const Users= require('./routes/Users');
app.use('/api/v1/bootcamp',bootcamps);
app.use('/api/v1/course', course);
app.use('/api/v1/Users',Users);
const PORT = process.env.PORT || 3000;
const { updateBootcampAttendance } = require('./controller/bootcamps');

const start = async () => {
    try{
        app.listen(PORT,() => {
            console.log(`Server listening ${PORT}`);
            updateBootcampAttendance();
        });
        await connectDB(process.env.MONGO_URL);
    }catch(err){
        console.log(err);
    }
};

start();