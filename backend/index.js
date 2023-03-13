// const mongoose = require('mongoose')
// const cors = require('cors')
// const express = require('express')

import mongoose from "mongoose"
import cors from "cors"
import express from "express"
import * as dotenv from 'dotenv'
import postsRoute from './routes/posts.js'


const app = express()
dotenv.config()

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

//mongodb+srv://xuanlong22000:Xuanlong640@cluster0.m584mzj.mongodb.net/?retryWrites=true&w=majority

const CONNECTION_URL = 'mongodb://0.0.0.0:27017/socialCard'

const PORT = process.env.PORT || 5000


app.use('/posts', postsRoute)

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`) }))
    .catch((error) => console.log(error))

