const fs = require ('fs');
const path = require ('path');
const bcryptjs = require ('bcryptjs');
const {validationResult} = require ('express-validator');



const usersFilePath = path.join (__dirname, '../data/users.json');
const usersJS = JSON.parse (fs.readFileSync (usersFilePath, 'utf-8'));
const destinationFolder = '/img/avatars/';

// funcion buscar ojetro segun ID
function obtenerUsuariosID (idUsuario){
    let usuario = null;
        for (let i = 0; i<usersJS.length;i++){
            if (idUsuario == (usersJS[i].id)){
                usuario = usersJS[i];
                break;
            }
        }
        return usuario;
}

//TRAE UN USUARIO DEPENDIENDO EL CAMPO QUE LE INGRESEMOS BUSCAR
function obtenerUsuarioCampo (campo, dato){
    let usuario = usersJS;
    let usuarioEncontrado = (usuario.find(unUsuario => unUsuario[campo] === dato) );
    return usuarioEncontrado;
}

//LECTURA DE BD
function lecturaBD (){
    const usersJS = JSON.parse (fs.readFileSync (usersFilePath, 'utf-8'));
    return usersJS;
}

const usersController = {
    
    register: function (req,res) {
        res.render("users/register");
    },

    createNewRegister: function (req,res){

        let errors = validationResult (req);
        if (!errors.isEmpty()) { // PREGUNTA SI EXISTE ERRORES AL CARGAR FORMULARIO EXPRESS VALIDATION.

           return res.render ('users/register', {errors: errors.mapped(), oldData: req.body}); 
           //SIN EL RETURN CONTINUAVA LA EJECUCION, ENVIABA EL ERROR PERO GUARDABA EL USUARIO IGUAL
        }
        
        // VERIFICA QUE EL MAIL NO ESTE CARGADO
        let emailAcargar;
        emailAcargar = obtenerUsuarioCampo("email", req.body.email);
        if ( emailAcargar !== undefined ) {
            return res.render ('users/register', {errors: {email: { msg: 'Este mail ya esta registrado'}}, oldData: req.body});
        } //CAMBIAR POR LA FUNCION obtenerUsuarioCampo CUANDO VUELVA ANDAR
        
        // VERIFICA SI EL AVATAR LLEGA POR USUARIO O PREDISEÑADO
        let avatarAguardar = null;
        if (req.file){
            avatarAguardar = req.file.filename
        }else{
            avatarAguardar = req.body.avatar;
        }
        
        let userNew = {
            id: usersJS.length + 1,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            usuario: req.body.usuario,
            email: req.body.email,
            contrasena: bcryptjs.hashSync (req.body.contrasena, 10),
            rol: 'Cliente',
            avatar:  avatarAguardar // (req.file ? req.file.filename : 'defoulAvatar.jpg'),
        }
        // AGREGA AL FINAL DEL ARRAY EL NUEVO PRODUTO
        usersJS.push (userNew);
        
        //ORDENA EL ARRAY POR ID
        usersJS.sort( (a, b) => (a.id > b.id) ? 1 : -1)
        
        //PASA A JSON Y LO ESCRIBES
        let usersJSON = JSON.stringify(usersJS, null, 4);
        fs.writeFileSync (usersFilePath, usersJSON);
        
        res.redirect ('/users/login');
    },

    editUser: function (req, res) {
        //lecturaBD();
        let userSelect = obtenerUsuariosID(req.params.id);
        res.render("users/editUser", {usersJS: userSelect});
    },

    processEditUser: function (req, res) {
        let usuarioEditado = obtenerUsuariosID (req.params.id);
        // VERIFICA SI EL AVATAR LLEGA POR USUARIO O PREDISEÑADO
        let avatarAguardar = null;
        if (req.file){
            avatarAguardar = req.file.filename
        }else{
            avatarAguardar = req.body.avatar;
        }

        // OPTENEMOS EL HASH EN UNA VARIABLE YA QUE DIRECTO NO NOS PERMITIO
        let hash = usuarioEditado.contrasena;
        //VALIDAMOS CONTRASEÑA INGRESADA CON HASH
        let validacionPassword = bcryptjs.compareSync (req.body.contrasena, hash);
        // VERIFICA QUE LA VIEJA CONTRASEÑA SEA CORRECTA
        if ( validacionPassword != true ) {
            res.render ('users/editUser', {errors: {email: { msg: 'La antigua contraseña no es valida'}}, oldData: req.body, usersJS: usuarioEditado});
        }else{

        let emailNoEditable = usuarioEditado.email;
        let userToEdit =  {
            id: parseInt(req.params.id),
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            usuario: req.body.usuario,
            contrasena: bcryptjs.hashSync (req.body.contrasenaNueva, 10),
            email: emailNoEditable,
            avatar: avatarAguardar,
            rol: emailNoEditable.rol
        }
        /// FILTRAMOS TODOS MENOS EL EDITADO A UN ARRAY NUEVO Y AGREGAMOS EL CAPTURADO DEL PARAMS 
        let usersJSsinEditado = usersJS.filter (user => user.id != req.params.id);
        /// AGREGA AL NUEVO ARRAY EL USUARIO EDITADO
        usersJSsinEditado.push (userToEdit)
        /// ORDENA EL ARRAY DE OBJETOS LITERALES MEDIANTE EL PARMETRO "id"
        let usersOrdenadoJS = usersJSsinEditado.sort( (a, b) => (a.id > b.id) ? 1 : -1)

        /// PASAMOS JS A JSON
        let usersOrdenadoJSON = JSON.stringify(usersOrdenadoJS, null, 4);
        fs.writeFileSync (usersFilePath, usersOrdenadoJSON);

        res.redirect ('/users/profile')
        }

    },

    confirmDelete:function (req,res) {
        let usuarioEliminar = obtenerUsuariosID (req.params.id);
        res.render("users/confirmDelete", {usersJS: usuarioEliminar});
    },

    deleteUser: function (req,res) {
        let idParams = req.params.id;
        
        /// FILTRAMOS TODOS MENOS EL PASADO POR ":id" A UN ARRAY NUEVO  
        let usersJSsinElEliminado = usersJS.filter (user => user.id != idParams);
        
        /// PASAMOS JS A JSON
        usersJSONsinELEliminado = JSON.stringify(usersJSsinElEliminado, null, 4);
        fs.writeFileSync (usersFilePath, usersJSONsinELEliminado);

        /// REDIRECCIONAMOS VISTA
        res.redirect ('/') // ultimo probelma
    },

    // VISTA Y PROCESO DE LOGIN
    login:function (req,res) {
        res.render("users/login");
    },

    processLogin: function (req, res) {
        // OBTENEMOS EL USURIO QUE QUIERE INGRESAR POR MEDIO DEL EMAIL
        let usuarioIngresado = obtenerUsuarioCampo ('email', req.body.email);

        // VALIDAMOS QUE EL MAIL INGRESADO ESTE EN LA BD
        if  (usuarioIngresado == undefined ) {
            res.render ('users/login', {errors: {email: { msg: 'Email no Registrado'}}}); // DA EEROR POR CONSOLA PERO POR NAVEGADOR FUNCIONA BIEN REVISAR
        }
        // OPTENEMOS EL HASH EN UNA VARIABLE YA QUE DIRECTO NO NOS PERMITIO
        let hash = usuarioIngresado.contrasena;
        //VALIDAMOS CONTRASEÑA INGRESADA CON HASH
        let validacionPassword = bcryptjs.compareSync (req.body.contrasena, hash);

        // VALIDAMOS CREDENCIALES (MAIL Y CONTRASEÑA AL MIMSO TIEMPO)
        if ( (usuarioIngresado == undefined ) || !validacionPassword) {
            res.render ('users/login', {errors: {email: { msg: 'Credenciales invalidas'}}});
        }
        else {
            //delete usuarioIngresado.contrasena; //BORRAMOS LA PROPIEDAD CONTRASEÑA PARA NO LLEVARLA POR TODA LA SESSION 
            req.session.userLogged = usuarioIngresado; //GUARDO EL USUARIO LOGEADO EN LA SESION DEL NAVEGADOR
            //COOKIE
            if (req.body.recordarUsuario != undefined){
               res.cookie('recordar', usuarioIngresado.email, { maxAge: 1000 * 120})//1000 es un segundo x 120 son 120 segundos = 2 minutos
            }
            res.redirect ('profile')
        }
    },

    userDetail: (req, res) =>{
        let usuarioVista = obtenerUsuariosID (req.params.id);
        res.render ('users/userDetail', {usersJS: usuarioVista});
    },

    profile: (req, res) => {
        lecturaBD ();
        res.render ('users/profile', {usersJS: req.session.userLogged, destinationFolder}); //// mira aca
    },

    logout: function(req, res) {
        req.session.destroy();
        res.redirect ('/');
    },

    usersList:function (req,res) {
        //let reLecturaDB = lecturaBD ();
        let usersJS = lecturaBD ();
        res.render ("users/usersList", {usersJS});
    },

} 
    
module.exports = usersController;



