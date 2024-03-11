import express from "express";
import cors from "cors";
import morgan from "morgan";
import session from "express-session";
import passport from "passport";
import * as PassportLocal from "passport-local";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import cookieParser from "cookie-parser";

const prisma = new PrismaClient();

// routes
import users from "./routes/user.js";
import todos from "./routes/todo.js";
import auth from "./routes/auth.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(
  session({
    secret: "this is a secret weapon",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cookieParser("this is a secret weapon"));

passport.use(
  new PassportLocal.Strategy({}, async (username, password, done) => {
    try {
      // check is there user with given username in the database
      const user = await prisma.user.findFirst({ where: { username } });
      if (!user) return done(null, false);
      // if there is user with given username, check is password correct
      const isAuthenticated = await bcrypt.compare(password, user.password);
      if (!isAuthenticated) return done(null, false);
      // if credentials correct go to next route
      done(null, user);
    } catch (error) {
      done(error);
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser(async (id, done) => {
  const user = await prisma.user.findFirst({ where: { id } });
  if (!user) {
    throw new Error("User not found");
  }
  const userInfo = {
    id: user.id,
    username: user.username,
    email: user.email,
  };
  done(null, userInfo);
});

app.use("/api/users", users);
app.use("/api/todos", todos);
app.use("/api/auth", auth);

app.get("/", (req, res) => {
  res.send("hello world");
});

export default app;
