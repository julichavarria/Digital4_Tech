import React, { Component } from 'react';
import List from "./List";
import LastRegister from "./LastRegister";
import Counter from "./Counter";


class DataContainer extends Component {
    render () {
    return (
        <div className="contenedorBloques">
            <div className="contenedorDatosProductos">
                <Counter/>
                <LastRegister/>
                <List/>
            </div>
            <div className="contenedorDatosUsuarios">
                <Counter/>
                <LastRegister/>
                <List/>
            </div>
        </div>        
            );
        };
}
    
export default DataContainer;

