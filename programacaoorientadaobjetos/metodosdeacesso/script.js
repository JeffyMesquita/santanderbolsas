class Quadrado {

  constructor(lado, altura) {
    let cor = 'blue';
    this.lado = lado;
    this.altura = altura;
    this.getColor = () => { return cor; };
    this.setColor =  (c) => { cor = c; };
  }
};

const quadrado = new Quadrado(3,4);
quadrado.cor = 'red';
console.log(quadrado.getColor());
console.log(quadrado);