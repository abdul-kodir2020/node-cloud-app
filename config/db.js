const mongoose = require("mongoose")

const dbConnect = async () =>{
    await mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("DB connectée")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = dbConnect