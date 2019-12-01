const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
var cors = require('cors');
const app = express();
const urlencodedParser = bodyParser.urlencoded({
    extended: false
});


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

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "shop",
    password: ""
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('connected');
});



app.get('/promo', (req, res) => {
    let sql = 'SELECT * FROM promocode';
    let query = db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    })
})

app.listen(8080, function () {
    console.log("Сервер ожидает подключения...");
});