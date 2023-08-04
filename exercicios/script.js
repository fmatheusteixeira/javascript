function calcular() {
    var num = Number(document.getElementById('txtn').value)
    var res = document.getElementById('res')
    
    res.innerHTML = ''

    res.innerHTML += `<h2>Calculando ${num}! <br></h2>` 
    
    var result = 1

    for(var c = num; c >= 1; c--){
        
        result *= c
        res.innerHTML += `${c} ${c !== 1 ? 'x ' : '= ' }`
    }
    res.innerHTML += `<strong>${result.toLocaleString('pt-BR')}</strong>`
    h2.style.fontFamily = 'Arial'
    res.style.padding = '20px' 
    
}
    
    
