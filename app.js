var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/getSampleData',function(req,res) {
  res.send("Hello World");
});

app.listen(5000, function(){
    console.log("Server Listening on 5000");
});
