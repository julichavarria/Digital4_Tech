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
                    api= 'products'
                    titulo= 'PC ARMADAS'
                    categoria1= 'Intel'
                    categoria2= 'Amd'
                />
                <LastRegister/>
                <List/>
            </div>
            <div className="contenedorDatosUsuarios">
                <Counter 
                    api='users'
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

