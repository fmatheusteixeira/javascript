function carregar() {
    var anoAtual = new Date()
    var ano = anoAtual.getFullYear()
    var nasc = document.getElementById('txtano')
    var res = document.getElementById('res')

    
   if (nasc.value.length == 0 || Number(nasc.value) > ano) {
    window.alert('ERRO! Verifique novamente as informações digitadas')
   }
   
   else {
    var sex = document.getElementsByName('sex')
    var idade = ano - Number(nasc.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (sex[0].checked) {
        gênero = 'Homem'
        if (idade > 0 && idade <= 10){
            img.setAttribute('src','imagens/criança-homem.png')
        }
        else if (idade < 21){
            img.setAttribute('src', 'imagens/jovem-homem.png')
        }
        else if (idade < 59) {
            img.setAttribute('src', 'imagens/homem.png')
        }
        else {
            img.setAttribute('src', 'imagens/idoso-homem.png')
        }

    }
    else if (sex[1].checked) {
        gênero = 'Mulher'
        if (idade > 0 && idade <= 10){
            img.setAttribute('src','imagens/criança-mulher.png')
        }
        else if (idade < 21){
            img.setAttribute('src', 'imagens/jovem-mulher.png')
        }
        else if (idade < 59) {
            img.setAttribute('src', 'imagens/mulher.png')
        }
        else {
            img.setAttribute('src', 'imagens/idosa-mulher.png')
        }
    }
    
    res.style.textAlign = 'center'
    res.innerHTML = `<p>É ${gênero} de ${idade} anos</p>`
    img.style.width = '200px'
    res.appendChild(img)
   }
}
