const express = require("express")
const dbConnect = require("./config/db")
const app = express()
const dotenv = require("dotenv").config()
const cors = require("cors")
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // for some legacy browsers
  }
dbConnect()

app.use("/livres/",require("./routes/livre.route"))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors(corsOptions))

try {
    app.listen(process.env.PORT,()=>{
        console.log("serveur démarré")
    })
} catch (error) {
    console.log(error)
}


