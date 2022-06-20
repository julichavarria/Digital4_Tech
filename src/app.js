// INSTALAR Y REQUERIR EXPRESS
const express = require("express");
const session = require("express-session");
const methodOverride = require("method-override");
const app = express();
const userLoggedMiddleware = require("./middlewares/userLoggedMiddlewares");

// CONFIGURAMOS LA CARPETA ESTATICA
const path = require("path");
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

//CONFIGURACION DE SESIONES 
app.use(session({secret: 'secret', resave: false, saveUninitialized: false}));
app.use(userLoggedMiddleware);

// CONFIGURACION DE FORMULARIOS
app.use(express.urlencoded({ extended: false })); // PARA OPTENER LOS VALORES QUE VENGAN POR POST
app.use(express.json());
app.use(methodOverride('_method'));



// INICIAMOS EL SERVIDOR
app.listen(3030, ()=> console.log ("Server running in 3030 port ") );
app.set ("view engine", "ejs");
app.set ("views", "./src/views");

// REQUERIMOS Y UTILIZAMOS LAS RUTAS
const routerMain = require ("./routes/mainRoutes");
const routerUsers = require ("./routes/usersRoutes");
const routerProduct = require ("./routes/productsRoutes");
app.use ("/", routerMain);
app.use ("/users", routerUsers);
app.use ("/products", routerProduct);


app.use((req, res, next) => {
    res.status(404).render('not-found');
})