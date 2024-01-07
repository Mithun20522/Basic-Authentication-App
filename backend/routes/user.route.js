import express from "express";

const userRouter = express.Router()

userRouter.get('/', (req , res) => {
    res.json({
        message: 'API is working fine from route.'
    })
})

export default userRouter