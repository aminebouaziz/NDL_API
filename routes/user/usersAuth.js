const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// services
const authService = require("../../services/user/userAuthService");

/**
 * @route POST user/userAuth/signIn
 * @desc Sign in user
 * @access Public
 */
router.post("/signIn", async (req, res) => {
  authService.createUser(req.body.name, req.body.email, req.body.password);
  const user = await authService.findOneByEmail(req.email);
  res.json(user);
});

module.exports = router;
