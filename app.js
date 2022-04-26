const express = require ("express");

const app = express ();

const path = require ("path");

app.use(express.static("public"));

app.listen(3030, ()=> console.log ("Server running in 3030 port ") );

app.get ("/", (req,res)=> res.sendFile(path.join(__dirname, "./views/index.html" ) ));

app.get ("/", (req,res)=> res.sendFile(path.join(__dirname, "./public/css/styles.css" ) ));

app.get ("/", (req,res)=> res.sendFile(path.join(__dirname, "./public/css/normalize.css" ) ));

app.get ("/register", (req,res)=> res.sendFile(path.join(__dirname, "./views/register.html" ) ));

app.get ("/productDetail", (req,res)=> res.sendFile(path.join(__dirname, "./views/productDetail.html" ) ));

app.get ("/login", (req,res)=> res.sendFile(path.join(__dirname, "./views/login.html" ) ));

app.get ("/carrito", (req,res)=> res.sendFile(path.join(__dirname, "./views/carrito.html" ) ));