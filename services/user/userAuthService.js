const User = require("../../models/User");
const bcrypt = require("bcryptjs");

const findOneByEmail = async email => {
  user = await User.findOne();

  return user;
};

const createUser = async (name, email, pwd) => {
  const user = await findOneByEmail(email);
  const newUser = {};
  if (user) throw new Error("User already exist ");

  newUser.name = name;
  newUser.email = email;
  newUser.password = await bcrypt.hash(pwd, 12);
  const resUser = await new User(newUser).save();
  return resUser;
};

module.exports = { createUser, findOneByEmail };
