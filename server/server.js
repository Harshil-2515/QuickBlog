import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js'; // remember to write full with extension
import adminRouter from './routes/adminRoutes.js';

const app = express();

await connectDB()

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.get("/", (req,res)=> res.send("API is working"))
app.use("/api/admin", adminRouter)

// If we have port in env it will use that or else 3000
const PORT = process.env.PORT || 3000;

// Lets start the server
app.listen(PORT, ()=>{
    console.log("Server is running on port: " + PORT)
})

export default app;