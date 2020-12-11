const router = require("express").Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require("../models/userModel");
const User = require('../models/userModel')

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Please enter all field",
      });
    }
    if (password.length < 5) {
      return res.status(400).json({
        message: "Password at least 5 character",
      });
    }

    const existingUser = await User.findOne({ email : email })
    if(existingUser) {
        return res.status(400).json({
            message: "Email belong to another account. Please change email"
        })
    } else {
        const salt = await bcryptjs.genSalt();
        const passwordHash = await bcryptjs.hash(password, salt);
        
        const newUser = new User({
            email: email,
            password: passwordHash
        })

        const newUserResult = await newUser.save();
        return res.status(200).json(newUserResult);
    }
  } catch (error) {
      res.status(500).json({ error })
  }
});


router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) {
            return res.status(400).json({
                message: "Please enter email or password"
            })
        }

        if(password.length < 5) {
            return res.status(400).json({
                message: "Please enter password at least 5 character"
            })
        }

        const existingUser = await User.findOne({ email: email });
        if(existingUser) {
            const isMatchPassword = await bcryptjs.compare(password, existingUser.password);
            
            if(!isMatchPassword) {
                return res.status(400).json({
                    message: "Invalid password"
                })
            }
            
            const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET);
            
            res.status(200).json({
                token,
                email: existingUser.email,
                id: existingUser._id
            })

        } else {
            return res.status(400).json({
                message: "No user found"
            })
        }
    } catch (error) {
        return res.status(500).json({error})
    }
})

module.exports = router;
