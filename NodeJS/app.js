const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Body Parsing using Express:

/*app.use((req, res, next) => {
  let body = '';
  req.on('end', () => {
    const userName = body.split('=')[1];
    if(userName){
    req.body = {name : userName};
    }
    next();
  })
 req.on('data', chunk => {
  body+=chunk;
 })
})*/

// optimized body parsing

app.use(bodyParser.urlencoded({ extended: false }));


// middleware that is triggered only on POST requests
app.post('/user', (req, res, next) => {
  res.send('<h1>User: ' + req.body.username + '</h1>');
});

// middleware that is triggered only on GET requests
app.get('/', (req, res, next) => {
  res.send(
    '<form action="/user" method="POST"><input type="text" name="username"><button type="submit">Create User</button></form>'
  );
});

app.listen(5000);
