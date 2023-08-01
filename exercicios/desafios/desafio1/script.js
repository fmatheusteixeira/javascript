function horaDoDia() {
    var hora = new Date()
    var agora = hora.getHours()
    var resHora = document.querySelector('div#hour')
    
    resHora.innerHTML = `Agora são ${agora} horas.`

    var imagem1 = document.querySelector('.img1')
    var imagem2 = document.querySelector('.img2')
    var imagem3 = document.querySelector('.img3')
    var resImagem = document.querySelector('div#image')

    if (agora >= 0 && agora < 12) {
        imagem1.style.display = 'block'
        imagem2.style.display = 'none'
        imagem3.style.display = 'none'
        document.body.style.backgroundColor = 'rgba(224, 224, 74, 0.815)'
        window.alert('BOM DIA!')
    }
    else if (agora < 18) {
        imagem1.style.display = 'none'
        imagem2.style.display = 'block'
        imagem3.style.display = 'none'
        document.body.style.backgroundColor = 'rgba(238, 138, 44, 0.603);'
        window.alert('BOA TARDE!')
    }
    else {
        imagem1.style.display = 'none'
        imagem2.style.display = 'none'
        imagem3.style.display = 'block'
        document.body.style.backgroundColor = 'gray'
        window.alert('BOA NOITE!')
    }
    
}
window.onload = horaDoDia()