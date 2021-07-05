Renderização de Listas
Muitas vezes temos listas para renderizar usando React. Para fazer isso podemos decidir por duas abordagens quanto às listas:

A primeira é renderizar os items usando HTML simples.

A segunda é criar um componente que será usado como item da lista.

Ambas tem vantagens e desvantagens.

A primeira abordagem é mais simples, mas quando os items são complexos pode ser um pouco confusa e não é candidata ao reaproveitamento.

Já a segunda abordagem é mais complexa, no sentido de termos um ou até dois componentes extras gerenciando a renderização da lista. No entanto, eles pode ser reaproveitados e funcionam melhor do que a primeira abordagem quando os items tem um HTML complexo.

Vamos começar com uma lista simples:

import React from 'react';

class Lista extends React.Component{

  constructor(props){
    super(props);

    this.state = {items: ["item1", "item2", "item3", "item4"]}
  }

  render(){ }
}

export default Lista;
A forma mais simples e mais utilizada para renderizar uma lista com React é utilizando a função map().

Ela deve produzir um JSX para cada item da lista.

Vamos completar o método render():

  render(){
    return (
      <ul>
        {this.state.items.map(item, index => <li key={index}>item</li>)}
      </ul>
    )
   }
É muito importante observar que colocamos uma propriedade key nos <li></li> essa propriedade permite que o React distingua cada item, o que permite a atualização de apenas um item caso seu valor mude no state.

Toda vez que criamos items por map precisamos passar o key, que pode ser absolutamente qualquer coisa, contanto que nenhum item tenha um key igual ao do outro.

Nesse caso usamos o índice (posição no array) do item para gerar seu key.

Veja que o map produz um array de JSX. No entanto, o React renderiza esse array como JSX separados. Assim todos os items são renderizados na tela sem a necessidade de fazer joins ou outra estratégia para transformá-lo em string.

Agora vamos pensar em algo um pouco mais complexo que justifique o uso de um componente para os items da lista.

import React from 'react';

class Lista extends React.Component{

  constructor(props){
    super(props);

    this.state = {items: [
      {id: 1, nome: 'item1', completo: false},
      {id: 2, nome: 'item2', completo: false},
      {id: 3, nome: 'item3', completo: true},
      {id: 4, nome: 'item4', completo: false},
    ]}
  }

  render(){
    return (
    )
   }
}

export default Lista;
Nesse exemplo temos algo mais complexo para renderizar, a lista tem um nome, que aparecerá na tela, um ID que colocaremos em um campo data- e tem um completo que indica se ela deve ser tachada ou não.

Vamos então criar um componente para lidar com tudo isso, fazendo com que toda essa complexidade não esteja no componente Lista.

class Item extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const textDecoration = this.props.completo ? 'line-through' : 'none'
    
    return (
      <li data-id={this.props.id} style={{ textDecoration }}>
        {this.props.children}
      </li>
    )
  }
}
Agora vamos completar o método render() da Lista:

render(){
    return (
      <ul>
        {this.state.items.map(item, index => (
          <Item key={item.id} id={item.id} completo={item.completo}>
            {item.nome}
          </Item>
        ))}
      </ul>
    )
   }
Observe que aqui também foi usado o key, mas como temos um id nos items esse id foi usado no key para distinguir cada item.

Optamos por passar o conteúdo da lista por children para permitir que seja usado conteúdo HTML ou outros componentes, também passamos por props as informações adicionais que precisam ser colocadas no elemento li.

O resultado é:

<ul>
    <li data-id="1" style="text-decoration: none;">item1</li>
    <li data-id="2" style="text-decoration: none;">item2</li>
    <li data-id="3" style="text-decoration: line-through;">item3</li>
    <li data-id="4" style="text-decoration: none;">item4</li>
</ul>
Assim exemplificamos as duas abordagens de renderização de listas.

Vale apontar que outras linguagens de programação utilizam laços para fazer a renderização de listas. No React, vale a pena adotar a abordagem do uso do map, pois diferentemente dos laços ele produz um resultado JSX imediatamente.

O código completo do exemplo ficou:

import React from 'react';

class Lista extends React.Component{

  constructor(props){
    super(props);

    this.state = [
      {id: 1, nome: 'item1', completo: false},
      {id: 2, nome: 'item2', completo: false},
      {id: 3, nome: 'item3', completo: true},
      {id: 4, nome: 'item4', completo: false},
    ]
  }

  render(){
    return (
      <ul>
        {this.state.map(item => (
          <Item id={item.id} completo={item.completo}>
            {item.nome}
          </Item>
        ))}
      </ul>
    )
   }
}

class Item extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const textDecoration = this.props.completo ? 'line-through' : 'none'
    
    return (
      <li data-id={this.props.id} style={{ textDecoration }}>
        {this.props.children}
      </li>
    )
  }
}

export default Lista;