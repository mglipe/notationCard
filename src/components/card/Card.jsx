import React,{Component} from 'react';
import './estilo.css';
import {ReactComponent as DeleteCard} from '../../assets/delete.svg';

class Card extends Component{
    render(){
        return(
            <section className='container-card'>
                <header className='container-card-header'>
                    <h3 className='container-card-titulo'>Titulo</h3>
                    <DeleteCard/>
                </header>
                <p className='container-card-descricao'>Descrição qualquer aqui</p>
            </section>
        );
    }
}

export default Card;