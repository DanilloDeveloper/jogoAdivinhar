function validaAudio(chute){
    const numero =+ chute;

    if(ehNumero(numero)){
        elementoChute.innerHTML += `<div>não é um numero<\div>`
    }

    if(numero > maiorValor || numero < menorValor){
        elementoChute.innerHTML += `<div>O numero deve estar entre ${menorValor} e ${maiorValor}<\div>`
    }

    if(numero === numeroSorteado){
        document.body.innerHTML = `
          <h2 class="acertou">Você acertou!<\h2>
          <h3>O numero secreto é ${numeroSorteado}<\h3>
          <button class="reload">Jogar novamente</button>
        `
    }else if(numero < numeroSorteado){
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }else{
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    }

    const recarregar = document.querySelector(".reload");
    recarregar.addEventListener('click', () =>{
     window.location.reload()
})
}

function ehNumero(n){
    return Number.isNaN(n)
}