import React, { Component } from 'react';
import icon_mother from "../assets/images/icon_mother.svg"
import icon_procesador from "../assets/images/icon_procesador.svg"
import icon_ram from "../assets/images/icon_ram.svg"
import icon_video from "../assets/images/icon_video.svg"
import icon_disco from "../assets/images/icon_disco.svg"
import icon_open from "../assets/images/icon_open.svg"
import icon_close from "../assets/images/icon_close.svg"

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
                    <a onClick={ () => this.cambiarComponente(2) }><img src={icon_close} alt="Marca"/></a>
                        <a onClick={ () => this.cambiarComponente(3) }><img src={icon_procesador} alt="procesador"/></a>
                        <a onClick={ () => this.cambiarComponente(4) }><img src={icon_mother} alt="mother"/></a>
                        <a onClick={ () => this.cambiarComponente(5) }><img src={icon_video} alt="video"/></a>
                        <a onClick={ () => this.cambiarComponente(6) }><img src={icon_ram} alt="ram"/></a>
                        <a onClick={ () => this.cambiarComponente(7) }><img src={icon_disco} alt="disco"/></a>
                        <a onClick={ () => this.cambiarComponente(8) }><img src={icon_open} alt="detalle"/></a>
                    </div>
                </div>
            </div>
            );
        };
    }
    
export default LastRegisterProduct;