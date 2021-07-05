import React from 'react';

class App4 extends React.Component {
  constructor(props){
    super(props);
    this.state = {nome: undefined, txtNome: ''};    
  }

  changeTxtName = (event) =>{
    this.setState({txtNome: event.target.value});
  }

  persistName = () => {
    this.setState({nome: this.state.txtNome})
  }
  render() {

    const renderForm = () => {
      return(
        <>
          Nome: <input type="text" onChange={this.changeTxtName} />
          <button onClick={this.persistName}>Salvar</button>
        </>
      );
    }
    
      
    const renderTxt = () => {
      return(
        <>        
          <p>Olá {this.state.nome}</p>
        </>
      )
    }

    return !this.state.nome ? renderForm() : renderTxt()
    
  }
}

export default App4;