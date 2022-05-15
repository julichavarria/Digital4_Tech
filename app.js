// INSTALAR Y REQUERIR EXPRESS
const express = require("express");
const methodOverride = require("method-override");
const app = express();

// CONFIGURAMOS LA CARPETA ESTATICA
const path = require("path");
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

// CONFIGURACION DE FORMULARIOS
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));

// INICIAMOS EL SERVIDOR
app.listen(3030, ()=> console.log ("Server running in 3030 port ") );
app.set ("view engine", "ejs");

// REQUERIMOS Y UTILIZAMOS LAS RUTAS
const routerMain = require ("./routes/mainRoutes");
const routerUsers = require ("./routes/usersRoutes");
const routerProduct = require ("./routes/productsRoutes");
app.use ("/", routerMain);
app.use ("/users", routerUsers);
app.use ("/products", routerProduct);