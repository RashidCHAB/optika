import { Router } from "express";
import categoriesControllers from "../controllers/category.controllers.js"


const router = Router()
router.post('/admin/', categoriesControllers.addCategory)
router.patch('/admin/:id', categoriesControllers.updateCategory)
router.get('/admin/', categoriesControllers.getCategories)
router.delete('/admin/:id', categoriesControllers.deleteCategory)


export default router