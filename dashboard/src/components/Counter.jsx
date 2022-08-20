import React, { Component } from 'react';
import icon from "../assets/images/icon_products.svg"
//import propTypes from "propTypes"


class Counter extends Component {
    constructor(props) {
        super (props);
        this.state = {
            apiUrl: props.api,
            categoria1: props.categoria1,
            categoria2: props.categoria2,
            totalCategoria1: '',
            totalCategoria2: '',
            totalRegistros: '',
            
        }
    }

    componentDidMount(){
        fetch(this.state.apiUrl)
            .then(response => response.json())
            .then(data => {this.setState({
                totalCategoria1: data.countByCategory[this.state.categoria1],
                totalCategoria2: data.countByCategory[this.state.categoria2],
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
                    <h1> <img src={icon} alt="icono productos"/>{this.props.titulo}</h1>
                    <div className="contenedorContador">
                        <div className="contador">{this.state.totalRegistros}</div>
                        <div>
                            <p><span> {this.state.totalCategoria1} </span>INTEL</p>
                            <hr/>
                            <p><span>{this.state.totalCategoria2}</span>AMD</p>
                        </div>
                    </div>
                </div>  
            );
        };
    }

export default Counter;

