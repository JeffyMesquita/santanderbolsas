Formulários
Vamos fazer um código com vários exemplos de campos para processar um formulário. O nosso formulário terá um campo de texto para o nome, um select para escolher a linguagem de programação preferida dada as opções, um campo radio de marcação única se o usuário é programador ou estudante, um checkbox se o usuário dedica 8h semanais aos estudos e por fim uma área de texto para uma bio do usuário.

Já sabemos fazer um input textual de exemplos anterior, então começamos adicionando a tag form e com o atributo onSubmit, que recebe uma função a ser executada quando o formulário for submetido.

import React from 'react';

class Formulario extends React.Component {
  constructor(props) {
      super(props);
      this.state = {nome: '', linguagem: 'JavaScript', tipo: 'programador', dedico: true, bio: ''};

      this.handleSubmit = (event)=>{
          event.preventDefault();
          console.log(this.state);
      }

      this.changeName = (event)=>{
          this.setState({nome: event.target.value})
      }

  }

  render(){
      return (
          <>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nome: <input type="text" value={this.state.nome} onChange={this.changeName} />
                </label>
                <br />
                <input type="submit" value="Salvar"/>
            </form>
          </>
      );
  }

}

export default Formulario;
Observe que mesmo estando no contexto React o HTML tentará se comportar como HTML comum ao submeter o formulário. Para evitar esse comportamento, que gera o refresh da página, precisamos utilizar o método preventDefault de Event:

event.preventDefault();
Para cada novo campo de input nós precisamos criar um método para processar as alterações do mesmo.

Vamos adicionar o input tipo select, no render colocamos:

<label>
Linguagem favorita
<select value={this.state.linguagem} onChange={this.changeSelect}>
    <option>JavaScript</option>
    <option>Python</option>
    <option>C++</option>
</select>
</label>
<br />
No construtor adicionamos o método this.changeSelect:

this.changeSelect = (event)=>{
    this.setState({linguagem: event.target.value})
}
Para o input tipo radio adicione no render:

<label>
    Sou:
    <input type="radio" checked={this.state.tipo == 'programador'} onChange={this.changeRadio} value="programador" /> Programador
    <input type="radio" checked={this.state.tipo == 'estudante'} onChange={this.changeRadio} value="estudante"/> Estudante
</label>
<br/>
Para termos a marcação de uma única opção, o campo checked verifica a condição da opção marcada no estado, se for vendadeiro é renderizado como marcado.

No construtor adicionamos o método this.changeRadio:

this.changeRadio = (event)=>{
    this.setState({tipo: event.target.value})
}
Para o checkbox temos a mesma atenção ao campo checked:

<label>
    <input type="checkbox" checked={this.state.dedico} onChange={this.changeCheckbox} /> Dedico 8h semanais aos estudos.
    </label>
<br/>
Agora atenção para o método this.changeCheckbox, diferente dos outros casos não veficamos o value desse tipo de input para alterar o valor do estado do componente mas sim o checked:

this.changeCheckbox = (event)=>{
    this.setState({dedico: event.target.checked})
}
Por fim para a área de texto usamos a tag textarea:

<label>
    Bio:
    <textarea cols="50" value={this.state.bio} onChange={this.changeBio} />
</label>
O método segue como os demais:

this.changeBio = (event)=>{
    this.setState({bio: event.target.value})
}
O código completo:

import React from 'react';

class Formulario extends React.Component {
  constructor(props) {
      super(props);
      this.state = {nome: '', linguagem: 'JavaScript', tipo: 'programador', dedico: true, bio: ''};

      this.handleSubmit = (event)=>{
          event.preventDefault();
          console.log(this.state);
      }

      this.changeName = (event)=>{
          this.setState({nome: event.target.value})
      }

      this.changeSelect = (event)=>{
        this.setState({linguagem: event.target.value})
      }

      this.changeRadio = (event)=>{
        this.setState({tipo: event.target.value})
      }

      this.changeCheckbox = (event)=>{
        this.setState({dedico: event.target.checked})
      }

      this.changeBio = (event)=>{
        this.setState({bio: event.target.value})
      }
  }

  render(){
      return (
          <>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nome: <input type="text" value={this.state.nome} onChange={this.changeName} />
                </label>
                <br />
                <label>
                    Linguagem favorita
                    <select value={this.state.linguagem} onChange={this.changeSelect}>
                        <option>JavaScript</option>
                        <option>Python</option>
                        <option>C++</option>
                    </select>
                </label>
                <br />
                <label>
                    Sou:
                    <input type="radio" checked={this.state.tipo == 'programador'} onChange={this.changeRadio} value="programador" /> Programador
                    <input type="radio" checked={this.state.tipo == 'estudante'} onChange={this.changeRadio} value="estudante"/> Estudante
                </label>
                <br/>
                <label>
                    <input type="checkbox" checked={this.state.dedico} onChange={this.changeCheckbox} /> Dedico 8h semanais aos estudos.
                </label>
                <br/>
                <label>
                    Bio:
                    <textarea cols="50" value={this.state.bio} onChange={this.changeBio} />
                </label>
                <input type="submit" value="Salvar"/>
            </form>
          </>
      );
  }

}

export default Formulario;
No exemplo, fizemos diversas mudanças no estado baseadas em eventos do tipo onChange, também "sequestramos" a submissão do formulário usando onSubmit.

Ele impede que o comportamento padrão do formulário aconteça e nos permite processar o formulário de acordo com o padrão usado no React. Esquecer de invocar esse método faz com que o formulário seja mandado para o servidor e a página recarregue.

Com isso concluímos nosso estudo pelo componentes feitos a partir de classes. Vamos agora ver componentes funcionais.