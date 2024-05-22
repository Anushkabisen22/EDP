// const mongoose = require('mongoose');
// mongoose.set('strictQuery', false);

// const connectDB = async (url) => {
//     mongoose.connect(url,{
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     });
//     console.log("Connection is complete with Database.");
// }



const mongoose =require('mongoose');
require('dotenv').config();

const mongoDB=async()=>{
    try{
        // const connect= await mongoose.connect(process.env.URL);
        const connect=await mongoose.connect("mongodb://127.0.0.1:27017/edp")   
        console.log('connected');
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
    
}
module.exports=mongoDB;