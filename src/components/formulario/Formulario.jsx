import React, {Component} from "react";
import "./estilo.css";

class Formulario extends Component{
    render(){
        return(
            <form className="container-form">
                <select className="container-form-select">
                    <option value="">Sem Categoria</option>
                </select>
                <div className="container-form-div">
                    <input
                    className="container-form-input"
                    type="text"
                    placeholder="Titulo"
                    />
                    <textarea
                    className="container-form-textarea"
                    rows={5}
                    placeholder="Digite Aqui"/>
                    <button
                    className="container-form-button">criar nota</button>
                </div>    
            </form>
        );
    }
}

export default Formulario;