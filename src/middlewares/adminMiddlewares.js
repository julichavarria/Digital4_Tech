let adminMiddlewares = function  (req, res, next){
    if ( req.session.userLogged && locals.userLogged !== 'loggedAdmin' ){
        res.redirect ('/not-found')
    }
    next();
}

module.exports = adminMiddlewares;