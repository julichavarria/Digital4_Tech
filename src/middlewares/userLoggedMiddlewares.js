let userLoggedMiddleware = function (req, res, next) {
    res.locals.isLogged = null;
    console.log (req.session);
    
    if (req.session.userLogged){
        if (req.session.userLogged.rol == 'Administrador'){
            res.locals.isLogged = 'loggedAdmin';
        }else {
            res.locals.isLogged = 'loggedClient';
        }   
    
    }   
    res.locals.userLogged = req.session.userLogged;
        
    next();
}

module.exports = userLoggedMiddleware;