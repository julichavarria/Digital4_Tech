window.addEventListener("load", function(){    
    let formulario = document.querySelector("#userForm");
    formulario.addEventListener("submit", function(e){
        e.preventDefault();
        let campoNombre = document.querySelector("#nombre");
        let campoApellido = document.querySelector("#apellido");
        let campoUsuario = document.querySelector("#usuario");
        let campoEmail = document.querySelector("#email");
        let campoContrasena = document.querySelector("#contrasena");
        
        //NO HACEMOS LA VALIDACION DE IMAGEN PORQUE POR DEFAULT TENEMOS AVATAR EN PREDISEÑADO Y SI EL USUARIO ELIJE UNO DE ESTOS AVATAR, VA A DAR ERROR

        //VALIDACION NOMBRE
        if(campoNombre.value==""){
            document.querySelector("#errorNombre").innerHTML ="No completo su Nombre";
            document.querySelector("#nombre").classList.add("formLabelErrors");
            location.href="#userForm";
        }else if(campoNombre.value.length<2 && campoNombre.value!=""){
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
        }else if(campoApellido.value.length<2 && campoApellido.value!=""){
            document.querySelector("#errorApellido").innerHTML ="Su Apellido debe tener mas de 2 letras";
            document.querySelector("#apellido").classList.add("formLabelErrors");
            location.href="#userForm";
        }else {       
            document.querySelector("#errorApellido").innerHTML ="";
            document.querySelector("#apellido").classList.remove("formLabelErrors");
        };

        //VALIDACION USUARIO
     
        //VALIDACION EMAIL
       

        //VALIDACION CONTRASENA
       

});

})