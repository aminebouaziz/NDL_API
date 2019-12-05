const User = require("../../models/User");

const findOneById = async id => {
  user = await User.findById(id);

  return user;
};

module.exports = { findOneById };
