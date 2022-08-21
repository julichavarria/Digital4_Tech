import React, { Component } from 'react';
import List from "./List";
import LastRegister from "./LastRegister";
import Counter from "./Counter";


class DataContainer extends Component {
    render () {
    return (
        <div className="contenedorBloques">
            <div className="contenedorDatosProductos">
                <Counter 
                    api= 'http://localhost:3030/api/products'
                    titulo= 'PC ARMADAS'
                    categoria1= 'Intel'
                    categoria2= 'Amd'
                />
                <LastRegister/>
                <List/>
            </div>
            <div className="contenedorDatosUsuarios">
                <Counter 
                    api='http://localhost:3030/api/users'
                    titulo= 'USUARIOS'
                    categoria1= 'Administrador'
                    categoria2= 'Cliente'
                />
                <LastRegister/>
                <List/>
            </div>
        </div>        
            );
        };
}
    
export default DataContainer;

