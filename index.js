var express = require('express');
var app = express();
var fs = require('fs');
var pdf = require('html-pdf');
var options = { format: 'Letter' };
var html = fs.readFileSync('./test/html-pdf.html', 'utf8');

app.get('/', function (req, res) {
  res.contentType = "application/pdf"
  pdf.create(html, options).toStream((err, stream) => {
      if (err) {
        console.log(err);
        res.status(404).send();
      } else {
        console.log("aaa");
        res.attachment("arquivo.pdf");
        stream.pipe(res);
    }
  });
  //res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});