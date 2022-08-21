import React, { Component } from 'react';
import List from "./List";
import LastRegisterUser from "./LastRegisterUser";
import LastRegisterProduct from './LastRegisterProduct';
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
                <LastRegisterProduct
                    componente= '2'
                />
                <List/>
            </div>
            <div className="contenedorDatosUsuarios">
                <Counter 
                    api='users'
                    titulo= 'USUARIOS'
                    categoria1= 'Administrador'
                    categoria2= 'Cliente'
                />
                <LastRegisterUser
                    componente= '2'
                />
                <List/>
            </div>
        </div>        
            );
        };
}
    
export default DataContainer;

