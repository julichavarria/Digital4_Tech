function adminMiddlewares  (req, res, next){
    
    if ( !req.session.userLogged || req.session.userLogged.rol_id != 1){
        
            res.redirect ('/not-found')

    }
    next();
}

module.exports = adminMiddlewares;