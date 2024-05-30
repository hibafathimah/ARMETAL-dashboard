const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../Model/userSchema');
const sendEmail = require('../utils/sendEmail');

const router = express.Router();

// Register route
// router.post(
//   '/register',
//   [
//     check('username', 'Username is required').not().isEmpty(),
//     check('password', 'Password is required').isLength({ min: 6 }),
//     check('email', 'Please include a valid email').isEmail(),
//     check('role', 'Role is required').not().isEmpty(),
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

//     const { username, password, email, role } = req.body;

//     try {
//       let user = await User.findOne({ email });
//       if (user) {
//         return res.status(400).json({ msg: 'User already exists' });
//       }

//       user = new User({
//         username,
//         password                                                ,
//         email,
//         role
//       });
//       await user.save();

//       res.status(201).json({ msg: 'User registered successfully' });
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send('Server error');
//     }
//   }
// );
// Register route
router.post(
  '/register',
  [
    check('username', 'Username is required').not().isEmpty(),
    check('password', 'Password is required').isLength({ min: 6 }),
    check('email', 'Please include a valid email').isEmail(),
    check('role', 'Role is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password, email, role } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      user = new User({
        username,
        password,
        email,
        role
      });
      await user.save();

      res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);
// Login route
router.post(
  '/login',
  [
    check('username', 'Username is required').not().isEmpty(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }
      const payload = {
        user: { id: user.id, role: user.role,},};
      jwt.sign(payload,process.env.JWT_SECRET_LOGIN,{ expiresIn: '1h' },(err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// Forgot password route
router.post('/forgotpassword', async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const resetToken = jwt.sign({ userId: user._id }, 'resetSecretKey', { expiresIn: '1h' });
    await sendEmail(email, resetToken, user._id);
    console.log('Reset link sent successfully to:', email);
    res.status(200).json({ message: 'Reset link sent to Email id', resetToken });
  } catch (error) {
    console.log('Error during password reset:', error);
    res.status(500).json({ error: 'Failed to reset password' });
  }
});

// Password reset route
router.put('/resetpassword/:resetToken/:userId', async (req, res) => {
  try {
    const { password } = req.body;
    const { resetToken, userId } = req.params;
    if (!password) {
      return res.status(400).json({ error: 'Password is required' });
    }
    jwt.verify(resetToken, 'resetSecretKey', async (err) => { // Corrected secret key
      if (err) {
        return res.status(400).json({ error: 'Invalid or expired reset token' });
      }
      try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.findByIdAndUpdate(userId, { password: hashedPassword });
        res.status(200).json({ message: 'Password reset successful' });
      } catch (error) {
        console.log('Error during password reset:', error);
        res.status(500).json({ error: 'Failed to reset password' });
      }
    });
  } catch (error) {
    console.log('Error during password reset:', error);
    res.status(500).json({ error: 'Failed to reset password' });
  }
});

module.exports = router;
