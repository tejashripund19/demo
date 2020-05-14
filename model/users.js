const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    maxlength: [20, "Invalid length! Maximum is 20 characters"],
  },
  lastname: {
    type: String,
    required: true,
    maxlength: [20, "Invalid length! Maximum is 20 characters"],
  },
  address: { type: String, required: true },
  country: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

userSchema.statics.sendError = function (res, config) {
  const { status, detail } = config;
  return res
    .status(status)
    .send({ errors: [{ title: "User Error!", detail }] });
};

module.exports = mongoose.model("Users", userSchema);
