import express from "express";
import c from "../controllers/user.js";
const router = express.Router();

router.post("/", c.createUser);
router.get("/", c.getAllUsers);
router.put("/:id", c.updateUser);
router.delete("/:id", c.deleteUser);

export default router;
