import React, {Component} from "react";
import Header from "./Header";
import DataContainer from "./DataContainer";


class Content extends Component {
    render (){
        return(
            <div>
            <Header/>
            <DataContainer/>
            </div>
        )
    }
}

export default Content;