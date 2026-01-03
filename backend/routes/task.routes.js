import express from "express";
import { createTask, deleteTask, getTasks, updateTaskStatus } from "../controllers/task.controller.js";
import { validate } from "../middlewares/validate.js";
import { createTaskSchema, updateTaskStatusSchema } from "../validations/task.validation.js";


const router = express.Router();

router.post("/",validate(createTaskSchema), createTask);
router.get("/", getTasks);
router.put("/:id", validate(updateTaskStatusSchema), updateTaskStatus);
router.delete("/:id", deleteTask);

export default router;
