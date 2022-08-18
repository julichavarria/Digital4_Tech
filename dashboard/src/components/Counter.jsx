import React from "react";
import icon from "../assets/images/icon_products.svg"

function Counter (){
    return(
            <div className="contenedorDatosProductos">
                <h1> <img src={icon} alt="icono productos"/>PC ARMADAS</h1>
                <div className="contenedorContador">
                    <div className="contador">30</div>
                    <div>
                        <p><span>15</span>INTEL</p>
                        <hr/>
                        <p><span>15</span>AMD</p>
                    </div>
                </div>
            </div>   
       
    )
}

export default Counter;

