window.addEventListener("load", function(){  
    let formulario = document.querySelector("#productForm");  
    formulario.addEventListener( "submit", function( e ){

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
if(campoNombre.value==""){
    document.querySelector("#errorNombre").innerHTML ="No completo su Nombre";
    document.querySelector("#nombre").classList.add("formLabelErrors");
    location.href="#productForm";
    formErrors.push ('Nombre vacio')
    
}else if(campoNombre.value.length<2 ){
    document.querySelector("#errorNombre").innerHTML ="Su Nombre debe tener mas de 2 letras";
    document.querySelector("#nombre").classList.add("formLabelErrors");
    location.href="#productForm";
    formErrors.push ('Nombre menor a 2')
    
}else {       
    document.querySelector("#errorNombre").innerHTML ="";
    document.querySelector("#nombre").classList.remove("formLabelErrors");
    
};
/// VALIDACION CAMPO PROCESADOR    
if(campoProcesador.value==""){
    document.querySelector("#errorProcesador").innerHTML ="No completo el Procesador";
    document.querySelector("#procesador").classList.add("formLabelErrors");
    location.href="#productForm";
    formErrors.push ('Procesador vacío')
    
}else if(campoProcesador.value.length<2 ){
    document.querySelector("#errorProcesador").innerHTML ="Su Procesador debe tener mas de 2 letras";
    document.querySelector("#procesador").classList.add("formLabelErrors");
    location.href="#productForm";
    formErrors.push ('Procesador menor a 2')
    
}else {       
    document.querySelector("#errorProcesador").innerHTML ="";
    document.querySelector("#procesador").classList.remove("formLabelErrors");
    
};
/// VALIDACION CAMPO MOTHER  
if(campoMother.value==""){
    document.querySelector("#errorMother").innerHTML ="No completo el Mother";
    document.querySelector("#mother").classList.add("formLabelErrors");
    location.href="#productForm";
    formErrors.push ('Mother vacío')
    
}else if(campoMother.value.length<2 ){
    document.querySelector("#errorMother").innerHTML ="Su Mother debe tener mas de 2 letras";
    document.querySelector("#mother").classList.add("formLabelErrors");
    location.href="#productForm";
    formErrors.push ('Mother menor a 2')
    
}else {       
    document.querySelector("#errorMother").innerHTML ="";
    document.querySelector("#mother").classList.remove("formLabelErrors");
    
};
/// VALIDACION CAMPO VIDEO ----> UNA COMPUTADORA PUDE NO LLEVAR PLACA DE VIDEO, POR ESO NO SE HACE LA VALIDACION.

/// VALIDACION CAMPO RAM 
if(campoRam.value==""){
    document.querySelector("#errorRam").innerHTML ="No completo el Ram";
    document.querySelector("#ram").classList.add("formLabelErrors");
    location.href="#productForm";
    formErrors.push ('Ram vacío')
    
}else if(campoRam.value.length<2 ){
    document.querySelector("#errorRam").innerHTML ="Su Ram debe tener mas de 2 letras";
    document.querySelector("#ram").classList.add("formLabelErrors");
    location.href="#productForm";
    formErrors.push ('Ram menor a 2')
    
}else {       
    document.querySelector("#errorRam").innerHTML ="";
    document.querySelector("#ram").classList.remove("formLabelErrors");
    
};
/// VALIDACION CAMPO DISCO ----> UNA COMPUTADORA PUDE SER VENDIDA SIN DISCO, POR ESO NO SE HACE LA VALIDACION.

/// VALIDACION CAMPO GABINETE
if(campoGabinete.value==""){
    document.querySelector("#errorGabinete").innerHTML ="No completo el Gabinete";
    document.querySelector("#gabinete").classList.add("formLabelErrors");
    location.href="#productForm";
    formErrors.push ('Gabinete vacío')
    
}else if(campoGabinete.value.length<2 ){
    document.querySelector("#errorGabinete").innerHTML ="Su Gabinete debe tener mas de 2 letras";
    document.querySelector("#gabinete").classList.add("formLabelErrors");
    location.href="#productForm";
    formErrors.push ('Gabinete menor a 2')
    
}else {       
    document.querySelector("#errorGabinete").innerHTML ="";
    document.querySelector("#gabinete").classList.remove("formLabelErrors");
    
};
/// VALIDACION CAMPO FUENTE
if(campoFuente.value==""){
    document.querySelector("#errorFuente").innerHTML ="No completo el Fuente";
    document.querySelector("#fuente").classList.add("formLabelErrors");
    location.href="#productForm";
    formErrors.push ('Fuente vacío')
    
}else if(campoFuente.value.length<2 ){
    document.querySelector("#errorFuente").innerHTML ="Su Fuente debe tener mas de 2 letras";
    document.querySelector("#fuente").classList.add("formLabelErrors");
    location.href="#productForm";
    formErrors.push ('Fuente menor a 2')
    
}else {       
    document.querySelector("#errorFuente").innerHTML ="";
    document.querySelector("#fuente").classList.remove("formLabelErrors");
    
};
/// VALIDACION CAMPO PRECIO
if( campoPrecio.value == ""){
    document.querySelector("#errorPrecio").innerHTML ="Debe ingresar un precio ";
    document.querySelector("#precio").classList.add("formLabelErrors");
    location.href="#productForm";
    formErrors.push ('Precio vacío');

} else if(!(validPrice.test(campoPrecio.value))){
    document.querySelector("#errorPrecio").innerHTML ="Debe ingresar un precio valido";
    document.querySelector("#precio").classList.add("formLabelErrors");
    location.href="#productForm";
    formErrors.push ('Precio no numérico');
    
}else {       
    document.querySelector("#errorPrecio").innerHTML ="";
    document.querySelector("#precio").classList.remove("formLabelErrors");
};
/// VALIDACION CATEGORIA
let elementoActivo = document.querySelector('input[name="categoria"]:checked');
if(!elementoActivo) {
    document.querySelector ("#errorCategoria").innerHTML ="Debe elegir una Marca";
    formErrors.push ('Categoria Vacía')
}else {
    document.querySelector("#errorCategoria").innerHTML ="";
};

if (formErrors.length > 0){
    e.preventDefault();
    }
});
});