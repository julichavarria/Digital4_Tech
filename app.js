const express = require ("express");

const app = express ();

const path = require ("path");

app.use(express.static("public"));

app.listen(3030, ()=> console.log ("Server running in 3030 port ") );

app.get ("/", (req,res)=> res.sendFile(path.join(__dirname, "./views/index.html" ) ));

app.get ("/", (req,res)=> res.sendFile(path.join(__dirname, "./public/css/styles.css" ) ));

app.get ("/", (req,res)=> res.sendFile(path.join(__dirname, "./public/css/normalize.css" ) ));

app.get ("/register.html", (req,res)=> res.sendFile(path.join(__dirname, "./views/register.html" ) ));
app.get ("/productDetail.html", (req,res)=> res.sendFile(path.join(__dirname, "./views/productDetail.html" ) ));
