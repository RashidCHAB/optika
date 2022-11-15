import { Router } from "express";
import categoriesRoutes from "./categories.routes.js"
import drugsRoutes from "./drugs.routes.js"
import userRoutes from "./user.routes.js"

const router = Router()


router.use("/drugs", drugsRoutes )
router.use("/categories", categoriesRoutes)
router.use('/user', userRoutes)

export default router