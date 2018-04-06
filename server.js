const express = require('express');
const bodyParser = require("body-parser");
const app = express();
let path = require('path');

// needed for images css files ect
app.use(express.static('static'));

// useful for grabing data out of post requests
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/static/index.html'));
});

app.listen(3000);