import React, {Component} from "react";
import Card from "../card";

class ListaDeCard extends Component{
    render(){
        return(
            <ul>
                <li><Card/></li>
            </ul>
        );
    }
}

export default ListaDeCard;