const express = require ("express");

const app = express ();

const path = require ("path");

app.use(express.static("public"));

app.listen(3030, ()=> console.log ("Server running in 3030 port ") );

app.get ("/", (req,res)=> res.render(path.join(__dirname, "./views/index.ejs" ) ));

app.get ("/index", (req,res)=> res.render(path.join(__dirname, "./views/index.ejs" ) ));

app.get ("/register", (req,res)=> res.render(path.join(__dirname, "./views/users/register.ejs" ) ));

app.get ("/productDetail", (req,res)=> res.render(path.join(__dirname, "./views/product/productDetail.ejs" ) ));

app.get ("/login", (req,res)=> res.render(path.join(__dirname, "./views/users/login.ejs" ) ));

app.get ("/productCart", (req,res)=> res.render(path.join(__dirname, "./views/product/productCart.ejs" ) ));