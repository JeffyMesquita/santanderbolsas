Props
Primeiramente vamos organizar um pouco melhor nosso projeto criando uma pasta dentro de /src chamada components assim todo componente será criado lá e não solto dentro do /src:



Vamos agora arrastar o App.js para lá. Isso vai gerar um erro porque o index.js está procurando pelo App.js na pasta antiga.

Vamos corrigir o arquivo index.js:

A linha que dizia:

import App from './App';
Deve ser alterada para:

import App from './components/App';
Agora imagine que você quer fazer um componente reutilizável. Por enquanto, vimos componentes com valores fixos, constantes. Não são muitas as possibilidades de reutilização de um componente constante.

Na programação, sempre que desejamos reutilizar algo tornamos o código mais genérico e parametrizamos suas informações. É o que fazemos com funções por exemplo. Uma função que soma 1 e 2 é muito menos útil e reutilizável do que uma que soma qualquer número...

Podemos aplicar a mesma lógica nos componentes do React. Imagine um componente que produz uma caixinha com bordas na tela e tem um título e um texto. Se parametrizarmos o título e o texto poderemos usar essa caixinha em diversas partes de nossa aplicação, até mesmo em outras aplicações!

No React, esses "parâmetros" de um componente são chamados de "props".Podemos receber props pelo construtor do componente.

Vamos ver como fazer isso:

Primeiro crie um arquivo App2.js na pasta components, nele vamos criar um construtor que recebe as props por parâmetro e chama o construtor da super classe.

import React from 'react';

class App2 extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return ('OK');
  }
}

export default App2;
Vamos agora alterar o render para usar duas props, uma chamada title e uma chamada text esses nomes são arbitrários, pode ser o que você desejar.

import React from 'react';

class App2 extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
    <div className="box">
        <div className="title">{this.props.title}</div>
        <div className="text">{this.props.text}</div>
    </div>);
  }
}

export default App2;
Quando for utilizar o componente App2 você pode passar os valores dos props por nome da mesma forma que passaria atributos html.

<App2 title='meu título' text='meu texto'/>
Se seu texto for grande ou contiver HTML ou qualquer outra coisa que torne-o inconveniente para passar por props (porque não poderia ser um atributo na tag), podemos usar outra abordagem.

<div className="text">{this.props.text}</div>
Para:

<div className="text">{this.props.children}</div>
Agora você pode usar seu componente assim:

<App2 title="Isso é um teste">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officia, quam sed officiis libero repellat voluptate dolores amet molestiae nostrum aperiam inventore veritatis aut quaerat, tenetur laudantium natus? Saepe, minus!
</App2>
Qualquer coisa que você colocar entre a abertura e o fechamento das tags do componente serão passados como props.children para o componente! Isso inclui HTML, outros componentes, e até javascript, contanto que esteja entre chaves.

Em seguida veremos como criar componentes com estado, ou seja, com valores internos, que quando modificados fazem com que o componente se renderize novamente na tela.