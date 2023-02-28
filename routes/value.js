const express = require('express')
const { postValue, getValue } = require('../controllers/value')
const router = express.Router()

router.post("/value", postValue)

router.get("/value", getValue)

module.exports = router