const express = require('express')
const app = express()

const dotenv = require('dotenv').config()
const port = process.env.PORT  

const mongoose = require('mongoose')
const helmet = require('helmet')
const cors = require('cors')

const authUser = require('./routes/authUser')
const authAdmin = require('./routes/authAdmin')

app.use(helmet())
app.use(cors())
app.use(express.json())

//routes
app.use("/auth/user", authUser);
app.use("/auth/admin", authAdmin);


//connecting Db
mongoose.connect(process.env.CONNECTION_STRING,
    {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }).then(()=>{
        console.log('Db connected successfully')
    }).catch((error)=>{
        console.log(error)
    })

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})