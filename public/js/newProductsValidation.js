window.addEventListener("load", function () {

    let formulario = document.querySelector("#productForm");
    formulario.addEventListener("submit", function (e) {
        let campoNombre = document.querySelector("#nombre");
        let campoProcesador = document.querySelector("#procesador");
        let campoMother = document.querySelector("#mother");
        let campoRam = document.querySelector("#ram");
        let campoGabinete = document.querySelector("#gabinete");
        let campoFuente = document.querySelector("#fuente");
        let campoPrecio = document.querySelector("#precio");


        let formErrors = [];
        //VARIABLES PARA VALIDACION DE FORMA INDIVIDUAL
        let validPrice = /^[0-9]*$/;

        /// VALIDACION CAMPO TITULO     
        if (campoNombre.value == "") {
            document.querySelector("#errorNombre").innerHTML = '<i class="fa-regular fa-circle-xmark"></i> Complete en nombre de la PC';
            document.querySelector("#nombre").classList.add("formLabelErrors");
            location.href = "#productForm";
            formErrors.push('Nombre vacio')

        } else if (campoNombre.value.length < 2) {
            document.querySelector("#errorNombre").innerHTML = '<i class="fa-regular fa-circle-xmark"></i> Debe contener mas de 2 letras';
            document.querySelector("#nombre").classList.add("formLabelErrors");
            location.href = "#productForm";
            formErrors.push('Nombre menor a 2')

        } else {
            document.querySelector("#errorNombre").innerHTML = "";
            document.querySelector("#nombre").classList.remove("formLabelErrors");

        };
        /// VALIDACION CAMPO PROCESADOR    
        if (campoProcesador.value == "") {
            document.querySelector("#errorProcesador").innerHTML = '<i class="fa-regular fa-circle-xmark"></i> Complete el Procesador de la PC';
            document.querySelector("#procesador").classList.add("formLabelErrors");
            location.href = "#productForm";
            formErrors.push('Procesador vacío')

        } else if (campoProcesador.value.length < 2) {
            document.querySelector("#errorProcesador").innerHTML = '<i class="fa-regular fa-circle-xmark"></i> Debe contener mas de 2 letras';
            document.querySelector("#procesador").classList.add("formLabelErrors");
            location.href = "#productForm";
            formErrors.push('Procesador menor a 2')

        } else {
            document.querySelector("#errorProcesador").innerHTML = "";
            document.querySelector("#procesador").classList.remove("formLabelErrors");

        };
        /// VALIDACION CAMPO MOTHER  
        if (campoMother.value == "") {
            document.querySelector("#errorMother").innerHTML = '<i class="fa-regular fa-circle-xmark"></i> Complete el Motherboard de la PC';
            document.querySelector("#mother").classList.add("formLabelErrors");
            location.href = "#productForm";
            formErrors.push('Mother vacío')

        } else if (campoMother.value.length < 2) {
            document.querySelector("#errorMother").innerHTML = '<i class="fa-regular fa-circle-xmark"></i> Debe contener mas de 2 letras';
            document.querySelector("#mother").classList.add("formLabelErrors");
            location.href = "#productForm";
            formErrors.push('Mother menor a 2')

        } else {
            document.querySelector("#errorMother").innerHTML = "";
            document.querySelector("#mother").classList.remove("formLabelErrors");

        };
        /// VALIDACION CAMPO VIDEO ----> UNA COMPUTADORA PUDE NO LLEVAR PLACA DE VIDEO, POR ESO NO SE HACE LA VALIDACION.

        /// VALIDACION CAMPO RAM 
        if (campoRam.value == "") {
            document.querySelector("#errorRam").innerHTML = '<i class="fa-regular fa-circle-xmark"></i> Complete la Memoria Ram de la PC';
            document.querySelector("#ram").classList.add("formLabelErrors");
            location.href = "#productForm";
            formErrors.push('Ram vacío')

        } else if (campoRam.value.length < 2) {
            document.querySelector("#errorRam").innerHTML = '<i class="fa-regular fa-circle-xmark"></i> Debe contener mas de 2 letras';
            document.querySelector("#ram").classList.add("formLabelErrors");
            location.href = "#productForm";
            formErrors.push('Ram menor a 2')

        } else {
            document.querySelector("#errorRam").innerHTML = "";
            document.querySelector("#ram").classList.remove("formLabelErrors");

        };
        /// VALIDACION CAMPO DISCO ----> UNA COMPUTADORA PUDE SER VENDIDA SIN DISCO, POR ESO NO SE HACE LA VALIDACION.

        /// VALIDACION CAMPO GABINETE
        if (campoGabinete.value == "") {
            document.querySelector("#errorGabinete").innerHTML = '<i class="fa-regular fa-circle-xmark"></i> Complete el modelo de Gabinete de la PC';
            document.querySelector("#gabinete").classList.add("formLabelErrors");
            location.href = "#productForm";
            formErrors.push('Gabinete vacío')

        } else if (campoGabinete.value.length < 2) {
            document.querySelector("#errorGabinete").innerHTML = '<i class="fa-regular fa-circle-xmark"></i> Debe contener mas de 2 letras';
            document.querySelector("#gabinete").classList.add("formLabelErrors");
            location.href = "#productForm";
            formErrors.push('Gabinete menor a 2')

        } else {
            document.querySelector("#errorGabinete").innerHTML = "";
            document.querySelector("#gabinete").classList.remove("formLabelErrors");

        };
        /// VALIDACION CAMPO FUENTE
        if (campoFuente.value == "") {
            document.querySelector("#errorFuente").innerHTML = '<i class="fa-regular fa-circle-xmark"></i> Complete la fuente de la PC';
            document.querySelector("#fuente").classList.add("formLabelErrors");
            location.href = "#productForm";
            formErrors.push('Fuente vacío')

        } else if (campoFuente.value.length < 2) {
            document.querySelector("#errorFuente").innerHTML = '<i class="fa-regular fa-circle-xmark"></i> Debe contener mas de 2 letras';
            document.querySelector("#fuente").classList.add("formLabelErrors");
            location.href = "#productForm";
            formErrors.push('Fuente menor a 2')

        } else {
            document.querySelector("#errorFuente").innerHTML = "";
            document.querySelector("#fuente").classList.remove("formLabelErrors");

        };
        /// VALIDACION CAMPO PRECIO
        if (campoPrecio.value == "") {
            document.querySelector("#errorPrecio").innerHTML = '<i class="fa-regular fa-circle-xmark"></i> Complete el pecio de la PC';
            document.querySelector("#precio").classList.add("formLabelErrors");
            location.href = "#productForm";
            formErrors.push('Precio vacío');

        } else if (!(validPrice.test(campoPrecio.value))) {
            document.querySelector("#errorPrecio").innerHTML = '<i class="fa-regular fa-circle-xmark"></i> Solo se permiten números';
            document.querySelector("#precio").classList.add("formLabelErrors");
            location.href = "#productForm";
            formErrors.push('Precio no numérico');

        } else {
            document.querySelector("#errorPrecio").innerHTML = "";
            document.querySelector("#precio").classList.remove("formLabelErrors");
        };
        /// VALIDACION CATEGORIA
        let elementoActivo = document.querySelector('input[name="categoria"]:checked');
        if (!elementoActivo) {
            document.querySelector("#errorCategoria").innerHTML = '<i class="fa-regular fa-circle-xmark"></i> Debe elegir una marca';
            formErrors.push('Categoria Vacía')
        } else {
            document.querySelector("#errorCategoria").innerHTML = "";
        };

        if (formErrors.length > 0) {
            e.preventDefault();

        }
    });

});