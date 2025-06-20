import mongoose from 'mongoose';

// Connect MongoDB 

const connectDB = async ()=>{
    mongoose.connection.on('connected',()=> console.log("mongoDB connected"))
    await mongoose.connect(`${process.env.MONGODB_URI}/LMS`)
}

export default connectDB