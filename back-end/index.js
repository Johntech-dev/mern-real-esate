import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to mongodb")
}) .catch ((err) => {
    console.log("an error occured");
})

const app = express();

app.listen(3000, () => {
    console.log("server is running on port 5000")
})
