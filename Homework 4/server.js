const http = require('http');
const fs = require('fs');
/*var mysql = require('mysql');
var con = mysql.createConnection({
    host: "database/database.db",
    user: "user",
    password: "password"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });*/

const server = http.createServer((req, res) => {
 res.setHeader('Content-Type', 'text/html');
 let path = './views/'
 switch (req.url) {
 case '/':
 path += 'posts.ejs';
 break;
 case '/singlepost':
 path += 'singlepost.ejs';
 break;
 case '/addnewpost':
 path += 'addnewpost.ejs';
 break;
 default:
 path += '404.ejs';
 break;
 }
 fs.readFile(path, (err, data) => {
 if (err) {
 console.log(err);
 } else {
 res.write(data);
 res.end();
 }
 })
});
server.listen(3000, 'localhost', ()=>{
    console.log("I am listening for requests on port 3000.")
})