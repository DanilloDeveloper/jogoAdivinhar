const menorValor = 0;
const maiorValor = 100;
const numeroSorteado = numeroAleatorio(maiorValor)


const valorMinimo = document.querySelector("#menor-valor")
const valorMaximo = document.querySelector('#maior-valor')

valorMinimo.innerHTML = menorValor;
valorMaximo.innerHTML = maiorValor;

function numeroAleatorio(maior){
    return parseInt(Math.random() * maior + 1)
}



console.log(numeroSorteado)