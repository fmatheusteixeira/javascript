
function contar() {
    var i = document.querySelector('input#inicio')
    var f = document.querySelector('input#fim')
    var p = document.querySelector('input#passo')
    var res = document.querySelector('div#res')
    
    if ( i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        window.alert('ERRO! Preencha todos os campos')
    }
    else { 
        res.innerHTML = 'Contando:'
        var ini = Number(i.value)
        var fim = Number(f.value)
        var pas = Number(p.value)
        if (ini < fim) {
            for(var c = ini;c <= fim; c += pas) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        else {
            for(var c = ini; c >= fim; c -= pas) {
                res.innerHTML += `${c} \u{1F448}`
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
    }

}