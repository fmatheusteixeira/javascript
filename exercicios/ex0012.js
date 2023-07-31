var hora = 18
console.log(`Agora são ${hora} horas`)

if (hora >= 0 && hora < 12) {
    console.log('Bom dia!')
}
else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde!')
}
else {
    console.log('Boa noite!')
}