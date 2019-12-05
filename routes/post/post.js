const express = require("express");
const router = express.Router();
const postService = require("../../services/post/postCrudService");

/**
 * @route POST post/newPost
 * @desc create new post
 * @access Public
 */
router.post("/newPost", async (req, res) => {
  const result = await postService.creatPost(req.body.name, req.body.userId);

  res.json(result);
});

module.exports = router;
