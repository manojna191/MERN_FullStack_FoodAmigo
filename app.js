const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
const bodyParser  = require('body-parser')
const cors = require('cors')
dotenv.config()
const app = express()


// mongoose.connect("mongodb://localhost:27017/FoodAmigoDB", {useNewUrlParser: true});
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


app.use((err,req,res,next)=>{
    const status = err.status || 500
    const message = err.message ||"Something went wrong"
    return res.status(status).json({
        success: false,
        status: status,
        message: message
    })
})

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(cors());

const valueRoutes = require('./routes/value')

app.use('/', valueRoutes)

app.listen(9000, ()=>{
    console.log("The server is running in 9000")
})

