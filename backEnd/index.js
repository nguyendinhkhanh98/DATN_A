const express = require('express');
const route = require('./routes/index');

const db = require('./config/db/index');

const app = express();

// connect db
db.connect();

app.get('/', (req, res) => {
    res.send("hello world")
})

const PORT = 5000;

// routes init
route(app);

app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`);
})