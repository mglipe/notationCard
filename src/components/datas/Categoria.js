class Categoria{
    constructor(){
        this.categoria=[];
        this._inscritos=[];
    }

    _inscrever(func){
        this._inscritos.push(func);
    }

    notificar(){
        this._inscritos.forEach(func=>{
            func(this.categoria);
        })
    }

    adicionarCategoria(categoria){
        this.categoria.push(categoria);
        console.log(this.categoria);
        this.notificar();
    
      }

}


export default Categoria;