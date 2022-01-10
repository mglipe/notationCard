import React,{Component} from "react";
import Formulario from "./components/formulario";
import ListaDeCard from "./components/listadecard";

class App extends Component{

  render(){
    return (
      <section>
        <Formulario/>
        <ListaDeCard/>
      </section>
    );
  }
}

export default App;
