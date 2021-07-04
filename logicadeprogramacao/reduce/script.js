const vetor = [1,2,3,4,5,6];

const soma = vetor.reduce((estado, item) => estado * item, 1);

console.log(soma);