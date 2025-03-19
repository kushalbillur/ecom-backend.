const express = require('express')
const { route } = require('./authRoutes')
const { addToCart, getCart, removeFromCart } = require('../controllers/cartController')
const authMiddleware = require('../middleware/authMiddleware')

const cartrouter = express.Router()
cartrouter.post("/add",authMiddleware, addToCart)
cartrouter.get("/",getCart)
cartrouter.post("/remove", removeFromCart)

module.exports= cartrouter