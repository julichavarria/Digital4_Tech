let userLoggedMiddleware = function (req, res, next) {
    res.locals.isLogged = null;

    
    if (req.session.userLogged){
        if (req.session.userLogged.rol == 'Administrador'){
            res.locals.isLogged = 'loggedAdmin';
        }else {
            res.locals.isLogged = 'loggedClient';
        }   
    
    }   
    res.locals.userLogged = req.session.userLogged;
        console.log (res.locals.isLogged)
    next();
}

module.exports = userLoggedMiddleware;