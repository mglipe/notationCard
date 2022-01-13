import React,{Component} from "react";
import ArrayDeCard from "./components/datas/ArrayDeCard";
import Categoria from "./components/datas/Categoria";
import Formulario from "./components/formulario";
import ListaDeCard from "./components/listadecard";
import ListaDeCategoria from "./components/listadecategoria";

class App extends Component{

  constructor(){
    super();
    this.card = new ArrayDeCard();
    this.categoria =new Categoria();
  }

  render(){
    return (
      <section>
        <Formulario
        adicionarCard={this.card.adicionarCard}
        categoria={this.categoria.categoria}/>
        <main>
          <ListaDeCard
          card={this.card.card}
          apagarCard={this.card.apagarCard}
          />
          <ListaDeCategoria
          adicionarCategoria={this.categoria.adicionarCategoria}
         />
        </main>  
      </section>
    );
  }
}

export default App;
