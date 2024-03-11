import express from "express";
import c from "../controllers/auth.js";
import passport from "passport";

const router = express.Router();

router.post("/register", c.register);
router.post("/login", passport.authenticate("local"), c.login);

export default router;
