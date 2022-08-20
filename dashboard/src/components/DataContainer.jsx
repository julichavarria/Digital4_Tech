import React, { Component } from 'react';
import List from "./List";
import LastRegister from "./LastRegister";
import Counter from "./Counter";


class DataContainer extends Component {
    render () {
    return (
        <div className="contenedorBloques">
            <div className="contenedorDatosProductos">
                <Counter api= 'http://localhost:3030/api/products'/>
                <LastRegister/>
                <List/>
            </div>
            <div className="contenedorDatosUsuarios">
                <Counter api='http://localhost:3030/api/users'/>
                <LastRegister/>
                <List/>
            </div>
        </div>        
            );
        };
}
    
export default DataContainer;

