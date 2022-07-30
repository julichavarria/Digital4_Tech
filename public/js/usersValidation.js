const db = require("../../database/models/");

window.addEventListener("load", function(){    
    let formulario = document.querySelector("#userForm");
    formulario.addEventListener("submit", function(e){
        e.preventDefault();
        let campoNombre = document.querySelector("#nombre");
        let campoApellido = document.querySelector("#apellido");
        let campoUsuario = document.querySelector("#usuario");
        let campoEmail = document.querySelector("#email");
        let campoContrasena = document.querySelector("#contrasena");
        let validMail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        let validacionEmail =  db.Usuario.findOne({ where: { email: req.body.email } }) ;
        console.log(validacionEmail);

        //NO HACEMOS LA VALIDACION DE IMAGEN PORQUE POR DEFAULT TENEMOS AVATAR EN PREDISEÑADO Y SI EL USUARIO ELIJE UNO DE ESTOS AVATAR, VA A DAR ERROR

        //VALIDACION NOMBRE
        if(campoNombre.value==""){
            document.querySelector("#errorNombre").innerHTML ="No completo su Nombre";
            document.querySelector("#nombre").classList.add("formLabelErrors");
            location.href="#userForm";
        }else if(campoNombre.value.length<2 ){
            document.querySelector("#errorNombre").innerHTML ="Su Nombre debe tener mas de 2 letras";
            document.querySelector("#nombre").classList.add("formLabelErrors");
            location.href="#userForm";
        }else {       
            document.querySelector("#errorNombre").innerHTML ="";
            document.querySelector("#nombre").classList.remove("formLabelErrors");
        };

        // VALIDACION APELLIDO
        if(campoApellido.value==""){
            document.querySelector("#errorApellido").innerHTML ="No completo su Apellido";
            document.querySelector("#apellido").classList.add("formLabelErrors");
            location.href="#userForm";
        }else if(campoApellido.value.length<2 ){
            document.querySelector("#errorApellido").innerHTML ="Su Apellido debe tener mas de 2 letras";
            document.querySelector("#apellido").classList.add("formLabelErrors");
            location.href="#userForm";
        }else {       
            document.querySelector("#errorApellido").innerHTML ="";
            document.querySelector("#apellido").classList.remove("formLabelErrors");
        };

        //VALIDACION USUARIO
        if(campoUsuario.value==""){
            document.querySelector("#errorUsuario").innerHTML ="No completo su nombre de Usuario";
            document.querySelector("#usuario").classList.add("formLabelErrors");
            location.href="#userForm";
        }else if(campoUsuario.value.length<2 ){
            document.querySelector("#errorUsuario").innerHTML ="Su nombre de Usuario debe tener mas de 2 letras";
            document.querySelector("#usuario").classList.add("formLabelErrors");
            location.href="#userForm";
        }else {       
            document.querySelector("#errorUsuario").innerHTML ="";
            document.querySelector("#usuario").classList.remove("formLabelErrors");
        };

        //VALIDACION EMAIL
        if(campoEmail.value==""){
            document.querySelector("#errorEmail").innerHTML ="Este campo no debe estar vacio";
            document.querySelector("#email").classList.add("formLabelErrors");
            location.href="#userForm";
        }else if(!(validMail.test(campoEmail.value))){
            document.querySelector("#errorEmail").innerHTML ="No es un formato de mail valido";
            document.querySelector("#email").classList.add("formLabelErrors");
            location.href="#userForm";
        }else if (validacionEmail){
            document.querySelector("#errorEmail").innerHTML ="Este mail ya esta registrado";
            document.querySelector("#email").classList.add("formLabelErrors");
            location.href="#userForm";
        }else {       
            document.querySelector("#errorEmail").innerHTML ="";
            document.querySelector("#email").classList.remove("formLabelErrors");
        };
        
        //VALIDACION CONTRASENA
        if(campoContrasena.value==""){
            document.querySelector("#errorContrasena").innerHTML ="No es un formato de mail valido";
            document.querySelector("#contrasena").classList.add("formLabelErrors");
            location.href="#userForm";
        }else if(campoContrasena.value.length<2 ){
            document.querySelector("#errorContrasena").innerHTML ="Debe tener mas de 2 letras";
            document.querySelector("#contrasena").classList.add("formLabelErrors");
            location.href="#userForm";
        }else {       
            document.querySelector("#errorContrasena").innerHTML ="";
            document.querySelector("#contrasena").classList.remove("formLabelErrors");
        };

});

})