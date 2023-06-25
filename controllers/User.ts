import { Request, Response } from 'express';
const  User = require('../models/login.model');
// import User from '../models/login.model'
import bcrypt from 'bcrypt';
import  Jwt   from 'jsonwebtoken';
export const login = (req: Request, res:Response) => {
  const {email, password} = req.body;

  try{

    const user = User.findOne({ email });
    if (!user) {
      res.status(401).json({ error: 'Invalid credentials' });
    }

    const hashedUserPassword =  bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedUserPassword,
    });

    newUser.save();

    const token = Jwt.sign({ userId: user._id }, 'secret-key');
    res.json({token})

    const UserPasswordValidation =  bcrypt.compare(password, user.password);
    if (!UserPasswordValidation) {
      res.status(401).json({ error: 'Please enter a correct passsword' });

      // Update router status
     res.status(205).json({msg: `Welcome back ${email}`})
    }
    

  }catch(error) {
      console.error("Error while trying log in to your account")
    res.status(500).json({ error: 'Internal server error' });
  }
}