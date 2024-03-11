import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient().$extends({
  name: "user",
  query: {
    user: {
      async create({ args, query }) {
        const pwd = args.data.password;
        args.data.password = await bcrypt.hash(pwd, 12);
        return query(args);
      },
    },
  },
});

const register = async (req, res) => {
  const { username, email, password } = req.body;
  const result = await prisma.user.create({
    data: { username, email, password },
  });
  res.status(201).json(result);
};

const login = async (req, res) => {
  try {
    const { id, username, email } = req.user;
    const user = { id, username, email };
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
    process.exit(1);
  }
};

export default {
  register,
  login,
};
