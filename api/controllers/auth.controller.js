import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
  const { username, email,password } = req.body;
  
  // Validate the input data
  if (!username ||!email || !password || username === '' || email === '' || password === '') {  
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  const hashedPassword = bcryptjs.hashSync(password,15)

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json('Signup successful');
  } catch (error) {
    res.json({ message: error.message });
  }

  
};