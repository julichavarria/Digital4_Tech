import React, { Component } from 'react';


class ListProducts extends Component {
    constructor(props) {
        super (props);
        this.state = {
            ultimoRegistro: '1',
        }
    }

    componentDidMount(){
        let url = "http://localhost:3030/api/products";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                ultimoRegistro: data.data, //muestra el Titulo de dataContainer que a su vez apuntan a TITULO y USUARIO de la api
            })})
            .catch(e => {console.log(e)})
    }

    array (){
        let productList = Object.values(this.state.ultimoRegistro);
        return productList;
    }
    consulta(){
        let salida = this.array().map( (produt, i) => 
                    <div className="contenedorItemListado">
                        <div key={ produt + i}>
                            {this.array()[i].titulo}
                        </div>
                        <div className="contenedorEdicion">
                            <a href={`http://localhost:3030/products/productDetail/${this.array()[i].id}`}><i className="far fa-eye"></i></a>
                            <a href={`http://localhost:3030/products/editProduct/${this.array()[i].id}`}><i className="far fa-edit"></i></a>
                            <a href={`http://localhost:3030/products/productDetail/${this.array()[i].id}`}><i className="fa-regular fa-trash-can"></i></a>
                        </div>
                    </div>
                  )
        return salida
    }

render () {
    return (
        <div className="contenedorListado">           
                <h2>LISTADO DE PRODUCTOS</h2>
                    <div>{this.consulta()}</div>
                    </div> 
            );
    };
}

export default ListProducts;






