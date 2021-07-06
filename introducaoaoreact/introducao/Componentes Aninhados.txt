Componentes Aninhados
Vamos explorar um pouco mais a fundo o uso do children.

Começamos modificando o exemplo anterior para permitir a passagem de items também como filhos:

import React from 'react';

class Lista extends React.Component{

  constructor(props){
    super(props);

    this.state = { items: [
      {id: 1, nome: 'item1', completo: false},
      {id: 2, nome: 'item2', completo: false},
      {id: 3, nome: 'item3', completo: true},
      {id: 4, nome: 'item4', completo: false},
    ]}
  }

  render(){
    return (
      <ul>
        {this.props.children}
        {this.state.items.map(item => (
          <Item key={item.id} id={item.id} completo={item.completo}>
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

export {Lista, Item};
Dessa forma, podemos passar os items tanto como filhos para o componente como pegar os que estão no estado e renderizar.

O uso seria, por exemplo:

<Lista>
    <Item key={999} id={999} completo={true}>teste</Item>
    <Item key={1000} id={1000} completo={false}>teste2</Item>
</Lista>
Dependendo de onde colocamos a linha this.props.children podemos colocar os items passados como filhos antes ou depois daqueles que estão no state. Basta colocar a linha antes ou depois do map();

Outra técnica bastante interessante é restringir que os filhos passados para o componente são de um tipo determinado, assim não são passados valores indevidos.

Imagine que alguém fez o seguinte:

<Lista>
    Teste1
    Teste2
    <Item key={999} id={999} completo={true}>teste</Item>
    <Item key={1000} id={1000} completo={false}>teste2</Item>
</Lista>
Como nosso código está renderiza o Teste1 e Teste2 fora de um <li></li> e produz um HTML assim:

<ul>
    Teste1 Teste2
    <li data-id="999" style="text-decoration: line-through;">teste</li>
    <li data-id="1000" style="text-decoration: none;">teste2</li>
    <li data-id="1" style="text-decoration: none;">item1</li>
    <li data-id="2" style="text-decoration: none;">item2</li>
    <li data-id="3" style="text-decoration: line-through;">item3</li>
    <li data-id="4" style="text-decoration: none;">item4</li>
</ul>
Podemos evitar isso usando um map especial para children do React e restringir quais podem ser renderizados e quais não podem.

Basta trocar a linha:

{this.props.children}
Por:

{React.Children.map(child => child.type == Item ? child : null)}
Esse map pode ser utilizado para fazer qualquer restrição ou transformação nos items passados como children do componente.

No exemplo, fizemos a verificação se o filho é uma instância da classe Item, se for retornamos ele, se não for retornamos null.

Além do map, o mesmo objeto React.Children tem outros métodos úteis como forEach, count, toArray, que são auto explicativos e only que restringe que apenas um filho seja passado e renderizado.