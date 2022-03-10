const { Router } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const router = Router();

router.post(
  "/register",
  [
    check("email", "Некорректный email").isEmail(),
    check("password", "длинна меньше 8 символов").isLength({ min: 4 }),
  ],
  async (req, res) => {
    try {
      console.log("Body", req.body);
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(400).json({
          errors: errors.array(),
          message: "Некорректные данные при регистрации",
        });
      const { email, pass } = req.body;
      const candidate = await User.findOne({ email: email });
      if (candidate) {
        return res.status(400).json({ message: "Ля, а он уже есть" });
      }
      const hashPass = await bcrypt.hash(password, 12);
      const user = new User({ email, password: hashPass });
      await user.save();
    } catch (e) {
      res.status(500).json({ message: "Произошла ошибка" });
    }
  }
);

router.post(
  "login",
  [
    check("email", "Введите корректный имеил").normalizeEmail().isEmail(),
    check("password", "Введите пароль").exists(),
  ],
  async (req, res) => {
    try {
      console.log(req);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Некорректные данные при входе",
        });
      }
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Емаил не найден" });
      }
      const isPass = await bcrypt.compare(password, user.password);
      if (!isPass) {
        return res.status(400).json({ message: "Неверный пароль" });
      }
      const token = jwt.sign({ userId: user.id }, "secretWord", {
        expiresIn: "1h",
      });
      res.json({ token, userId: user.id });
    } catch (e) {
      res.status(500).json({ message: "Что-то пошло не так" });
    }
  }
);

module.exports = router;
