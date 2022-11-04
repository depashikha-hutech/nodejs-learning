 console.log("hello world");
//
var http = require('http');
 var dt = require('./myfirstModule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time is currently: " + dt.myDateTime());
res.end();
}).listen(8080);

  //create a server object:
http.createServer(function (req, res) {
   res.writeHead(200,{'contentType':'text/html'});          //add http header
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8081); //the server object listens on port 8080

// query string

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //Return the url part of the request object:
  res.write(req.url);
  res.end();
}).listen(8082);

// read files
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8083);
//create files
//create a file named mynewfile1.txt:
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
//create file
//fs.write()
n
fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
              

