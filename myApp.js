let express = require('express');
let app = express();
let bodyParser = require('body-parser');

require('dotenv').config();


console.log("Hello World");

const PUBLIC_PATH = __dirname + '/public';
const INDEX_PATH = __dirname + '/views/index.html';

const parserMiddleware = bodyParser.urlencoded({extended: false});

const logger = (req, res, next) => {
    const log = `${req.method} ${req.path} - ${req.ip}`;
    console.log(log);

    next();
}

const addsTime = (req, res, next) => {
    const time = new Date().toString();
    req.time = time;

    next();
}

app.use(parserMiddleware);

app.use(logger);

app.use("/public", express.static(PUBLIC_PATH));

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE == "uppercase") {
        res.json({
            message: "Hello json".toUpperCase()
        });
    } else {
        res.json({
            message: "Hello json"
        });
    }

});



app.get("/now", addsTime, (req, res) => {
    res.json({ time: req.time });
});

app.get("/:word/echo", (req, res) => {
    res.json({ echo: req.params.word });
});

app.get("/name", (req, res) => {
    res.json({ name: `${req.query.first} ${req.query.last}` });
});

app.post("/name", (req, res) => {
    res.json({ name: `${req.body.first} ${req.body.last}` });
});

app.get("/", (req, res) => {
    res.sendFile(INDEX_PATH);
});




































module.exports = app;
