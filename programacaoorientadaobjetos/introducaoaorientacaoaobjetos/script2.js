const agenda = {
  contatos : [
    {
      nome: 'contato 1',
      telefone: 'telefone 1',
      email: 'email1@teste.com.br'
    },
    {
      nome: 'contato 2',
      telefone: 'telefone 2',
      email: 'email2@teste.com.br'
    },
    {
      nome: 'contato 3',
      telefone: 'telefone 3',
      email: 'email3@teste.com.br'
    },
    {
      nome: 'contato 4',
      telefone: 'telefone 4',
      email: 'email4@teste.com.br'
    },
  ],
  adicionar : function(contato) { this.contatos.push(contato) }
}

console.log(agenda.contatos);