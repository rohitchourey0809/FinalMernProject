const User = require("../models/usermodel");
const express = require("express");
const { body, validationResult } = require("express-validator");

const router = express.Router();

router.post(
  "/register",

  body("FIRSTNAME").not().isEmpty().isLength({ min: 2, max: 10 }),

  body("LASTNAME").not().isEmpty().isLength({ min: 2, max: 10 }),

  body("EMAIL").isEmail(),
  body("PASSWORD")
    .isString()
    .isLength({ min: 5 })
    .not()
    .isLowercase()
    .not()
    .isUppercase()
    .not()
    .isNumeric()
    .not()
    .isAlpha(),

  async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const userdata = await User.find();
      console.log(userdata);
      return res.status(200).send({ userdata });
    } catch (err) {
      return res.status(400).send({ message: err.message });
    }
  }
);

module.exports = router;
