const Post = require("../../models/Post");

const userService = require("../user/userCrudService");

const findPostByName = async postName => {
  post = await Post.findOne({ name: postName });
  return post;
};

const creatPost = async (postName, userId) => {
  post = await findPostByName(postName);
  user = await userService.findOneById(userId);
  if (post) throw new Error(" post already exist !");

  const newPost = new Post({
    user: user,
    name: postName
  });

  const postRes = await newPost.save();
  return postRes;
};

module.exports = { creatPost };
