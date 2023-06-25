// import express, { Request, Response } from 'express';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// const User = require('../models/login.model');

// const router = express.Router();

// router.post('/login', async (req: Request, res: Response) => {
//   const { username, password } = req.body;

//   try {
//     // Find the user by email
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }

//     // Compare passwords
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }

//     // Create a JSON Web Token (JWT)
//     const token = jwt.sign({ userId: user._id }, 'secret-key');

//     res.json({ token });
//   } catch (error) {
//     console.error('Error logging in:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });
import express from 'express';
import { login } from '../controllers/User';

const router = express.Router();

  router.post('/login', login)

module.exports = router;
