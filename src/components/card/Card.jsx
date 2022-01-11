import React,{Component} from 'react';
import './estilo.css';
import {ReactComponent as DeleteCard} from '../../assets/delete.svg';

class Card extends Component{

    deleteCard(){
        const indice = this.props.indice;
        this.props.apagarCard(indice);
    }

    render(){
        return(
            <section className='container-card'>
                <header className='container-card-header'>
                    <h3 className='container-card-titulo'>{this.props.titulo}</h3>
                    <DeleteCard
                    className='delete-card'
                    onClick={this.deleteCard.bind(this)}/>
                </header>
                <p className='container-card-descricao'>{this.props.descricao}</p>
            </section>
        );
    }
}

export default Card;