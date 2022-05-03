const express = require ("express");

const app = express ();

const path = require ("path");

app.use(express.static("public"));

app.listen(3030, ()=> console.log ("Server running in 3030 port ") );

app.get ("/", (req,res)=> res.sendFile(path.join(__dirname, "./views/index.html" ) ));

app.get ("/index.html", (req,res)=> res.sendFile(path.join(__dirname, "./views/index.html" ) ));

app.get ("/register.html", (req,res)=> res.sendFile(path.join(__dirname, "./views/register.html" ) ));

app.get ("/productDetail.html", (req,res)=> res.sendFile(path.join(__dirname, "./views/productDetail.html" ) ));

app.get ("/login.html", (req,res)=> res.sendFile(path.join(__dirname, "./views/login.html" ) ));

app.get ("/productCart.html", (req,res)=> res.sendFile(path.join(__dirname, "./views/productCart.html" ) ));

app.get ("/headerFooter.html", (req,res)=> res.sendFile(path.join(__dirname, "./views/headerFooter.html" ) ));

app.get ("/home2.html", (req,res)=> res.sendFile(path.join(__dirname, "./views/home_romi.html" ) ));