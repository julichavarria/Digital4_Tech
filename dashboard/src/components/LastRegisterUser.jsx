import React, { Component } from 'react';
import icon_name from "../assets/images/icon_name.svg"
import icon_mail from "../assets/images/icon_mail.svg"
import icon_rol from "../assets/images/icon_rol.svg"
import icon_open from "../assets/images/icon_openuser.svg"

class LastRegisterUser extends Component {
    constructor(props) {
        super (props);
        this.state = {
            ultimoRegistro: '',
            componente: '',
        }
    }

    componentDidMount(){
        let url = "http://localhost:3030/api/users";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                ultimoRegistro: data.ultimoRegistro, //muestra el Titulo de dataContainer que a su vez apuntan a TITULO y USUARIO de la api
                componente: 5,
             
            })})
            .catch(e => {console.log(e)})
    }
    
    array (){
        let lastUser = Object.values(this.state.ultimoRegistro);
        return lastUser;
    }

    cambiarComponente (valor){
        this.setState({
            componente: this.state.valor = valor
        })
    }

    render () {
        return (
            <div>
                <h2>ÚLTIMO USUARIO CARGADO</h2>
                <div className="contenedorUltimoItem">
                    <h3>{this.state.ultimoRegistro.usuario}</h3>
                    <p> 
                    {
                    this.state.componente == 6 ? <a href={this.array()[this.state.componente]}>{this.array()[this.state.componente]}</a> : 
                    this.state.componente == 2 ? (this.array()[2] +" "+ this.array()[3]) : this.array()[this.state.componente]
                    } </p>
                    <div className="contenedorEdicion">
                        <a onClick={ () => this.cambiarComponente(5) }><img src={icon_rol} alt="rol"/></a>
                        <a onClick={ () => this.cambiarComponente(2) }><img src={icon_name} alt="nombre"/></a>
                        <a onClick={ () => this.cambiarComponente(4) }><img src={icon_mail} alt="mail"/></a>
                        <a onClick={ () => this.cambiarComponente(6) }><img src={icon_open} alt="detalle"/></a>
                    </div>
                </div>
            </div>
            );
        };
    }
    
export default LastRegisterUser;