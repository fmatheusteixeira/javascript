function calculo() {
    var num = document.querySelector('input#txtn')
    var desc = document.querySelector('input#txtdesc')
    var res = document.querySelector('div#res')

    if(num.value.length == 0 || desc.value.length == 0) {
        alert('ERRO! Preencha todos os campos obrigatórios')
    }

    else {
        var n = Number(num.value)
        var d = Number(desc.value)

        var perc = d / 100
        var r = n - n*perc
        r = r.toFixed(2).replace('.', ',')
        res.innerHTML = `R$ ${r}`       
    }
}