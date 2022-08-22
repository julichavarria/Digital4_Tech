import React, { Component } from 'react';

class LastRegister extends Component {
    constructor(props) {
        super (props);
        this.state = {
            apiUrl: props.api, //aca llega PRODUCTS y USERS
            categoria1: props.categoria1, // aca llegan intel y administrador
            categoria2: props.categoria2, //aca llega amd y cliente
            titulo: props.titulo, //aca llega TITULO y USUARIO
            ultimoRegistro: '',
        }
    }

    componentDidMount(){
        let url = "http://localhost:3030/api/" + this.state.apiUrl;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                ultimoRegistro: data.ultimoRegistro[this.state.titulo], //muestra el Titulo de dataContainer que a su vez apuntan a TITULO y USUARIO de la api
            })})
            .catch(e => {console.log(e)})
        }
    
    render () {
        return (
            <div>
                <h2>ÚLTIMO {this.state.apiUrl} CARGADO</h2>
                <div className="contenedorUltimoItem">
                    <h3>{this.state.ultimoRegistro}</h3>
                    <p>INTEL</p>
                </div>
            </div>
            );
        };
    }
    
export default LastRegister;

