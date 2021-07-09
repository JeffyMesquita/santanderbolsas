import React, { useState } from 'react';

export default function App5() {
  const [nome, setNome] = useState('');

  const onChange = () => setNome({nome: 'Jeferson'});
  

  return (
    <>
      Como devo te chamar?   
      <input 
        type="text" 
        placeholder="Seu nome aqui" 
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <br />
      <label>Olá, {nome}! Tudo bem com você??</label>
    </>
  )
}