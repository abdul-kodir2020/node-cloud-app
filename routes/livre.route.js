const { getLIvres, setLivre } = require("../controllers/livre.controller")

const router = require("express").Router()

router.get("/",getLIvres)
router.post("/create",setLivre)

module.exports = router
