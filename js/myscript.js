var botao_contraste_branco = document.querySelector('#contraste_branco')

function contrasteparabranco() {
    var todasastags = document.querySelectorAll('*')
    console.log(todasastags);

    todasastags.forEach(function(elemento) {
        if (elemento.nodeName == 'A') {
            elemento.style.backgroundColor = 'black'
            elemento.style.color = 'white'
        } else {
            elemento.style.backgroundColor = 'white'
            elemento.style.color = 'black'
        }
    })
}

var botao_contraste_preto = document.querySelector('#contraste_preto')

function contrasteparapreto() {
    var todasastags = document.querySelectorAll('*')
    console.log(todasastags);

    todasastags.forEach(function(elemento) {
        if (elemento.nodeName == 'A') {
            elemento.style.backgroundColor = 'white'
            elemento.style.color = 'black'
        } else {
            elemento.style.backgroundColor = 'black'
            elemento.style.color = 'white'
        }
    })
}

botao_contraste_branco.addEventListener('click', contrasteparabranco)
botao_contraste_preto.addEventListener('click', contrasteparapreto)