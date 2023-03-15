function verificaValor(chute){
    const numero = +chute

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor Invalido</div>'
        return
    }

    if (numeroMaiorOuMenor(numero)){
        elementoChute.innerHTML += `<div>Valor invalido: diga um numero entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (numero === secretNumber) {
        document.body.innerHTML = `
            <h2>Voce acertou</h2>
            <h3>O numero secreto era ${secretNumber}</h3>
    
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    } else if (numero > secretNumber) {
        elementoChute.innerHTML += `
        <div>O numero secreto e menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O numero secreto e maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}

function chuteInvalido(numero) {
    return newFunction(numero)
}

function newFunction(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})
