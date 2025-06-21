import mongoose from 'mongoose';

// Connect MongoDB 
//7:41:56

const connectDB = async ()=>{
    mongoose.connection.on('connected',()=> console.log("mongoDB connected"))
    await mongoose.connect(`${process.env.MONGODB_URI}/LMS`)
}

export default connectDB