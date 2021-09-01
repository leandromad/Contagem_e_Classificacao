// Declara lista de alunos
let listaDeAlunos = ['Marcelo', 'Juh', 'Cleber', 'Wesley', 'Adriano']

// Conta numero de alunos
let numeroDeAlunos = listaDeAlunos.length

// Verifica os números 0, par e ímpar por FOR
for (let contador = 0; contador <= numeroDeAlunos; contador++) {
  if (contador === 0) {
    console.log('O número atual é ZERO')
  } else if (contador % 2 === 0) {
    console.log('O numero atual, ' + contador + ' é PAR')
  } else {
    console.log('O numero atual, ' + contador + ' é ÍMPAR')
  }
}
