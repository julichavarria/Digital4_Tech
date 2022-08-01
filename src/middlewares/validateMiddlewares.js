const { body } = require ('express-validator');

// VALIDACIONES 

const validation = [ 
    body('nombre')
    .notEmpty().withMessage('Debes completar el nombre').bail()
    .isLength({min: 4}).withMessage('4 caracteres como minimo para el nombre'),
body('apellido')
    .notEmpty().withMessage('Debes completar el apellido').bail()
    .isLength({min: 4}).withMessage('4 caracteres como minimo para el apellido'),
body('email')
    .notEmpty().withMessage('Debes ingresar un mail').bail()
    .isEmail().withMessage('Debes ingresar un mail valido'),
body('usuario').notEmpty().withMessage('Debes completar el nombre de usuario'),
body('contrasena')
    .notEmpty().withMessage('Debes ingresar una contraseña').bail()
    .isLength({min: 8}).withMessage('Debe ingresar un minimo de 8 caracterres para la contraseña')

    //body('avatarPropio').custom ((value, {req}) => {
    //})
];

module.exports = validation;
