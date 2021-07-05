Estado
A palavra estado vem das máquinas de estado, que foram precursoras do computador moderno. A máquina de estado mais simples é um interruptor, nele temos apenas dois estados possíveis: ligado ou desligado. Em um dado momento o interruptor precisa apresentar um, e somente um, desses estados possíveis.

Um exemplo ainda simples, mas um pouco mais complexo, é um semáforo. Ele tem 3 estados possíveis: verde, amarelo e vermelho. Novamente, em um dado momento, um e apenas um desses estados possíveis é apresentado.

Quando falamos de programação moderna, a quantidade de estados é muito mais difícil de calcular do que nas máquinas de estado. Imagine um objeto que tenha apenas um número inteiro dentro dele. Esse exemplo simples já apresenta 2³² estados possíveis (inteiros usam 32 bits de memória). Se houver uma string piora mais, os estados tenderiam ao infinito porque a string não tem limite de tamanho. Sendo assim, os estados possíveis são limitados pela capacidade de endereçamento da máquina ou da memória ram disponível, o que for menor.

Sendo assim, não vamos nos preocupar na maioria dos casos em descobrir quantos estados possíveis existem, mas apenas em armazenar ou modificar o estado atual do componente.

Para criar um componente com estado no React é fácil, no construtor faremos um modelo do estado com valores padrão. Usaremos então um método chamado setState() quando quisermos alterar o estado.

Crie um App3.js com o seguinte código:

import React from 'react';

class App3 extends React.Component{
  constructor(props){
    super(props);
    this.state = { nome : undefined }
  }
  render(){
    return(
      <p>Olá {this.state.nome}</p>
    );
  }
}

export default App3;
O estado só deve ser atribuído diretamente uma vez no construtor. Todas as modificações subsequentes devem ser feitas pelo método setState(), pois ele indica ao React que o componente deve se atualizar na tela.

Vamos adicionar um campo de texto para que o usuário possa modificar o valor do nome no estado do componente:

import React from 'react';

class App3 extends React.Component{
  constructor(props){
    super(props);
    this.state = { nome : '' }
  }
  render(){
    return(
      <>
        nome: <input type='text' value={this.state.nome}/>
        <p>Olá {this.state.nome}</p>
      </>
    );
  }
}

export default App3;
Tente escrever no campo, o que acontece?

O campo não permite que você altere o valor porque vinculamos ele ao valor do estado quando dissemos value={this.state.nome}.

Como fazemos então para alterar os valores?

Precisamos vincular o evento de change desse campo ao estado, para isso faremos uma função.

import React from 'react';

class App3 extends React.Component{
  constructor(props){
    super(props);
    this.state = { nome : '' }
  }
  changeNome = function(evt){
    this.setState({ nome : evt.target.value});
  }
  render(){
    return(
      <>
        nome: <input type='text' value={this.state.nome} onChange={this.changeNome}/>
        <p>Olá {this.state.nome}</p>
      </>
    );
  }
}

export default App3;
Fizemos uma função que vai receber por parâmetro o objeto Event do JavaScript (o mesmo que receberíamos em JavaScript tradicional) e de dentro dele pegamos o target, que é o elemento HTML que gerou o evento.

De dentro do elemento, no caso de campos de texto, o valor do campo está em value.

Usamos a função setState e passamos para ela um objeto com a alteração que queremos fazer: no caso, queremos alterar o campo nome do estado para o valor do campo.

Esse código produz um erro, não podemos passar batido por ele. Quando fazemos métodos no React, em componentes tipo classe, sempre temos que fazer o bind do this.

Javascript tem um problema, funções tem sempre uma variável chamada this, mas ela muda de significado de função para função. Esse é uma das maiores dificuldades dessa linguagem.

Precisamos dizer para a função changeNome que o this dela deve ser o apontamento para o mesmo this no contexto de classe, um "apontamento para si mesmo". Se esquecer esse passo, nenhum método que utilize o this para ler/modificar o estado ou as props funcionará.

Uma linha resolve esse problema, basta adicionar ao construtor:

this.changeNome = this.changeNome.bind(this);
Se isso parece uma gambiarra para você, uma alternativa é usar arrow functions para os métodos, como elas nunca alteram o contexto do this elas funcionam nesse contexto sem gerar o problema que tivemos.

Solução 1

import React from 'react';

class App3 extends React.Component{
  constructor(props){
    super(props);
    this.state = { nome : '' }
    this.changeNome = this.changeNome.bind(this);
  }
  changeNome = function(evt){
    this.setState({ nome : evt.target.value});
  }
  render(){
    return(
      <>
        nome: <input type='text' value={this.state.nome} onChange={this.changeNome}/>
        <p>Olá {this.state.nome}</p>
      </>
    );
  }
}

export default App3;
Solução 2:

import React from 'react';

class App3 extends React.Component{
  constructor(props){
    super(props);
    this.state = { nome : '' }
  }
  changeNome = (evt) => {
    this.setState({ nome : evt.target.value});
  }
  render(){
    return(
      <>
        nome: <input type='text' value={this.state.nome} onChange={this.changeNome}/>
        <p>Olá {this.state.nome}</p>
      </>
    );
  }
}

export default App3;
Observe que ao digitar qualquer letra o estado já vai se modificando e todos os elementos HTML que utilizam aquele estado são atualizados imediatamente.

Uma pequena observação sobre o setState(): não é necessário passar o objeto completo do estado para o setState, ele é inteligente o suficiente para fazer modificações parciais.

Ou seja se temos um estado como { nome : 'teste', idade : 20 } e fazemos setState({ idade : 21 }), apenas a idade é atualizada, o estado não é substituído pelo objeto que passamos perdendo o nome.

Isso é bastante prático!

Em seguida veremos como podemos usar o estado para renderizar condicionalmente coisas diferentes na tela.