window.addEventListener('load', function () {
    let form = this.document.querySelector('#loginForm');
    form.addEventListener('submit', function (e) {

        let formErrors = [];
        let campoEmail = document.querySelector('#email');
        let campoContrasena = document.querySelector('#contrasena');

        // CONDICIONES REQUERIDAS PARA UN MAIL
        let validMail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        //VALIDACION EMAIL
        if (campoEmail.value == "") {
            document.querySelector('#errorEmail').innerHTML = '<i class="fa-regular fa-circle-xmark"></i> Ingrese su email';
            document.querySelector("#email").classList.add("formLabelErrors");
            document.querySelector("#errorEmail").style.color = "#e31a52"
            location.href = "#loginForm";
            formErrors.push('email Vacío')
        }


        else if (!(validMail.test(campoEmail.value))) {
            document.querySelector("#errorEmail").innerHTML = '<i class="fa-regular fa-circle-xmark"></i> Formato de email inválido';
            document.querySelector("#email").classList.add("formLabelErrors");
            document.querySelector("#errorEmail").style.color = "#e31a52"
            location.href = "#loginForm";
            formErrors.push('email inválido')


        } else {
            document.querySelector("#errorEmail").innerHTML = "";
            document.querySelector("#email").classList.remove("formLabelErrors");
        };

        //VALIDACION CONTRASEÑA
        if (campoContrasena.value == "") {
            document.querySelector('#errorContrasena').innerHTML = '<i class="fa-regular fa-circle-xmark"></i> Ingrese su contraseña';
            document.querySelector("#contrasena").classList.add("formLabelErrors");
            document.querySelector("#errorContrasena").style.color = "#e31a52"
            location.href = "#loginForm";
            formErrors.push('Contraseña Vacía')
        }



        if (formErrors.length > 0) {
            e.preventDefault();

        }

    });
})