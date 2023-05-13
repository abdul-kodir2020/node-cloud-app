const livreModel = require("../models/livre.model")

module.exports.getLIvres = async (req,res) =>{
    const livres = await livreModel.find()
    res.json(livres)
}

module.exports.setLivre = async (req, res) => {
    console.log(req.body)
    const newLivre = new livreModel({
        name: req.body.name,
        author: req.body.author,
        publicationDate: req.body.publicationDate
    })

    try {
        await newLivre.save()
        res.json({message: "success", livre: newLivre})
    } catch (err) {
        res.status(400).json({error: err})
    }
    
}