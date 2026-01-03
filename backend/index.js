import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import taskRoutes from './routes/task.routes.js'

const app=express()
dotenv.config();

const PORT = process.env.PORT || 8080

app.use(cors({
    origin:'http://localhost:5173',
    credentials:true

}))

app.use(express.json())


app.use("/api/tasks", taskRoutes);


app.get('/',(req,res)=>{
    res.send('Hello ')
})


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
    connectDB()
})