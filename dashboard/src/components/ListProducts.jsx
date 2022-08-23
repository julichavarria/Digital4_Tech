import React, { Component } from 'react';


class ListProducts extends Component {
    constructor(props) {
        super (props);
        this.state = {
            listadoRegistro: '',
            inicio: 0,
            fin: 5,
        }
    }

    componentDidMount(){
        let url = "http://localhost:3030/api/products";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    listadoRegistro: data.data, //muestra el Titulo de dataContainer que a su vez apuntan a TITULO y USUARIO de la api
            })})
            .catch(e => {console.log(e)})
    }

    array (){
        let dataList = Object.values(this.state.listadoRegistro);
        return dataList;
    }

    previousPage(){
        if (this.state.inicio >= 5 ){
            this.setState({
                inicio: this.state.inicio -= 5,
                fin: this.state.fin -= 5
            })
        }
    }
    nextPage(){
        if (this.state.fin <= this.array().length ){
            this.setState({
                inicio: this.state.inicio += 5,
                fin: this.state.fin += 5
            })
        }
    }

    listar(){
        let salida = this.array().map( (produt, i) => 
            <div className="contenedorItemListado">
                <div key={ produt + i}>
                    {this.array()[i].titulo}
                </div>
                <div className="contenedorEdicion">
                    <a href={`http://localhost:3030/products/productDetail/${this.array()[i].id}`}><i className="far fa-eye"></i></a>
                    <a href={`http://localhost:3030/products/editProduct/${this.array()[i].id}`}><i className="far fa-edit"></i></a>
                    <a href={`http://localhost:3030/products/confirmDelete/${this.array()[i].id}`}><i className="fa-regular fa-trash-can"></i></a>
                </div>
            
            </div>
        )
        return salida.slice(this.state.inicio, this.state.fin)
    }

render () {
    return (
        <div className="contenedorListado">           
            <h2>LISTADO DE PRODUCTOS</h2>
            <div>{this.listar()}</div>
            <a onClick={ ()=> this.previousPage() }>Pagina Anterior</a>
            <a onClick={ ()=> this.nextPage() }>Pagina Siguiente</a>
        </div> 
        );
    };
}

export default ListProducts;






