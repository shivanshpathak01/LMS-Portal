import User from "../models/User.js"

// Get user data
export const getUserData = async (req,res)=>{
    try {
        const userId = req.auth.userId
        const user = await User.findById(userId)
        if(!user){
            return res.json({success:false, message:"User Not Found"})
        }
        res.json({success:true,user})
    } catch (error) {
        res.json({success:false, message: error.message})
    }
} 

// User Enrolled Courses with Lecture links 

export const userEnrolledCourses = async(req,res)=>{
    try {
        const userId = req.auth.userId
        const userData = await User.findById(userId).populate('enrolledCourses')
        res.json({success:true,enrolledCourses : userData.enrolledCourses})
    } catch (error) {
        res.json({success:false, message:error.message})
    }
}