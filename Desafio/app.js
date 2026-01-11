function mostrar() {
    var txtp = document.querySelector('input#txtn1')
    var res = document.querySelector('div#res') 
    var país = txtp.value.toLowerCase()

        if (país == 'brasil') {
            res.innerHTML = (`<p>Você é <strong>BRASILEIRO</strong>!</p>`)
        } else {
            res.innerHTML += (`<p>Você é ESTRANGEIRO!</p>`)
        }
}