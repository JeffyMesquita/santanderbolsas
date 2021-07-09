Introdução aos Componentes Funcionais
Os componentes funcionais eram considerados os "componentes burros" do React, eles eram componentes simplificados que só tinham props e renderizavam html na tela. Eles não eram capazes de ter estado, e portanto de realizar alterações de estado. Não tinham os métodos de ciclo de vida, o que não permitia que coletassem dados externamente, o que chamamos na programação funcional de efeitos colaterais (side effects).

E por esses motivos eram usados apenas para coisas mais simples no React. No entanto, nas últimas atualizações da biblioteca, eles foram revistos e o React introduziu o conceito de Hooks, os hooks permitem aos componentes funcionais terem estado, efeitos, modificar seu estado e uma série de outras capacidades.

Sendo assim, os componentes tipo classe que se tornaram obsoletos e hoje a recomendação é que tudo seja feito por componentes funcionais. O time do React é funcional, portanto, é natural que eles tenham a tendência de não depender da abordagem orientada a objetos usada nos componentes tipo classe.

Componentes funcionais são de fato mais simples, eles são apenas uma função, veja um exemplo:

import React from 'react';

export default function Hello(){
    return (<h1>Hello!</h1>);
}
Simples assim construímos um componente funcional que renderiza um H1 com o texto "Hello!". Para fazer um paralelo com os componentes tipo classe que vimos, pense que o componente funcional é o método render do componente tipo classe. Seu retorno é o que será mostrado na tela.

Diferentemente do render() o componente funcional recebe props em seu parâmetro, então basta utilizá-las diretamente. Veja o exemplo:

import React from 'react';

export default function Hello(props){
    return (<h1>{props.text}</h1>);
}
O uso é idêntico ao tipo classe:

<Hello text='Hello!!!'>
Da mesma forma podemos passar children:

import React from 'react';

export default function Hello(props){
  return <>{props.children}</>;
}
O uso também é idêntico:

<Hello>
    <h1>Hello!</h1>
</Hello>
Uma prática muito comum em componentes funcionais é desestruturar o props imediatamente dentro do parâmetro do componente, o que nos desobriga de escrever props. sempre que formos usar. Veja os exemplos anteriores usando desestruturação:

import React from 'react';

export default function Hello({text}){
    return (<h1>{text}</h1>);
}
import React from 'react';

export default function Hello({children}){
  return <>{children}</>;
}
Mais limpo assim, não é?

Componentes extremamente simples podem ser criados como arrow functions:

import React from 'react';
const Titulo = ({text}) => <h1>{text}</h1>;
export default Titulo; 
Mesmo que aparentemente não seja usada, não esqueça da importação do React nos componentes funcionais!

Ela garante o uso do JSX no componente.

Você pode achar estranho que tanto uma função como uma classe podem ser componentes no React, mas lembre-se, a orientação a objetos do JavaScript é ilusória, por mais que estejamos fazendo uma classe, por baixo dos panos o JavaScript vai transformá-la em uma função (ele não tem o conceito de classe).

Sendo assim, classes e funções são a mesma coisa. Você também pode estar pensando: sacanagem mostrar componentes como classes para depois dizer que eles estão em desuso!

Fazemos isso porque em códigos legados existe grande chance de você cruzar com componentes como classes, pois eles foram por muito tempo a única forma de componente em que os conceitos de estado e ciclo de vida existiam.

Também porque, agora que você conhece todos os conceitos vistos nos componentes tipo classes, só precisamos adaptá-los aos componentes funcionais, você já sabe tudo o que é necessário. Sendo assim, só será necessário conhecer os hooks, o que veremos a seguir.