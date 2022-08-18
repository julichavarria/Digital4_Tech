import React from "react";
import List from "./List";
import LastRegister from "./LastRegister";
import Counter from "./Counter";

function DataContainer (){
    return(
        <div>
            <div className="contenedorBloques">
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