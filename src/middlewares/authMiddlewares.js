function authMiddlewares (req, res, next){
    if (!req.session.userLogged){
        res.redirect ('../../users/login')
    }
    next();
    console.log ('Passas por aca tambien ?')
}

module.exports = authMiddlewares;