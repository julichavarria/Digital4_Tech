import React from "react";
import List from "./List";
import LastRegister from "./LastRegister";
import Counter from "./Counter";

function DataContainer (){
    return(
        <div className="contenedorBloques">
            <div className="contenedorDatosProductos">
                <Counter/>
                <LastRegister/>
                <List/>
            </div>
            <div className="contenedorDatosUsuarios">
                <Counter/>
                <LastRegister/>
                <List/>
            </div>
        </div>
            
    )
}

export default DataContainer;

// <!-- CONTENEDOR BLOQUES-->

//     <!-- COUNTER-->
//     <!-- LAST REGISTER-->
//     <!-- LIST-->
       
// </div>