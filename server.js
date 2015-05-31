var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000)); app.use(express.static(__dir)
// Unsure where my directory should point to in Line 4

app.get('/secret', function(req, res) {
  var secret = process.env.SECRET || "I'd like kittens more if they were dogs."

  console.log(secret);
  res.send(secret);
})

// Need to link to 404 page. Should it be an HTML file stored in a directory on my local repo and GitHub?
  res.sendFile(options, function(err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log();
    }//Console.log needs to point to HTML file
  })
