;(function startGame() {
        const gameContent = document.querySelector('.main__numbers')
        const startButton = document.querySelector('.start-button')
        const scoreContentP = document.querySelector('.main__score--content')
        const campoDificuldadeP = document.querySelector('.main__start-list')
        const voltar = document.querySelector('.voltar')

        startButton.addEventListener('click', function () {
            startButton.classList.add('some')
            gameContent.classList.remove('out-screen')
            startButton.addEventListener('transitionend', () => {
                gameContent.classList.add('aparece')
                scoreContentP.classList.add('aparece')
                scoreContentP.classList.remove('opacity-0')
                startButton.remove()
                campoDificuldadeP.style.position = 'absolute'
                campoDificuldadeP.style.margin = '-405px 0 0 0'
                voltar.style.marginTop = '0px'
                console.log('game.start')
            })
        })
    })()