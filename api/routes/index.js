const router = require("express").Router()

const userRouter = require("./user.router.js")

router.use("/user", userRouter)

module.exports = router
