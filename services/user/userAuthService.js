const User = require("../../models/User");
const bcrypt = require("bcryptjs");

const findOneByEmail = async email => {
  user = await User.findOne();

  return user;
};

const createUser = async (name, email, pwd) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(pwd, salt, async (err, hash) => {
      if (err) throw err;
      const newUser = new User({
        name: name,
        email: email,
        password: hash
      });
      const user = await newUser.save();
    });
  });
};

module.exports = { createUser, findOneByEmail };
