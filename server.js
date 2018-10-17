var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var http = require('http');
var app = express();

var port = 3000;

var index = require('./routes/index');
var rdp = require('./routes/rdp');
var removeFile = require('./routes/removeFile');

app.use(express.static(path.join(__dirname,'dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',index);
app.use('/api',rdp);
app.use('/api',removeFile);

app.get('*', function(req, res) {
  res.sendfile('dist/index.html')
})

app.listen(port,function(){
   console.log("Server started at port:" + port); 
});