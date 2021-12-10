require('dotenv').config()

const express = require('express')
const app =  express()
const mongoose = require('mongoose')
const cors = require('cors')

const PORT = 5000

const authRouter = require('./routers/auth')
const postRouter = require('./routers/post')

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@merndemo.gjvma.mongodb.net/MERNdemo?retryWrites=true&w=majority`)
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

connectDB()

app.use(express.json())
app.use(cors())

app.use('/api/auth', authRouter)
app.use('/api/posts', postRouter)

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})

