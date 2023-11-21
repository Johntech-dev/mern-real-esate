import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';

dotenv.config()

mongoose.connect("mongodb+srv://johnayomide50:Matthew12@mern-real-estate.tpul0gd.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("Connected to mongodb");
}) .catch ((err) => {
    console.log("an error occured");
})

const app = express();

app.listen(3000, () => {
    console.log("server is running on port 3000")
})

app.use('/back-end/user', userRouter)