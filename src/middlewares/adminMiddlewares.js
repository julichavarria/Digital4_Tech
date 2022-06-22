function adminMiddlewares  (req, res, next){
    
    if ( !req.session.userLogged || req.session.userLogged.rol != "Administrador"){
        
            res.redirect ('/not-found')

    }
    next();
}

module.exports = adminMiddlewares;