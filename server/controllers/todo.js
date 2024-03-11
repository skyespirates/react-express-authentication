import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createTodo = async (req, res) => {
  const { title } = req.body;
  const result = await prisma.todo.create({
    data: {
      title,
    },
  });
  res.status(201).json(result);
};

const getAllTodos = async (req, res) => {
  const todos = await prisma.todo.findMany();
  res.json(todos);
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const result = await prisma.todo.update({
      where: { id: Number(id) },
      data,
    });
    res.json(result);
  } catch (error) {
    res.json(`There is no todo with id ${id} in the database`);
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const result = await prisma.todo.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(result);
};

export default {
  createTodo,
  getAllTodos,
  updateTodo,
  deleteTodo,
};
