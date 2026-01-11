function calcular() {
    var txtvel = document.querySelector('input#txtn1')
    var res = document.querySelector('div#res')
    var vel = Number(txtvel.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}</strong>km/h</p>`
        if (vel > 60) {
            res.innerHTML += (`<p>Você foi <strong id=multa>MULTADO!</strong> Dirija dentro da velocidade permitida.</p>`)
        } else{
            res.innerHTML += (`<p>Lembre-se de usar o cinto de segurança</p>`)
        }
}