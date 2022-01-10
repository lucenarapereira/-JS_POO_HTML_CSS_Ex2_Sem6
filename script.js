const user = [
  { id: 1, nome: 'Lucenara' }
]

const mensagemOla = user.find(user => user.id === 1)

console.log( 'Olá, '+ mensagemOla.nome+'!') 