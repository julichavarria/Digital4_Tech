import React, { Component } from 'react';
//import icon_products from "../assets/images/icon_products.svg"
//import icon_users from "../assets/images/icon_users.svg"
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
            icono: 'icon_' + props.api
        }
    }

    componentDidMount(){
        let url = "http://localhost:3030/api/" + this.state.apiUrl;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                totalCategoria1: data.countByCategory[this.state.categoria1], //muestra numero de countByCategory[Intel] y [Administrador]
                totalCategoria2: data.countByCategory[this.state.categoria2],
                totalRegistros: data.total
            })})
            .catch(e => {console.log(e)})
        }

    render () {
        return (
            <div className="contenedorDatosProductos">
                    <h1> <img src={this.state.icono} alt="icono"/>{this.props.titulo}</h1>
                    <div className="contenedorContador">
                        <div className="contador">{this.state.totalRegistros}</div>
                        <div>
                            <p><span> {this.state.totalCategoria1} </span>{this.props.categoria1}</p>
                            <hr/>
                            <p><span>{this.state.totalCategoria2}</span>{this.props.categoria2}</p>
                        </div>
                    </div>
                </div>  
            );
        };
    }

export default Counter;

