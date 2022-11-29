const { User, userSchema } = require('../modules/users');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) =>{

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send('User already registred.');

  user = new User({
    name: req.body.name,
    email:req.body.email,
    password:req.body.password
  });

  await user.save();

  res.send(user);
})

module.exports = router;