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
        adicionarCard={this.card.adicionarCard.bind(this.card)}
        categoria={this.categoria.categoria}/>
        <main>
          <ListaDeCard
          card={this.card.card}
          apagarCard={this.card.apagarCard.bind(this.card)}
          />
          <ListaDeCategoria
          adicionarCategoria={this.categoria.adicionarCategoria.bind(this.categoria)}
         />
        </main>  
      </section>
    );
  }
}

export default App;
