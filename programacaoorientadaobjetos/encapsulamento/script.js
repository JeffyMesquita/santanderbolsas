function Quadrado(base, altura) {
  this.base = base;
  this.altura = altura;
  let cor = 'blue';
};

const quadrado = new Quadrado(3,4);
quadrado.cor = 'red';
console.log(quadrado.cor);

