import express from "express";
import c from "../controllers/todo.js";
const router = express.Router();

router.post("/", c.createTodo);
router.get("/", c.getAllTodos);
router.put("/:id", c.updateTodo);
router.delete("/:id", c.deleteTodo);

export default router;
