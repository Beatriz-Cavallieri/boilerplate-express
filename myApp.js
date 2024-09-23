let express = require('express');
let app = express();

console.log("Hello World");

const PUBLIC_PATH = __dirname + '/public';
const INDEX_PATH = __dirname + '/views/index.html';

app.use("/public", express.static(PUBLIC_PATH));

app.get("/json", (req, res) =>{
    res.json({"message": "Hello json"});
})

app.get("/", (req, res) =>{
    res.sendFile(INDEX_PATH);
})



































 module.exports = app;
