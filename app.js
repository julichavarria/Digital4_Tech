const express = require ("express");

const app = express ();

const path = require ("path");

app.set ("view engine", "ejs");

const publicPath = path.resolve ( __dirname, "./public");

app.use(express.static("public"));

const routerMain = require ("./routes/main");

app.use ("/", routerMain);

app.listen(3030, ()=> console.log ("Server running in 3030 port ") );
