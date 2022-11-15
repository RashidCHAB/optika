import { Router } from "express";
import drugsControllers from "../controllers/drug.controllers.js"


const router = Router()
router.post('/', drugsControllers.addDrug)
router.get('/', drugsControllers.getDrugs)


export default router