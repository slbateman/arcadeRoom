import express from "express"
import userRoutes from "./userRoutes.js"
import chatroomRoutes from "./chatroomRoutes.js"
import pmRoutes from "./pmRoutes.js"

const router = express()

router.use('/users', userRoutes)
router.use('/chatrooms', chatroomRoutes)
router.use('/pms', pmRoutes)

export default router