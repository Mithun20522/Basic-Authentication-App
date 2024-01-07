import express from 'express'
import { authController } from '../controllers/auth.controller.js';

const authRouter  = express.Router();

authRouter.post('/register', authController)


export default authRouter