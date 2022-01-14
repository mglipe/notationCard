import React, {Component} from "react";
import "./estilo.css";

class Formulario extends Component{

    constructor(props){
        super(props);
        this.titulo = "";
        this.descricao = "";
    }

    _handlerMudarTitulo(event){
        this.titulo = event.target.value;
        console.log(event.target.value);
    }

    _handlerMudarDescricao(event){
        this.descricao = event.target.value;
        console.log(event.target.value);
    }

    adicionarCard(event){
        event.preventDefault();
        this.props.adicionarCard(this.titulo, this.descricao);
    }

    render(){
        return(
            <form className="container-form" onSubmit={this.adicionarCard.bind(this)}>
                <select className="container-form-select">
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
                    <button
                    className="container-form-button">criar nota</button>
                </div>
                <div className="container-form-categoria">
                    <input
                    type="text"
                    className="container-form-categoria"
                    placeholder="categoria" /> 
                </div>   
            </form>
        );
    }
}

export default Formulario;