import { Router } from "express";
import drugsControllers from "../controllers/drug.controllers.js"


const router = Router()
router.post('/admin/', drugsControllers.addDrug)
router.get('/admin/', drugsControllers.getDrugs)
router.get('/', drugsControllers.getDrugs)
router.get('/byId/:id', drugsControllers.getDrugById)
router.get('/category/:id', drugsControllers.getDrugsByCategory)
router.patch('/admin/:id', drugsControllers.updateDrug)
router.delete('/admin/:id', drugsControllers.deleteDrug)

export default router