class Quadrado{
  constructor(base, altura, cor) {
    if(isNaN(base) || isNaN(altura)) {
      return "Informação não númerica";
    }
    this.base = base;
    this.altura = altura;
    this.cor = undefined;
  }
};

const quadrado = new Quadrado(11, 12);
quadrado.cor = 'Azul';
console.log(quadrado);
