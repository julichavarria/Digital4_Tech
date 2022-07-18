let userLoggedMiddleware = function (req, res, next) {
    res.locals.isLogged = null;
    
    if (req.session.userLogged){
        if (req.session.userLogged.rol_id == 1){
            res.locals.isLogged = 'loggedAdmin';
        }else {
            res.locals.isLogged = 'loggedClient';
        }   
    
    }   
    res.locals.userLogged = req.session.userLogged;
        
    next();
}

module.exports = userLoggedMiddleware;