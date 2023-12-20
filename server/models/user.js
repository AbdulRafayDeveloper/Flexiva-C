// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  dob: { type: Date },
  gender: { type: String },
  phone: { type: Number },
  addressLine1: { type: String },
  addressLine2: { type: String },
  city: { type: String },
  state: { type: String },
  zipCode: { type: Number },
  medicalCondition: {
    type: Boolean,
    default: false,
  },
  medicalConditionYesDetail: {
    type: String,
    default: "",
  },
  medication: {
    type: Boolean,
    default: false,
  },
  medicationYesDetail: {
    type: String,
    default: "",
  },
  fitnessWeightLossGoalDesc: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    enum: ["user", "provider", "employee", "admin"],
    default: "user",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
