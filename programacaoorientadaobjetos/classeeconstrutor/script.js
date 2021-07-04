class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const pessoa1 = new Pessoa('Jeferson', 33);
pessoa1.idade += 1;

console.log(pessoa1);

const pessoa2 = new Pessoa('Caio', 27);

console.log(pessoa2);