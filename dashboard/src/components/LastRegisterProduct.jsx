import React, { Component } from 'react';

class LastRegisterProduct extends Component {
    constructor(props) {
        super (props);
        this.state = {
            ultimoRegistro: '',
            componente: '',
        }
    }

    componentDidMount(){
        let url = "http://localhost:3030/api/products";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                ultimoRegistro: data.ultimoRegistro, //muestra el Titulo de dataContainer que a su vez apuntan a TITULO y USUARIO de la api
                componente: 2,
            })})
            .catch(e => {console.log(e)})
    }
    
    array (){
        let lastProduct = Object.values(this.state.ultimoRegistro);
        console.log(this.state.componente)
        return lastProduct;
    }

    cambiarComponente (valor){
        this.setState({
            componente: this.state.valor = valor
        })
    }

    render () {
        return (
            <div>
                <h2>ÚLTIMA COMPUTADORA CARGADA</h2>
                <div className="contenedorUltimoItem">
                    <h3>{this.state.ultimoRegistro.titulo}</h3>
                    <p> {this.array()[this.state.componente]} </p>
                    <div className="contenedorEdicion">
                        <a onClick={ () => this.cambiarComponente(2) }><i className="far fa-eye"></i></a>
                        <a onClick={ () => this.cambiarComponente(3) }><i className="far fa-eye"></i></a>
                        <a onClick={ () => this.cambiarComponente(4) }><i className="far fa-eye"></i></a>
                        <a onClick={ () => this.cambiarComponente(5) }><i className="far fa-eye"></i></a>
                        <a onClick={ () => this.cambiarComponente(6) }><i className="far fa-eye"></i></a>
                        <a onClick={ () => this.cambiarComponente(7) }><i className="far fa-eye"></i></a>
                        <a onClick={ () => this.cambiarComponente(8) }><i className="far fa-eye"></i></a>
                    </div>
                </div>
            </div>
            );
        };
    }
    
export default LastRegisterProduct;