import { Router } from "express";
import basketRoutes from "./basket.routes.js"
import categoriesRoutes from "./categories.routes.js"
import drugsRoutes from "./drugs.routes"
const router = Router()


router.use("/drugs", drugsRoutes )
router.use("/categories", categoriesRoutes)
router.use("/basket", basketRoutes)