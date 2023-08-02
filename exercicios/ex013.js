// ESTRUTURAS BÁSICAS DE REPETIÇÃO //

/*
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
*/

// TESTA E DEPOIS EXECUTA (mais usada)
var c = 1
while (c <= 8) {
    console.log(`Comer uma fatia`)
    c++
    
}
console.log('Não possuem mais fatias :/')

// EXECUTA E DEPOIS TESTA
var c = 1 
do {
    console.log('Comer uma fatia')
    c++
} while (c <= 8)
    console.log('Não possuem mais fatias :/')