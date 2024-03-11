import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createUser = async (req, res) => {
  const { username, password } = req.body;
  const result = await prisma.user.create({
    data: {
      username,
      password,
    },
  });
  res.status(201).json(result);
};

const getAllUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const result = await prisma.user.update({
      where: { id: Number(id) },
      data,
    });
    res.status(200).json(result);
  } catch (error) {
    res.json({ error: `Pser with ID ${id} does not exist in the database` });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const result = await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(result);
};

export default {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
};
