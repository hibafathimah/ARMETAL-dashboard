const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../Model/userSchema');
const verifyToken = require('../middleware/verifyToken');
const checkRole = require('../middleware/checkRole');

const router = express.Router();

// Route to create a user (only accessible to admin)
router.post('/create-user', verifyToken, checkRole(['admin']), async (req, res) => {
  const { username, password, role, email } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({
      username,
      password,
      role,
      email,
    });

    // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    res.status(201).json({ msg: 'User created successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Route to delete a user (only accessible to admin)
router.delete('/delete-user/:id', verifyToken, checkRole(['admin']), async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: 'User deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Route to block/unblock a user (only accessible to admin)
router.put('/block-user/:id', verifyToken, checkRole(['admin']), async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    user.isBlocked = !user.isBlocked; // Toggle block status
    await user.save();
    res.status(200).json({ msg: user.isBlocked ? 'User blocked successfully' : 'User unblocked successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


// Route to edit a user (only accessible to admin)
router.put('/edit-user/:id', verifyToken, checkRole(['admin']), async (req, res) => {
  const { username, role, email } = req.body;
  try {
    await User.findByIdAndUpdate(req.params.id, { username, role, email });
    res.status(200).json({ msg: 'User updated successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
