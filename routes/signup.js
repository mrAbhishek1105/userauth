import express from "express";
import User from "../db/models/user.js";
import bcrypt from 'bcrypt'

const router = express.Router()

router.get('/',(req,res)=>{
    res.render('signup');
})

router.post('/register', async (req, res) => {
    try {
        const { name, age, mobile, email, password } = req.body;

        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).send('User already exists. Please sign in');
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            const newUser = new User({
                name,
                age,
                mobile,
                email,
                password: hashedPassword
            });
            await newUser.save();
            return res.render('login')
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});


// router.post('/register',async (req, res) => {
//     try {
//         const { name, age, mobile, email, password } = req.body;
//     let user = await User.findOne({ email: req.body.email })
//     if (user) {
//         return res.status(400).send('User already exisits. Please sign in')
//     } else {
//         try {
//             const salt = await bcrypt.genSalt(10)
//             const password = await bcrypt.hash(req.body.password, salt)
//             const user = new User({
//                 name: req.body.name,
//                 email: req.body.email,
//                 password: password
//             })
//             await user.save()
//             return res.status(201).json(user)
//         } catch (err) {
//             return res.status(400).json({ message: err.message })
//         }
//     }
// }
// })

export default router;