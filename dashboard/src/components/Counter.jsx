import React, { Component } from 'react';
import icon from "../assets/images/icon_products.svg"
//import propTypes from "propTypes"


class Counter extends Component {
    constructor(props) {
        super (props);
        this.state = {
            apiUrl: props.api,
            //totalCategoria: '',
            totalRegistros: ''
        }
    }

    componentDidMount(){
        fetch(this.state.apiUrl)
            .then(response => response.json())
            .then(data => {this.setState({
                //totalCategoria: data.countByCategory, 
                totalRegistros: data.total
            })})
            .catch(e => {console.log(e)})
        }

    // apiCall (url, consecuencia){
    //     fetch (url)
    //         .then( response => response.json())
    //         .then ( data => consecuencia(data))
    //         .chatch ( error => console.log (error))
            
    // }

    // componentDidMount (){
    //     this.apiCall("http://localhost:3030/api/products", this.datosProducts2)
    // }

    // datosProducts2 = (data) => {
    //     return 'datosProducts2'
    // }

    // datosProducts = (data) =>{
    //     console.log (data)
    //     this.setState (
    //         { 
    //             PcMarcas: 'hola PcMacas'
                
    //     })
    // }

    render () {
        return (
            <div className="contenedorDatosProductos">
                    <h1> <img src={icon} alt="icono productos"/>PC ARMADAS</h1>
                    <div className="contenedorContador">
                        <div className="contador">{this.state.totalRegistros}</div>
                        <div>
                            {/* <p><span> {this.state.totalCategoria.Intel} </span>INTEL</p>
                            <hr/>
                            <p><span>{this.state.totalCategoria.Amd}</span>AMD</p> */}
                        </div>
                    </div>
                </div>  
            );
        };
    }

export default Counter;

