function videoGame(){

const campoDificuldade = document.querySelector('#dificuldade')
const campoNumeroUm = document.querySelector('.__number-1');
const campoNumeroDois = document.querySelector('.__number-2');
const campoUserInput = document.querySelector('.user-input')
const textLog = document.querySelector('.text-log')
const next = document.querySelector('.next-button')

const scoreContent = document.querySelector('.main__score--content')
var score = 0

if (campoDificuldade.value == 'facil'){
    facil()
    console.log('difficulty.easy')
}
else if (campoDificuldade.value == 'medio'){
    medio()
    console.log('difficulty.medium')
}
else if (campoDificuldade.value == 'dificil'){
    dificil()
    console.log('difficulty.hard')
}

function checkResult() {
    if (campoUserInput.value == window.resultado) {
        next.classList.remove('opacity-0')
        next.classList.remove('out-screen')
        textLog.classList.remove('incorrect')
        textLog.classList.add('correct')
        textLog.textContent = 'Você acertou!'
    }
    else if (isNaN(campoUserInput.value)) {
        textLog.classList.remove('correct')
        textLog.classList.add('incorrect')
        textLog.textContent = 'Erro, insira apenas números!'
    }
    else {
        textLog.classList.add('incorrect')
        textLog.textContent = `Você errou, a resposta era ${window.resultado}!`
        score = 0
        scoreContent.textContent = `Pontuação: ${score}`
        campoUserInput.value = ''
        videoGame()
    }
}

function addScore() {
    score++
    scoreContent.textContent = `Pontuação: ${score}`
    if (campoDificuldade.value == 'facil'){
        facil()
    }
    if (campoDificuldade.value == 'medio'){
        medio()
    }
    if (campoDificuldade.value == 'dificil'){
        dificil()
    }
    campoUserInput.value = ''
    textLog.textContent = ''
    next.classList.add('opacity-0')
    next.classList.add('out-screen')
}

campoUserInput.addEventListener('keypress', function (e) {
    if (e.key == 'Enter' && campoUserInput.classList.contains('notEnter')) {
        checkResult()
        if (campoUserInput.value == window.resultado) {
            campoUserInput.classList.remove('notEnter')
        }
    }
    else if (e.key == 'Enter' && textLog.classList.contains('correct')) {
        campoUserInput.classList.add('notEnter')
        addScore()
    }
})

function facil() {
    var numeroUm = parseFloat((Math.random() * 100).toFixed(0));
    var numeroDois = parseFloat((Math.random() * 100).toFixed(0));
    if (numeroUm > 30 && numeroUm <= 60) {
        numeroUm = (numeroUm / 2).toFixed(0)
    }
    else if (numeroUm > 60 && numeroUm <= 90) {
        numeroUm = (numeroUm / 3).toFixed(0)
    }
    else if (numeroUm > 90) {
        numeroUm = (numeroUm / 4).toFixed(0)
    }

    if (numeroDois > 30 && numeroDois <= 60) {
        numeroDois = (numeroDois / 2).toFixed(0)
    }
    else if (numeroDois > 60 && numeroDois <= 90) {
        numeroDois = (numeroDois / 3).toFixed(0)
    }
    else if (numeroDois > 90) {
        numeroDois = (numeroDois / 4).toFixed(0)
    }

    window.resultado = parseFloat(numeroUm) + parseFloat(numeroDois)

    //console.log('Facil Numero 1 ',numeroUm)
    //console.log('Facil Numero 2 ',numeroDois)
    //console.log('Facil Resultado',window.resultado)

    campoNumeroUm.textContent = numeroUm
    campoNumeroDois.textContent = numeroDois

}
function medio() {
    var numeroUm = parseFloat((Math.random() * 100).toFixed(0));
    var numeroDois = parseFloat((Math.random() * 100).toFixed(0));
    if (numeroUm > 60) {
        numeroUm = (numeroUm / 1.7).toFixed(0)
    }
    if (numeroDois > 60) {
        numeroDois = (numeroDois / 1.7).toFixed(0)
    }

    window.resultado = parseFloat(numeroUm) + parseFloat(numeroDois)
    //console.log('medio Numero 1 ',numeroUm)
    //console.log('medio Numero 2 ',numeroDois)
    //console.log('medio Resultado',window.resultado)

    campoNumeroUm.textContent = numeroUm
    campoNumeroDois.textContent = numeroDois

}
function dificil() {
    var numeroUm = parseFloat((Math.random() * 100).toFixed(0));
    var numeroDois = parseFloat((Math.random() * 100).toFixed(0));

    window.resultado = numeroUm + numeroDois
    //console.log('dificil Numero 1 ',numeroUm)
    //console.log('dificil Numero 2 ',numeroDois)
    //console.log('dificil Resultado',window.resultado)

    campoNumeroUm.textContent = numeroUm
    campoNumeroDois.textContent = numeroDois
}
}