import express from "express";
import session from 'express-session';

import homeroute from './routes/home.js';
import signuproute from './routes/signup.js';
import loginroute from './routes/login.js';
import profileroute from './routes/profile.js';
import logoutroute from './routes/logout.js';

import dbconnect from './db/dbconnect.js'




const app = express();
const port = 3000;

app.set("view engine", 'ejs');
app.use(express.static('public'))

dbconnect();
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use('/', homeroute);
app.use('/signup', signuproute);
app.use('/login', loginroute);
app.use('/profile', profileroute);
app.use('/logout',logoutroute)





app.listen(port, ()=>{
    console.log(`server started at port ${port}`)
})