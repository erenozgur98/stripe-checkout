if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
} 

const secretKey = process.env.STRIPE_SECRET_KEY;
const publicKey = process.env.STRIPE_PUBLIC_KEY;

const express = require('express');
const app = express();
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/store', function(req, res) {
    fs.readFile('items.json', function(err, data) {
        if (err) {
            res.status(500).end();
        } else {
            res.render('store.ejs', {
                publicKey: publicKey,
                items: JSON.parse(data)
            });
        }
    })
});

app.post('/purchase', function(req, res) {
    fs.readFile('items.json', function(err, data) {
        if (err) {
            res.status(500).end();
        } else {
            console.log('purchase');
        }
    })
});

app.listen(3000);