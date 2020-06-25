class Negociacao {
  // Colocar os parametros necessariso apra utilizar a classe
  constructor(data, quantidade, valor) {
    //'Underline' nas variáveis: indicar que essas propriedades só podem ser alteradas pelos métodos da classe.
    
    // retorna um objeto com a data real
    this._data = new Date(data.getTime());
    this._quantidade = quantidade;
    this._valor = valor;

    // Congelar os valores
    Object.freeze(this);
  }

  // Por não possibilitar métodos de acesso, criamos métodos acessadores 
  
  // Função que apresenta o resultado da data
  get data() {
    // retornar um código com a data real
    return new Date(this._data.getTime());
  }
  // Função que apresenta o resultado da quantidade
  get quantidade() {
    return this._quantidade;
  }
  // Função que apresenta o resultado do valor
  get valor() {
    return this._valor;
  }
  // Função que apresenta o resultado do volume
  get volume() {
    // retornar o resultado da equação
    return this._quantidade * this._valor;
  }
}
