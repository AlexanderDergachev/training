const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const urlencodedParser = bodyParser.urlencoded({
    extended: false
});

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "shop",
//   password: ""
// });

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

app.listen(8080, function(){
    console.log("Сервер ожидает подключения...");
  });