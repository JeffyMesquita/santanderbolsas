Ciclo de Vida
Componentes do React tem um ciclo de vida que está representado abaixo:



Cada passo do ciclo de vida está representado por um diagrama nessa imagem. Se desejarmos fazer algum processamento durante uma das etapas do ciclo de vida do componente basta adicionar um método com o mesmo nome.

Por exemplo, o momento mais comum de interagir com o ciclo de vida de um componente é o componentWillMount que roda pouco antes do componente renderizar na tela.

No entanto, novas versões do React desencorajam o uso desse método e recomendam fazer lógicas pré-construção do componente no construtor da classe ou em componentDidMount().

É muito comum fazer acesso a dados para popular o estado do componente usando esses métodos.

Vamos fazer um exemplo nesse sentido.

Crie um App5 com o mesmo conteúdo do App5 e adicione o método componentDidMount():

import React from 'react';

class App5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: undefined,
      txtNome: ''
    }
  }

  componentDidMount = () => {
    
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

export default App5;
Vamos usar o método para procurar no sessionStorage do navegador se ele tem um valor para o nome.

componentDidMount = () => {
const nome = sessionStorage.getItem('nome');
if(nome) this.setState({nome});
}
Vamos aproveitar para colocar o nome no sessionStorage quando o usuário clicar no botão:

persistTxtNome = () => {
  this.setState({ nome: this.state.txtNome });
  sessionStorage.setItem('nome', this.state.txtNome);
}
Se você preencher seu nome, clicar no botão e recarregar a tela, observe que ele se mantém. O componentDidMount buscou o valor no sessionStorage do navegador e alterou o estado assim que o componente renderizou.

Você pode usar qualquer um dos métodos da imagem mas temos que fazer algumas ressalvas:

Já existe uma marcação do método componentWillMount para depreciação, ele não estará disponível nas futuras versões do React
Da mesma forma que o método componentWillMount, o método componentWillRecieveProps já está marcado para depreciação, ele não estará disponível nas futuras versões do React.
componentWillUpdate também é um método marcado para depreciação, ele não estará disponível nas futuras versões do React.
Os métodos marcado para depreciação serão substituídos mas continuarão disponíveis pelos nomes:

UNSAFE_componentWillMount
UNSAFE_componentWillReceiveProps
UNSAFE_componentWillUpdate
Esses métodos permitem código blocantes, assim, causam problemas em contextos assíncronos.

O novo método que substitui o componentWillReceiveUpdate será:

getDerivedStateFromProps
E o método que substituirá componentWillUpdate será o getSnapshotBeforeUpdate(prevProps, prevState) ele deverá retornar um objeto que estará disponível no método componentDidUpdate(prevProps, prevState, snapshot).