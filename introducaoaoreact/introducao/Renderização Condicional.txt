Renderização condicional
Vimos que o estado de um componente guarda valores que podem ser usados para serem mostrados na tela ou alterados para que o componente reaja a eventos.

Agora usaremos um valor do estado para renderizar condicionalmente JSX diferentes.

Crie um App4 e vamos ao código:

import React from 'react';

class App4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: undefined,
      txtNome: ''
    }
  }
  changeNome = (evt) => {
    this.setState({ txtNome: evt.target.value });
  }
  persistTxtNome = () => {
    this.setState({nome : this.state.txtNome});
  }
  render() {
    return (
      <>
      </>
    );
  }
}

export default App4;
Como na aula anterior temos um componente com um estado que contém um nome, agora de valor padrão undefined. Também temos um txtNome que gravará alterações em um campo de texto.

O componente contém um método para alterar o nome e um método para pegar o valor de txtNome e colocar em nome.

Limpamos o método render porque é nele que vamos nos focar.

Uma lição muito importante em JSX é que estamos retornando um valor (nosso JSX inteiro). Expressões de lógica de programação que não produzam valores, não podem aparecer dentro do JSX. Isso inclue os condicionais if e else, switch e os laços todos.

No entanto, se desejarmos usar um condicional é possível: Ele deve aparecer antes do return no método render ou podemos usar condicional ternário.

Vamos modificar o nosso método render para ter telas diferentes se tivermos ou não o nome para mostrar:

import React from 'react';

class App4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: undefined,
      txtNome: ''
    }
  }
  changeTxtNome = (evt) => {
    this.setState({ txtNome: evt.target.value });
  }
  persistTxtNome = () => {
    this.setState({nome : this.state.txtNome});
  }
  render() {
    if(!this.state.nome){
      return (
        <>
          Nome: <input type='text' onChange={this.changeTxtNome}/>
          <button onClick={this.persistTxtNome}>Salvar</button>
        </>
      )
    }
    else{
      return <p>Olá {this.state.nome}</p>
    }
  }
}

export default App4;
Observe que pela limitação descrita tivemos que fazer dois returns.

É comum no React, até porque é boa prática evitar múltiplos return quando possível, fazer uma função que renderiza uma versão do componente e outra que renderiza a outra e decidir com ternário qual usar.

Seria assim:

import React from 'react';

class App4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: undefined,
      txtNome: ''
    }
  }
  changeTxtNome = (evt) => {
    this.setState({ txtNome: evt.target.value });
  }
  persistTxtNome = () => {
    this.setState({ nome: this.state.txtNome });
  }
  render() {
    const renderForm = () => {
      return (
        <>
          Nome: <input type='text' onChange={this.changeTxtNome} />
          <button onClick={this.persistTxtNome}>Salvar</button>
        </>
      )
    };

    const renderText = () => (<p>Olá {this.state.nome}</p>);

    return !this.state.nome ? renderForm() : renderText();
  }
}

export default App4;
Vale ressaltar nesse exemplo que tivemos que fazer um campo no state para guardar os valores do campo de texto enquanto o botão não era clicado, para só então jogar esse valor no campo nome.

Em seguida veremos ciclo de vida de componentes tipo classe e em que momento podemos fazer chamadas externas para obter dados.