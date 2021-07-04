class Quadrado {
  
  constructor(lado, altura) {
    this._cor = 'blue'; //O Underline '_' serve para "esconder" a propriedade
    this.lado = lado;
    this.altura = altura;    
  }

  get cor() { return this._cor; };
  set cor(cor) { this._cor = cor; }; 
};

const quadrado = new Quadrado(3,4);
console.log(quadrado.cor);
quadrado.cor = 'red';
console.log(quadrado.cor);
