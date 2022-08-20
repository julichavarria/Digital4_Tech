import React, { Component } from 'react';


class List extends Component {
render () {
return (
    <div className="contenedorListado">           
                <div className="contenedorItemListado">
                    <div>PRODUCTO NUMERO 1</div>
                    <div className="contenedorEdicion">
                        <a href="#"><i className="far fa-eye"></i></a>
                        <a href="#"><i className="far fa-edit"></i></a>
                        <a href="#"><i className="fa-regular fa-trash-can"></i></a>
                    </div>
                </div> 
            </div>
        );
    };
}

export default List;






