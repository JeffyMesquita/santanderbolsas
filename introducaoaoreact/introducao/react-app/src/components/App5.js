import React, { useState, useEffect } from "react";

export default function App5() {
  const [nome, setNome] = useState(undefined);

  useEffect(() => {
    if (nome === undefined) {
      setNome(sessionStorage.getItem('nome') || '');
    } else {
      sessionStorage.setItem('nome', nome);
    }
  }, [nome]);

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
  );
}
