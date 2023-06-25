import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
//  const RegisterUserModel = require('../models/register.model')
import RegisterUser from '../models/register.model'


const router = express.Router();

export const register = async (req: Request, res: Response)  => {
    const { name, email, password } = req.body;

    try {
      // Check if the user already exists
      const existingUser = await RegisterUser.findOne({ name, email });
      if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
      }
      
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = new RegisterUser({
        name,
        email,
        password: hashedPassword,
      });
  
      // Save the user to the database
      await newUser.save();
  
      res.status(201).json({ message: `Welcome ${name}` });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
}

export default router;

