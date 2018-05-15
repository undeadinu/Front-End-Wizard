const express = require('express')
const app = express()

app.use(express.static(__dirname + '/docs/'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/docs/index.html');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))