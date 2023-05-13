const mongoose = require("mongoose")

const livreSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require
        },
        author: {
            type: String,
            require
        },
        publicationDate: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("livreModel",livreSchema)