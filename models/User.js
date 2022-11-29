const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Acest camp este obligatoriu*"],
    minlength: 5,
    maxlenght: 50
  },
  email: {
    type: String,
    required: [true, "Acest camp este obligatoriu*"],
    minlength:5,
    maxlength: 255,
    unique: true,
    march: [
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Va rugam introduceti un email vaild" 
    ]
  },
  password: {
    type: String,
    required: [true, "Acest camp estre obligatoriu*"],
    minlength: 5,
    maxlenght: 1024,
    select: false
  },
  profilePic: {
    type: String,
    default: "",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date
},
{ timestamps:true }
);

UserSchema.pre("save", async function (next) {
  if(!this.isModified("password")){
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt)
  next();
})

UserSchema.methods.matchPasswords = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.getSignedToken = function() {
  return jwt.sign({ id: this._id}, process.env.JWT_SECRET, { 
    expiresIn: process.env.JWT_EXPIRE, 
  })
}

UserSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);

  return resetToken;
}

const User = mongoose.model("User", UserSchema);

module.exports = User;