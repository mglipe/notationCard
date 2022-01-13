import React, {Component} from "react";
import "./estilo.css";
import {Button} from 'reactstrap';

class Formulario extends Component{

    constructor(props){
        super(props);
        this.titulo = "";
        this.descricao = "";
        this.categoria = "Sem Categoria";
    }

    _handlerMudarTitulo(event){
        this.titulo = event.target.value;
        console.log(event.target.value);
    }

    _handlerMudarDescricao(event){
        this.descricao = event.target.value;
        console.log(event.target.value);
    }

    _handlerMudarCategoria(event){
        this.categoria = event.target.value;
    }

    adicionarCard(event){
        event.preventDefault();
        this.props.adicionarCard(this.titulo, this.descricao, this.categoria);
    }




    render(){
        return(
                <form className="container-form" onSubmit={this.adicionarCard.bind(this)}>
                    <select className="container-form-select"
                    onChange={this._handlerMudarCategoria.bind(this)}>
                        <option value="">Sem Categoria</option>
                    </select>
                    <div className="container-form-div">
                        <input
                        className="container-form-titulo"
                        type="text"
                        placeholder="Titulo"
                        onChange={this._handlerMudarTitulo.bind(this)}
                        />
                        <textarea
                        className="container-form-descricao"
                        rows={5}
                        placeholder="Digite Aqui"
                        onChange={this._handlerMudarDescricao.bind(this)}/>
                        <Button
                        className="container-form-button" color="danger">criar nota</Button>
                    </div>
                </form>
        );
    }
}

export default Formulario;