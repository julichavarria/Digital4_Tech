let userLoggedMiddleware = function (req, res, next) {
    res.locals.isLogged = false;
    console.log (req.session.userLogged)
    console.log ('sesion desde userLoggedMiddleware')
    if (req.session && req.session.userLogged){
        res.locals.isLogged = true;
        console.log ('deberia mostrar carrito')
    }
    next();
}

module.exports = userLoggedMiddleware;