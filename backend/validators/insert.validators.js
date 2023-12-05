const { body, param } = require("express-validator");

const validators = () => {};

validators.createPostValidator = [
  param("identifier").optional(),
  body("title").notEmpty().withMessage("Title is Required"),
  body("description")
    .notEmpty()
    .withMessage("Description is Required")
    .isLength({ max: 280 })
    .withMessage("Description max lenght is 280 characters"),
  body("image")
    .notEmpty()
    .withMessage("Image is required")
    .isURL()
    .withMessage("Image must be an URL"),
];

validators.idInParamsValidator = [
  param("identifier")
    .notEmpty()
    .withMessage("Identifier is required")
    .isMongoId()
    .withMessage("Identifier must be a Mongo ID"),
];

validators.saveCommentValidator = [
  body("content")
    .notEmpty()
    .withMessage("Content is required")
    .isLength({ max: 280 })
    .withMessage("Content max lenght is 280 characters"),
  body("_id")
    .optional()
    .notEmpty()
    .withMessage("_id is required")
    .isMongoId()
    .withMessage("Identifier must be a Mongo ID"),
];

module.exports = validators;
