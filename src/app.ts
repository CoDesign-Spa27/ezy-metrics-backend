import express from "express";
import apiRoute from './route/route'
import './config/database'
import connectDB from "./config/database";
 
connectDB();
const app = express();
app.use(express.json())


app.use('/api',apiRoute)

app.listen(3000,()=>{
    console.log("Server started")
})

