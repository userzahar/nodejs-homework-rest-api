const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { heandleMongoosError } = require("../helpers");

const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: { type: String, default: "" },
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", heandleMongoosError);

const registerSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const emailSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
});

const updateStatusSchema = Joi.object({
  subscription: Joi.string().valid("starter", "pro", "business").required(),
});

const schemasUser = {
  registerSchema,
  emailSchema,
  loginSchema,
  updateStatusSchema,
};

const User = model("user", userSchema);

module.exports = {
  User,
  schemasUser,
};
