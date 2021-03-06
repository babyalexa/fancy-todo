const router = require('express').Router()
const todoRoutes = require('./todoRoutes')
const userRoutes = require('./userRoutes')
router.use(userRoutes)
router.use('/todos', todoRoutes)

module.exports = router
