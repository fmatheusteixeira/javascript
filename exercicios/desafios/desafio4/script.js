function calculo() {
    var num = document.querySelector('input#num')
    var res = document.querySelector('select#seltab')

    var resultado = document.createElement('p')
    if (num.value.length == 0) {
        alert('ERRO!')
}
    else {
      var n = Number(num.value)
        res.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
            var opt = document.createElement('option')
            opt.text = `${n} x ${c} = ${n*c}`
            res.appendChild(opt)
        }
    }
    
}
