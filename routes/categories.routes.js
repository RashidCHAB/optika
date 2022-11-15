import { Router } from "express";
import categoriesControllers from "../controllers/category.controllers.js"


const router = Router()
router.post('/', categoriesControllers.addCategory)


export default router