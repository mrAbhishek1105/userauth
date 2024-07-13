import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Could not log out, please try again');
        }
        res.redirect('/login');
    });
});

export default router;
