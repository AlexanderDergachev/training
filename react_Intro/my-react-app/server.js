const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let apiKey = '15845acd4a29de499a73108e1e7d77eb';
let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`


app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function(request, response){
     
    // отправляем ответ
    response.send("<h2>Привет Express!</h2>");
});

app.get(url, (err, res, body) => {
    if(err){
        console.log('error:', error);
      } else {
        console.log('body:', body);
        }
});


app.listen(8080, () =>
    console.log('Express server is running on localhost:8080')
);