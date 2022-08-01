window.addEventListener("load", function(){   
    let formulario = document.querySelector("#userForm");
    formulario.addEventListener("submit", function(e){
        let campoNombre = document.querySelector("#nombre");
        let campoApellido = document.querySelector("#apellido");
        let campoUsuario = document.querySelector("#usuario");
        let campoEmail = document.querySelector("#email");
        let campoContrasena = document.querySelector("#contrasena");
        
        // CONDICIONES REQUERIDAS PARA UN MAIL
        let validMail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        
        let formErrors = [];
        //VARIABLES PARA VALIDACION DE FORMA INDIVIDUAL
        let errorsPassword =[];
        let validPaswordSymbol = /^(?=.*[!@#$%^&*._])/;
        let validPaswordNumber = /^(?=.*[0-9])/;
        let validPaswordLower = /^(?=.*[a-z])/;
        let validPaswordUpper = /^(?=.*[A-Z])/;

        //NO HACEMOS LA VALIDACION DE IMAGEN PORQUE POR DEFAULT TENEMOS AVATAR EN PREDISEÑADO Y SI EL USUARIO ELIJE UNO DE ESTOS AVATAR, VA A DAR ERROR

            //VALIDACION NOMBRE
            if(campoNombre.value==""){
                document.querySelector("#errorNombre").innerHTML ="No completo su Nombre";
                document.querySelector("#nombre").classList.add("formLabelErrors");
                location.href="#userForm";
                formErrors.push ('Nombre vacio')
                
            }else if(campoNombre.value.length<2 ){
                document.querySelector("#errorNombre").innerHTML ="Su Nombre debe tener mas de 2 letras";
                document.querySelector("#nombre").classList.add("formLabelErrors");
                location.href="#userForm";
                formErrors.push ('Nombre menor a 2')
                
            }else {       
                document.querySelector("#errorNombre").innerHTML ="";
                document.querySelector("#nombre").classList.remove("formLabelErrors");
                
            };

            // VALIDACION APELLIDO
            if(campoApellido.value==""){
                document.querySelector("#errorApellido").innerHTML ="No completo su Apellido";
                document.querySelector("#apellido").classList.add("formLabelErrors");
                location.href="#userForm";
                formErrors.push ('Apellido vacio')
                
            }else if(campoApellido.value.length<2 ){
                document.querySelector("#errorApellido").innerHTML ="Su Apellido debe tener mas de 2 letras";
                document.querySelector("#apellido").classList.add("formLabelErrors");
                location.href="#userForm";
                formErrors.push ('Apellido menor a 2')
                
            }else {       
                document.querySelector("#errorApellido").innerHTML ="";
                document.querySelector("#apellido").classList.remove("formLabelErrors");
                
            };

            //VALIDACION USUARIO
            if(campoUsuario.value==""){
                document.querySelector("#errorUsuario").innerHTML ="No completo su nombre de Usuario";
                document.querySelector("#usuario").classList.add("formLabelErrors");
                location.href="#userForm";
                formErrors.push ('Usuario vacio')
                
            }else if(campoUsuario.value.length<2 ){
                document.querySelector("#errorUsuario").innerHTML ="Su nombre de Usuario debe tener mas de 2 letras";
                document.querySelector("#usuario").classList.add("formLabelErrors");
                location.href="#userForm";
                formErrors.push ('Usuario menor a 2')
                
            }else {       
                document.querySelector("#errorUsuario").innerHTML ="";
                document.querySelector("#usuario").classList.remove("formLabelErrors");
            };

            //VALIDACION EMAIL
            if(campoEmail.value==""){
                document.querySelector("#errorEmail").innerHTML ="Este campo no debe estar vacio";
                document.querySelector("#email").classList.add("formLabelErrors");
                location.href="#userForm";
                formErrors.push ('Email vacio')
                
                
            }else if(!(validMail.test(campoEmail.value))){
                document.querySelector("#errorEmail").innerHTML ="No es un formato de mail valido";
                document.querySelector("#email").classList.add("formLabelErrors");
                location.href="#userForm";
                formErrors.push ('Email menor a 2')
                
            // }else if (validacionEmail){
            //     document.querySelector("#errorEmail").innerHTML ="Este mail ya esta registrado";
            //     document.querySelector("#email").classList.add("formLabelErrors");
            //     location.href="#userForm";
            }else {       
                document.querySelector("#errorEmail").innerHTML ="";
                document.querySelector("#email").classList.remove("formLabelErrors");
            };
            
            //VALIDACION CONTRASENA DE FORMA INDIVIDUAL
            if(campoContrasena.value==""){
                errorsPassword.push ("Debe ingresar una contraseña");
            }
            if(campoContrasena.value.length<8){
                errorsPassword.push ("Debe ingresar minimo 8 caracteres"); 
            }
            if(!(validPaswordNumber.test(campoContrasena.value))){
                errorsPassword.push ("Debe tener al menos un número");
            }
            if(!(validPaswordSymbol.test(campoContrasena.value))){
                errorsPassword.push ("Debe tener al menos un Caracter especial");       
            };
            if(!(validPaswordLower.test(campoContrasena.value))){
                errorsPassword.push ("Debe contener letras en minusculas");       
            };
            if(!(validPaswordUpper.test(campoContrasena.value))){
                errorsPassword.push ("Debe contener letras en mayusculas");       
            };
            if(errorsPassword.length>0){
                document.querySelector("#errorContrasena ul").innerHTML ="";
                errorsPassword.forEach (error => document.querySelector("#errorContrasena ul").innerHTML += "<li>" + error + "</li>");
                document.querySelector("#contrasena").classList.add("formLabelErrors");
                location.href="#userForm";
                formErrors.push ('Consateña Incorrecta')
            }else {
                document.querySelector("#errorContrasena ul").innerHTML ="";
                document.querySelector("#contrasena").classList.remove("formLabelErrors");
            }
        
            
            if (formErrors.length > 0){
                e.preventDefault();
            }
});

});