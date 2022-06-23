const path = require('path');
const multer = require('multer');

function multerMiddlewares(req, res, next) {
    console.log (req)
    if (file){
        // CONFIGURACIÓN DEL MULTER PARA GUARDAR Y ASIGNAR NOMBRE A LA SUBIDA DE ARCHIVOS POR UN FORMULARIO 
        let storage = multer.diskStorage({

            destination: (req, file, cb) => {
                let destinationFolder = path.join(__dirname, '../../public/img/avatars/');
                cb(null, destinationFolder);
            },

            filename: (req, file, cb) => {
                let imageName = "avatars_" + Date.now() + path.extname(file.originalname);
                cb(null, imageName);
            }
        })

        let updateFile = multer({ storage });

        return updateFile.single('avatarPropio');
    }

    next();
}

module.exports = multerMiddlewares;