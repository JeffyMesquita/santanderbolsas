class Quadrado{
  constructor(base, altura){
    if((isNaN(base)) || isNaN(altura)) throw "Informação não numérica.";
    this.base = base;
    this.altura = altura;
    this.cor = undefined;
  }
  calculaArea() {
    return this.base * this.altura;
  }

  duplicaBase() {
    this.base = 2 * this.base;
  }

  imprimir() {
    return `<div style='width:${this.base}px;height:${this.altura}px;        background-color:${this.cor || "blue"}'></div>`;
  }
};

const quadrado = new Quadrado(11, 12);
quadrado.duplicaBase();
console.log(quadrado.calculaArea());

