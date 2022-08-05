const { body } = require ('express-validator');
const path = require ('path');

// VALIDACIONES 

const validation = [ 
    body('nombre')
    .notEmpty().withMessage('Debes completar el nombre').bail()
    .isLength({min: 4}).withMessage('4 caracteres como minimo para el nombre'),

    body('procesador')
    .notEmpty().withMessage('Debes completar el procesador').bail()
    .isLength({min: 4}).withMessage('4 caracteres como minimo para el procesador'),

    body('mother')
    .notEmpty().withMessage('Debes completar el mother').bail()
    .isLength({min: 4}).withMessage('4 caracteres como minimo para el mother'),

    body('ram')
    .notEmpty().withMessage('Debes completar el ram').bail()
    .isLength({min: 4}).withMessage('4 caracteres como minimo para el ram'),

    body('gabinete')
    .notEmpty().withMessage('Debes completar el gabinete').bail()
    .isLength({min: 4}).withMessage('4 caracteres como minimo para el gabinete'),

    body('fuente')
    .notEmpty().withMessage('Debes completar el fuente').bail()
    .isLength({min: 4}).withMessage('4 caracteres como minimo para el fuente'),

    body('precio')
    .notEmpty().withMessage('Debes completar el precio').bail()
    .isNumeric().withMessage('Solo puede ingresar valores numericos'),

    // body('foto').custom ((value, {req}) => {
    //     if (req.file){
    //         var valueExt = path.extname(req.file.originalname); 
    //         if (valueExt !== '.png' && valueExt !== '.jpg' && valueExt !== '.jpeg' && valueExt !== '.gif'){
    //             throw new Error ('Formato Invalido')
    //         }
    //     }
    // })
];

module.exports = validation;
