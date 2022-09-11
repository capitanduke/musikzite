import userRouter from './routes/userRoute.js'
import mongoose from 'mongoose'
import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = 5000
app.enable('trust proxy')

/* app.use(express.json())
app.use(express.urlencoded({ extended: true })) */

app.use(cors())

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/musikzite', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function () {
  console.log('Connected successfully')
})

// Configuring body parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use('/api/users', userRouter)

app.get('/details', (req, res) => {
  res.send({ data: 'Hello World, from express' })
})

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
)
