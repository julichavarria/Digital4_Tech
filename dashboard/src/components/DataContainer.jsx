import React, { Component } from 'react';
import List from "./List";
import LastRegisterUser from "./LastRegisterUser";
import LastRegisterProduct from './LastRegisterProduct';
import Counter from "./Counter";
import icon_products from "../assets/images/icon_products.svg"
import icon_users from "../assets/images/icon_users.svg"
import ListProducts from './ListProducts';

class DataContainer extends Component {
    render () {
    return (
        <div className="contenedorBloques">
            <div className="contenedorDatosProductos">
                <img src={icon_products} width="80px"></img>
                <Counter 
                    api= 'products'
                    titulo= 'PC ARMADAS'
                    categoria1= 'Intel'
                    categoria2= 'Amd'
                />
                <LastRegisterProduct
                    componente= '2'
                />
                <ListProducts/>
            </div>
            <div className="contenedorDatosUsuarios">
            <img src={icon_users} width="80px"></img>
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

