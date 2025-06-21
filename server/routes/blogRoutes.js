import express from "express"
import { addBlog } from "../controllers/blogContoller"

const blogRouter = express.Router()

blogRouter.post("/add", addBlog)