window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const elementoChute = document.querySelector('#chute')
const recognition = new SpeechRecognition()
recognition.lang = 'pt-br';
recognition.start()


recognition.addEventListener ('result', onSpeack)

function onSpeack(evento){
    const numeroSecreto = evento.results[0][0].transcript;
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${numeroSecreto}</span>
        
    `
    validaAudio(numeroSecreto)
    console.log(numeroSecreto)
}

recognition.addEventListener ('end', () => recognition.start())

