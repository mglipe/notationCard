import React, {Component} from "react";
import './estilo.css';

class ListaDeCategoria extends Component{

    _adicionarCategoria(event){
        if(event.key === "Enter"){
            const categoria = event.target.value;
            this.props.adicionarCategoria(categoria);
        }
    }


    render(){
        return(
            <div className="container-categoria">
                <input className="element-input" type="text" placeholder="categoria" onKeyUp={this._adicionarCategoria.bind(this)}></input>
            </div>
        );
    }
}

export default ListaDeCategoria;