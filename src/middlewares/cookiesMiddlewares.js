//const usersController = require('../controllers/usersController');

function cookieMiddleware (req, res, next){
    

    if (req.cookies.recordar != undefined && req.session.userLogged == undefined){
        
        // let usuarioLogearse = usersController.obtenerUsuarioCampo('email', req.cookies.recordar);
        // req.session.userLogged = usuarioLogearse;
    }
    
    next();
}
module.exports = cookieMiddleware;