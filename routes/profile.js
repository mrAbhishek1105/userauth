import express from "express";
import User from "../db/models/user.js";

const router = express.Router()

// router.get('/',(req,res)=>{
//     res.render('profile');
// })

// router.get('/', (req, res) => {
//     if (!req.session.user) {
//         return res.redirect('/login');
//     }      //i think this is wrong
//     const User = req.session.user;
//     res.render('profile', { user: User }); // Passing user data to the template
// });
router.get('/', (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    res.render('profile', { user: req.session.user });
});


export default router;