let adminMiddlewares = function  (req, res, next){
    console.log(req.locals);
    if ( req.session.userLogged && req.session.userLogged.rol !== 'Administrador' ){
        res.redirect ('/not-found')
    }
    next();
}

module.exports = adminMiddlewares;