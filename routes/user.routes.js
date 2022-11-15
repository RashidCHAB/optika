import { Router } from "express";
import userControllers from "../controllers/user.controllers.js"


const router = Router()
router.post('/', userControllers.addUser)
router.get('/:id', userControllers.getUser)
router.patch('/put/:id', userControllers.putToBasket)
router.patch('/pay/:id', userControllers.payForBasket)


export default router