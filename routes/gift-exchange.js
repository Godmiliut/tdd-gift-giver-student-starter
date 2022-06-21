const express= require("express")
const router = express.Router()
const GiftExchange = require("../models/gift-exchange")


router.post("/pairs", async (req, res, next) => {
    try{
        const names= await GiftExchange.pairs(req.body.names);
        res.status(200).send(names)
    } catch(err) {
        next(err)
    }
    
})

router.post("/traditional", async (req, res, next) => {
    try{
        const names= await GiftExchange.traditional(req.body.names);
        res.status(200).send(names)
    } catch(err) {
        next(err)
    }
})

module.exports = router;