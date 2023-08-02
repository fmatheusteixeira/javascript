function calculo() {
    var num = document.querySelector('input#num')
    var res = document.querySelector('select#res')

    if (num.value.length == 0)
        res.innerHTML = 'ERRO'
}