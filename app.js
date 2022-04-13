const express = require ("express");

const app = express ();

const path = require ("path");

app.use(express.static("public"));

app.listen(3030, ()=> console.log ("Server running in 3030 port ") );

app.get ("/", (req,res)=> res.sendFile(path.join(__dirname, "./public/views/index.html" ) ));

