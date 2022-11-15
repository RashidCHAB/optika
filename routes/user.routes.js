import { Router } from "express";
import userControllers from "../controllers/user.controllers.js"


const router = Router()
router.post('/', userControllers.addUser)
router.delete('/admin/:id')
router.get('/:id', userControllers.getUser)
router.patch('/put/:id', userControllers.putToBasket)
router.patch('/pay/:id', userControllers.payForBasket)
router.patch('/clear/:id', userControllers.clearBasket)
router.patch('/remove/:id', userControllers.removeDrugFromBasket)
router.patch('/up/:id', userControllers.upBalance)


export default router