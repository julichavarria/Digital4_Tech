import React, { Component } from 'react';
import icon from "../assets/images/icon_products.svg"
import propTypes from "propTypes"


class Counter extends Component {
    constructor(props ) {
        super (props);
        this.state = {
        PcMarcas: "" 
    }
}
apiCall (url, consecuencia){
    fetch (url)
        .then( response => response.json())
        .then ( data => consecuencia(data))
        .chatch ( error => console.log (error))
        
}
    componentDidMount (){
        console.log("estas aqui!")
        this.apiCall("http://localhost:3030/api/products", this.datosProducts)
            
            }
    datosProducts = (data) =>{
        console.log (data.countByCategory.Amd)
        // this.setState (
        //     { 
        //         PcMarcas: data.data
        // })
    }
            render () {
                console.log("estoy funcionando")

    return (
        <div className="contenedorDatosProductos">
                <h1> <img src={icon} alt="icono productos"/>PC ARMADAS</h1>
                <div className="contenedorContador">
                    <div className="contador">30</div>
                    <div>
                        <p><span>{ this.state.PcMarcas}</span>INTEL</p>
                        <hr/>
                        <p><span>15</span>AMD</p>
                    </div>
                </div>
            </div>  
            );
        };
    }

Counter.propTypes = {
    

}
export default Counter;

