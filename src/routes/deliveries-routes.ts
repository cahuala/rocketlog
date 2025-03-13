import { Router } from "express"
import { DeliveriesContoller } from "@/controllers/deliveries-contoller"
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated"
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization"
import { DeliveriesStatusController } from "@/controllers/deliveries-satus-controller"

const deliveriesRoutes = Router()
const deliveriesContoller = new DeliveriesContoller()
const deliveriesStatusController = new DeliveriesStatusController()

deliveriesRoutes.use(ensureAuthenticated,verifyUserAuthorization(["sale"]))

deliveriesRoutes.post("/",deliveriesContoller.create)
deliveriesRoutes.get("/",deliveriesContoller.index)

deliveriesRoutes.patch("/:id/status",deliveriesStatusController.update)


export { deliveriesRoutes }