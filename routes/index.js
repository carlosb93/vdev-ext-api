const express = require('express')
const router = express.Router()
const depositsRoutes = require('../apiServices/deposit/routes')
const extractionsRoutes = require('../apiServices/extraction/routes')

router.use('/deposits', depositsRoutes)
router.use('/extractions', extractionsRoutes)
router.get("/", (req, res) => {
    res.send("System working");
});

module.exports = router
