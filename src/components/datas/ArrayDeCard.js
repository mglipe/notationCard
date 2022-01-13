class ArrayDeCard {
    constructor(){
        this.card = [ ];
    }

    adicionarCard(titulo, descricao,categoria){
        const notas = new Notas(titulo, descricao, categoria);
        //this.card.push(notas);
        console.log(notas);
      }

      apagarCard(index){
        //this.card.splice(index, 1)
      }
}

class Notas {
    constructor(titulo, descricao, categoria){
        this.titulo = titulo;
        this.descricao = descricao ;
        this.categoria = categoria;
    }
}



export default ArrayDeCard;