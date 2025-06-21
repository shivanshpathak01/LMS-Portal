import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkwebhooks } from './controllers/webhooks.js'

const app = express()

// Connect to Database
await connectDB()

// Middlewares

app.use(cors())

// Routes
app.get('/',(req,res)=>res.send("API working!!!"))
app.post('/clerk', express.json(), clerkwebhooks)
// app.post('/clerk', express.raw({ type: 'application/json' }), clerkwebhooks)

//Port 
const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
