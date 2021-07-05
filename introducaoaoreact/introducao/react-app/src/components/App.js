import React from 'react';

class App extends React.Component {
  render() {
    return (
      <>
        <p>Meu primeiro parágrafo</p>
        <p>Meu segundo parágrafo</p>
        <p>{new Date().toLocaleDateString('pt-Br') }</p>
      </>
    )
  }
}

export default App;
