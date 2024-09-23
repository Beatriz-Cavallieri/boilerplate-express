let express = require('express');
let app = express();

require('dotenv').config();

console.log("Hello World");

const PUBLIC_PATH = __dirname + '/public';
const INDEX_PATH = __dirname + '/views/index.html';

app.use("/public", express.static(PUBLIC_PATH));

app.get("/json", (req, res) => {
    var message = "Hello json"
    if (process.env.MESSAGE_STYLE === "uppercase") {
        message = message.toUpperCase();
    }
    res.json({ message });
});

app.get("/", (req, res) => {
    res.sendFile(INDEX_PATH);
});



































module.exports = app;
