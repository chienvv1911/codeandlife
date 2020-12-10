const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server backend is running in PORT ${PORT}`))

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},(err) => {
    if(err) return console.error(err);
    console.log('MONGODB is connected')
})
