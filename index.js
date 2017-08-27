var express = require('express'),
    app = express();

app.use(express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
})

app.listen(80);