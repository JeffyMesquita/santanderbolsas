function criaQuadrado(base, altura) {
  let cor = 'blue';

  return {
    base, 
    altura,
    getColor: function() {return cor;}
  };
}

const quadrado = criaQuadrado(3,4);
quadrado.cor = 'red';
console.log(quadrado.getColor());