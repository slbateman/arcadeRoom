import express from "express"
import userRoutes from "./userRoutes.js"
import chatroomRoutes from "./chatroomRoutes.js"

const router = express()

router.use('/users', userRoutes)
router.use('/chatrooms', chatroomRoutes)

export default router