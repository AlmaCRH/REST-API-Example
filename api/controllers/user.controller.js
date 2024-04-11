const User = require("../models/user.model.js");

const getAllUsers = async (request, response) => {
  try {
    const users = await User.findAll();
    return response.status(200).json(users);
  } catch (error) {
    response.status(404).send(error);
  }
};

const getUserById = async (request, response) => {
  try {
    const user = await User.findOne({
      where: {
        id: request.params.id,
      },
    });
    return response.status(200).json(user);
  } catch (error) {
    response.status(404).send(error);
  }
};

const createUser = async (request, response) => {
  try {
    const user = await User.create(request.body);
    return response.status(200).json(user);
  } catch (error) {
    response.status(404).send(error);
  }
};

const updateUser = async (request, response) => {
  try {
    await User.update(request.body, {
      where: {
        id: request.params.id,
      },
    });
    return response.status(200).send("User updated");
  } catch (error) {
    response.status(404).send(error);
  }
};

const deleteUser = async (request, response) => {
  try {
    await User.destroy({
      where: {
        id: request.params.id,
      },
    });
    return response
      .status(200)
      .send(`User with id ${request.params.id} was deleted`);
  } catch (error) {
    response.status(404).send(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  createUser,
};
