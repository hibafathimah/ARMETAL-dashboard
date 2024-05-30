// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt')
// const UserSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: {
//     type: String,
//     enum: ['admin', 'manager', 'employee', 'technical lead'],
//     required: true,
//   },
//   email: { type: String, required: true, unique: true },
//   isBlocked: { type: Boolean, default: false }
// }, { timestamps: true });


// module.exports = mongoose.model('User', UserSchema);


const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['admin', 'manager', 'employee', 'technical lead'],
    required: true,
  },
  email: { type: String, required: true, unique: true },
  isBlocked: { type: Boolean, default: false }
}, { timestamps: true });

// Pre-save hook to hash the password before saving
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Pre-findOneAndUpdate hook to hash the password before updating
UserSchema.pre('findOneAndUpdate', async function(next) {
  if (!this._update.password) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this._update.password = await bcrypt.hash(this._update.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model('User', UserSchema);
