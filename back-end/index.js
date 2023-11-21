import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


mongoose.connect(process.env.MONGO).then(() => {
    console.log("connected to db")
}) .catch ((err) => {
    console.log("an error occured")
})

const app = express();

app.listen(3000, () => {
    console.log("server running on port 2000");
})