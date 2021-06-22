if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
} 

const secretKey = process.env.STRIPE_SECRET_KEY;
const publicKey = process.env.STRIPE_PUBLIC_KEY;

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen(3000);