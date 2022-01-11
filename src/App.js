import React,{Component} from "react";
import Formulario from "./components/formulario";
import ListaDeCard from "./components/listadecard";

class App extends Component{

  constructor(){
    super();
    this.card = [];
    this.state = {};
  }

  adicionarCard(titulo, descricao){
    const notas = {titulo, descricao};
    this.card.push(notas);
    this.setState({cards: this.card});
    console.log(this.card);
  }

  apagarCard(index){
    this.card.splice(index, 1)
    this.setState({cards: this.card});
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
      </section>
    );
  }
}

export default App;
