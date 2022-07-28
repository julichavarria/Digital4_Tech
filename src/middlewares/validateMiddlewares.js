const { body } = require ('express-validator');

// VALIDACIONES 

const validation = [ 
    body('nombre')
    .notEmpty().withMessage('Debes completar el nombre').bail()
    .isLength({max: 25}).withMessage('25 caracteres como máximo para el nombre'),
body('apellido')
    .notEmpty().withMessage('Debes completar el apellido').bail()
    .isLength({max: 20}).withMessage('20 caracteres como máximo para el apellido'),
body('email')
    .notEmpty().withMessage('Debes ingresar un mail').bail()
    .isEmail().withMessage('Debes ingresar un mail valido'),
body('usuario').notEmpty().withMessage('Debes completar el nombre de usuario'),
body('contrasena')
    .notEmpty().withMessage('Debes ingresar una contraseña').bail()
    .isLength({min: 6}).withMessage('Debe ingresar un minimo de 6 caracterres para la contraseña')

    //body('avatarPropio').custom ((value, {req}) => {
    //})
];

module.exports = validation;
