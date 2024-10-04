const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  if (users) {
    res.json(users);
  } else {
    res.json("No Users found");
  }
};

const createUser = async (req, res) => {
  const { name, email } = req.body;
  if (name && email) {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    res.json("New user created");
  } else {
    res.json("Add name or email");
  }
};

module.exports = {
  getAllUsers,
  createUser,
};
