import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();
const url = process.env.MONGO_URI;

mongoose.connect(url,{
    
}).then(()=>{
    console.log("connection is successful..");
}).catch((error)=>{
    console.log(error);
})

export default mongoose;