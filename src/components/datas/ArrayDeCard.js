class ArrayDeCard {
    constructor(){
        this.card = [ ];
        this._inscritos=[];
    }

    _inscrever(func){
        this._inscritos.push(func);
    }

    notificar(){
        this._inscritos.forEach(fun=>{
            fun(this.card);
        })
    }
    //ciclo de vida dos objetos

    adicionarCard(titulo, descricao,categoria){
        const notas = new Notas(titulo, descricao, categoria);
        this.card.push(notas);
        console.log(this.card);
        this.notificar();
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