const Users = require("../model/users");

exports.getAllUser = async (req, res) => {
  try {
    const users = await Users.find();
    return res.json(users);
  } catch (error) {
    return res.mongoError(error);
  }
};

exports.getUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await Users.findById(userId);
    return res.json(user);
  } catch (error) {
    return res.mongoError(error);
  }
};

exports.createUser = (req, res) => {
  const userData = req.body;
  Users.create(userData, (error, createdUser) => {
    if (error) {
      return res.mongoError(error);
    }

    return res.json(createdUser);
  });
};

exports.updateUser = async (req, res) => {
  const { userId } = req.params;

  const UserData = req.body;

  try {
    const user = await Users.findById(userId);

    user.set(UserData);
    await user.save();
    return res.status(200).send(user);
  } catch (error) {
    return res.mongoError(error);
  }
};

exports.deleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await Users.findById(userId);

    await user.remove();
    return res.json({ id: userId });
  } catch (error) {
    return res.mongoError(error);
  }
};
