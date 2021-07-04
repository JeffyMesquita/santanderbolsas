Componentes Simples
Seguindo o guia para criação de um novo projeto você deve ter um projeto rodando e sem conteúdo.

Vamos começar a criar componentes nele. Começaremos pelos componentes criados como classes.

Podemos reaproveitar o componente App para esse exemplo. App é um componente funcional, vamos abordá-los mais para frente no curso. Por enquanto vamos transformá-lo em um componente tipo classe.

Para começar apague a função App:

import React from 'react';

export default App;
Vamos criar uma classe App no lugar:

import React from 'react';

class App extends React.Component{

}

export default App;
Observe que componentes tipo classe utilizam herança da classe Component do React, sendo assim, todo o comportamento de componente já está presente na sua classe desde o primeiro momento. Vamos apenas customizá-lo.

O que desejarmos mostrar na tela usando nosso componente é feito pelo método render(). Ele deve retornar um HTML (depois veremos que é mais do isso). Vamos adicioná-lo:

import React from 'react';

class App extends React.Component{

    render(){
        return <p>Meu primeiro parágrafo em React.</p>
    }
}

export default App;
Você já pode ver seu parágrafo aparecer no navegador. Se quiser fazer um HTML de várias linhas, basta colocar todo o conteúdo entre parênteses, mas lembre-se o React só é capaz de renderizar um elemento, portanto todo seu HTML deve ter um elemento raiz:

Não funciona

import React from 'react';

class App extends React.Component{

    render(){
        return (
          <p>Meu primeiro parágrafo em React.</p>
          <p>Meu segundo parágrafo em React.</p>
          <div>
            <pre>Cansei de parágrafos...</pre>
          </div>
        );
    }
}

export default App;
Funciona

import React from 'react';

class App extends React.Component{

    render(){
        return (
          <div>
            <p>Meu primeiro parágrafo em React.</p>
            <p>Meu segundo parágrafo em React.</p>
            <div>
                <pre>Cansei de parágrafos...</pre>
            </div>
          </div>
        );
    }
}

export default App;
Se você não quiser colocar um tag HTML como raiz (algumas vezes isso conflita com css da página e coisas do tipo), você pode colocar um Fragment, que é basicamente uma tag vazia:

import React from 'react';

class App extends React.Component{

    render(){
        return (
          <>
            <p>Meu primeiro parágrafo em React.</p>
            <p>Meu segundo parágrafo em React.</p>
            <div>
                <pre>Cansei de parágrafos...</pre>
            </div>
          </>
        );
    }
}

export default App;
Versões muito antigas do React podem não aceitar essa sintaxe de fragment, nesse caso use <React.Fragment></React.Fragment> no lugar.

Você criou seu primeiro componente no React. Se você já conhecia JavaScript em outro contexto deve ter percebido que o que acabamos de fazer no return do render não é javascript. Uma vez que o HTML não está dentro de uma string.

O que foi escrito dentro do return, que pode misturar componentes, HTML, e JavaScript é uma outra linguagem (ou melhor, dialeto) chamada JSX. Ele serve para podermos escrever tanto HTML como JavaScript fora de strings e se colocarmos uma tag que tenha o mesmo nome de um componente ele será renderizado onde a tag estiver. Isso lembra um pouco linguagens de lado servidor como PHP ou ASP.

Nela podemos inserir código JavaScript entre chaves contanto que ele produza um retorno. Por exemplo, vamos mostrar a data de hoje (no formato brasileiro):

import React from 'react';

class App extends React.Component{

    render(){
        return (
          <>
            <p>Meu primeiro parágrafo em React.</p>
            <p>Meu segundo parágrafo em React.</p>
            <div>
              <pre>Cansei de parágrafos...</pre>
            </div>
            <p>{ new Date().toLocaleDateString("pt-BR") }</p>
          </>
        );
    }
}

export default App;
Fizemos um componente estático, que apresenta um HTML na tela. Veremos como deixar os componentes mais interessantes a seguir.