const fs = require ('fs');
const path = require ('path');


const pcArmadasFilePath = path.join (__dirname, '../data/pcArmadas.json');
const pcArmadasJS = JSON.parse (fs.readFileSync (pcArmadasFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// funciones necesarias para usar controladores

// funcion buscar ojetro segun ID
function obtenerProducto (idProducto){
    let producto = null;
         for (let i = 0; i<pcArmadasJS.length;i++){
            if (idProducto == (pcArmadasJS[i].id)){
                producto = pcArmadasJS[i];
                break;
            }
        }
        return producto;
}

const productController = {

    ////////////////// SECCION COMPUTADORAS ARMADAS
    product: function(req, res) {
        res.render("products/products", {pcArmadasJS});
    },

    ////////////////// DETALLE DE PC SELECCIONADA
    productDetail:function (req,res) {
        let prodSelect = obtenerProducto(req.params.id);
        res.render("products/productDetail", {pcArmadasJS: prodSelect});
    },

    ////////////////// SECCION CARRITO
    productCart:function (req,res) {
        res.render("products/productCart");
    },

    ////////////////// CREAR NUEVO PRODUCTO PC ARMADA
    newProduct:function (req,res) {
        res.render("products/newProduct");
    },

    createNewProduct: function(req, res) {
        let destinationFolder = '/img/productos_pcArmadas/';
        let defoulImage = destinationFolder + 'defoulImage.jpg'
        let productNew = {
            id: pcArmadasJS.length + 1,
            imagen: (req.file ? destinationFolder + req.file.filename : defoulImage),
            logoMarca: req.body.logoMarca,
            titulo: req.body.nombre,
            procesador: req.body.procesador,
            mother: req.body.mother,
            placaDeVideo: req.body.video,
            memoriaRam: req.body.ram,
            discoRigido: req.body.disco,
            gabinete: req.body.gabinete,
            fuente: req.body.fuente,
            precio: toThousand(req.body.precio),
        }
        pcArmadasJS.push (productNew);
        pcArmadasJS.sort( (a, b) => (a.id > b.id) ? 1 : -1)
        let pcArmadasJSON = JSON.stringify(pcArmadasJS);
        fs.writeFileSync (pcArmadasFilePath, pcArmadasJSON);

        res.redirect ('/products/products');
    },

    ////////////////// FIN DE PRODUCTOS NUEVOS

    ////////////////// EDITAR PC ARMADA
    editProduct:function (req,res) {
        let prodSelect = obtenerProducto(req.params.id);
        res.render("products/editProduct", {pcArmadasJS: prodSelect});
    },

    processEditProduct: function (req, res) {
        let productSelect = obtenerProducto(req.params.id); //podSelect contiene todo el producto[i]
        let productEdit = {
            id: parseInt(req.params.id), //// paseInt CONVIERTE EN NUMERO UN STRING ESTO ES PORQUE DESPUES DE EDITAR UN PRODUCTO DEVOLVIA EL ID EN FORMA DE STRING
            imagen: (req.file ? req.file.filename : productSelect.imagen),
            logoMarca: (req.body.logoMarca ? req.body.logoMarca : productSelect.logoMarca),
            titulo: req.body.nombre,
            procesador: req.body.procesador,
            mother: req.body.mother,
            placaDeVideo: req.body.video,
            memoriaRam: req.body.ram,
            discoRigido: req.body.disco,
            gabinete: req.body.gabinete,
            fuente: req.body.fuente,
            precio: toThousand(req.body.precio),
        }

        /// FILTRAMOS TODOS MENOS EL EDITADO A UN ARRAY NUEVO Y AGREGAMOS EL CAPTURADO DEL PARAMS 
        let pcArmadasJSsinEditado = pcArmadasJS.filter (product => product.id != req.params.id);
        /// AGREGA AL NUEVO ARRAY EL PRODUCTO EDITADO
        pcArmadasJSsinEditado.push (productEdit)
        /// ORDENA EL ARRAY DE OBJETOS LITERALES MEDIANTE EL PARMETRO "id"
        let pcArmadasOrdenadoJS = pcArmadasJSsinEditado.sort( (a, b) => (a.id > b.id) ? 1 : -1)

        /// PASAMOS JS A JSON
        pcArmadasOrdenadoJS = JSON.stringify(pcArmadasJSsinEditado);
        fs.writeFileSync (pcArmadasFilePath, pcArmadasOrdenadoJS);

        /// REDIRECCIONAMOS VISTA
        res.redirect ('/products/products')
    },

    ///////////////// FIN DE EDITAR PRODUCTOS

    ///////////////// ELIMINAR PRODUCTOS
    deleteProduct: function (req,res) {
        let prodSelect = obtenerProducto(req.params.id);
        res.render("products/editProduct", {pcArmadasJS: prodSelect});
    },
}
module.exports = productController;