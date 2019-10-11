const express = require("express");
const next = require("next");
const mongoose = require("mongoose");

require('dotenv').config();

const dev = process.env.NODE_ENV !== `production`;
const MONGO_URL = process.env.MONGO_URL_TEST;

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
};

mongoose.connect(MONGO_URL, options)

const PORT = process.env.PORT || 3000
const ROOT_URL = `http://localhost:${PORT}`

const app = next({ dev });
const handle = app.getRequestHandler(); 

app.prepare().then(() => {
    const server = express();

    server.get("/", (req, res) => {
        app.render(req, res, "/");
    });

    server.get("*" , (req, res) => handle(req, res));

    server.listen(PORT, (err) => {
        if(err) throw err;
        console.log(`> > Server listening at ${ROOT_URL}`);
    });

})



