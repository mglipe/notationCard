import React, {Component} from "react";
import Card from "../card";
import './estilo.css'

class ListaDeCard extends Component{
    render(){
        return(
            <ul className="lista-card">
                {this.props.card.map((card, index)=>{
                    return <li key={index}>
                        <Card
                        indice={index}
                        titulo={card.titulo}
                        descricao={card.descricao}
                        apagarCard={this.props.apagarCard}/>
                        </li>
                })}
            </ul>
        );
    }
}

export default ListaDeCard;