import express from "express";
import bcrypt from "bcrypt";
import User from "../db/models/user.js";

const router = express.Router()

router.get('/',(req,res)=>{
    res.render('login');
})

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send('User not found. Please sign up.');
        }

        // Compare the entered password with the stored hashed password
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).send('Invalid password.');
        }

        // If the password is valid, redirect to profile page
        req.session.user = user; // Store user data in session
        return res.redirect('/profile');
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});


export default router;