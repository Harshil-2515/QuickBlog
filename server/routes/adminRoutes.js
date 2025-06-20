import express from "express"
import { adminLogin } from "../controllers/adminController.js"

// we created one router
const adminRouter  = express.Router()

//Now in these router create one endpoint which will have path and controller fcuntion which will run on its call
adminRouter.post("/login", adminLogin)

export default adminRouter