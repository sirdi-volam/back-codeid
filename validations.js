import { body } from "express-validator";

export const registerValidation = [
  body("email", "Неверный формат почты").isEmail(),
  body("password", "Пароль должен быть больше 5 и меньше 32").isLength({
    min: 5,
    max: 32,
  }),
  body("login", "Логин должен быть больше 5 и меньше 32").isLength({
    min: 5,
    max: 32,
  }),
]

export const loginValidation = [
  body("email", "Неверный формат почты").isEmail(),
  body("password", "Пароль должен быть больше 5 и меньше 32").isLength({
    min: 5,
    max: 32,
  }),
]

export const postCreateValidation = [
  body("title", "Название поста не может быть пустым").isLength({ min: 3 }).isString(),
  body("text", "Текст поста не может быть пустым").isLength({ min: 10 }).isString(),
  body("tags", "Неверный формат тегов").optional().isString(),
  body("imageUrl", "Неверная ссылка на изображение").optional().isString(),
]