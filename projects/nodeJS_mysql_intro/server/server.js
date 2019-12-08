const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
var cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



var whitelist = ['http://localhost:3000', 'http://localhost:5000'];
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors(corsOptions));

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     database: "shop",
//     password: ""
// });

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    database: "shop",
    password: ""
});

// db.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('connected');
// });

app.post('/registration', function (req, res) {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    
    const name = req.body.user.name;
    const surname = req.body.user.surname;
    const email = req.body.user.email;
    const phone_number = req.body.user.phone_number;
    const password = req.body.user.password;
    let sql = 'INSERT INTO information (name, surname, email, phone_number, password) VALUES (?,?,?,?,?)'
    pool.query(sql, [name, surname, email, phone_number, password], function(err, data) {
    });
    let sql2 = 'INSERT INTO purchaser SET information_id = (SELECT id FROM information WHERE name = ?)'
    pool.query(sql2, [name], function(err, data) {
        res.sendStatus('200')
    });
});

app.get('/promo', (req, res) => {
    let sql = 'SELECT * FROM promocode';
    let query = pool.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
})

app.get('/product', (req, res) => {
    let sql = 'SELECT * FROM product';
    let query = pool.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    })
})

app.get('/product/:id', (req, res) => {
    let sql = 'Select p.id, p.path, p.name, p.price, p.category, p.availability, b.name, m.name as model_name, bo.date, pr.value, pr.discount FROM product p, brand b, model m, booking bo, promocode pr WHERE p.brand_id = b.id AND p.model_id = m.id AND p.booking_id = bo.id AND p.promocode_id = pr.id AND p.id = ?';
    const id = req.params.id;
    let query = pool.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result));
    })
})



app.listen(8080, function () {
    console.log("connected");
});