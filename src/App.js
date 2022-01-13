import React,{Component} from "react";
import Formulario from "./components/formulario";
import ListaDeCard from "./components/listadecard";
import ListaDeCategoria from "./components/listadecategoria";

class App extends Component{

  constructor(){
    super();
    this.card = [];
    this.categoria =[];
    this.state = {};
  }

  adicionarCard(titulo, descricao,categoria){
    const notas = {titulo, descricao, categoria};
    this.card.push(notas);
    this.setState({cards: this.card});
    console.log(this.card);
  }

  apagarCard(index){
    this.card.splice(index, 1)
    this.setState({cards: this.card});
  }

  adicionarCategoria(categoria){
    this.categoria.push(categoria);
    console.log(this.categoria);
  }

  render(){
    return (
      <section>
        <Formulario
        adicionarCard={this.adicionarCard.bind(this)}/>
        <ListaDeCard
        card={this.card}
        apagarCard={this.apagarCard.bind(this)}
        />
        <ListaDeCategoria
        adicionarCategoria={this.adicionarCategoria.bind(this)}
        categoria={this.categoria}/>
      </section>
    );
  }
}

export default App;
