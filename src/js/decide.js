const adecide = document.querySelector('.adecide')
const campoteste = document.querySelector('.campo')
function joao(){
if (campoteste.value == 1){
    adecide.src = 'src/js/um.js'
    joga()
}
else if (campoteste.value == 2){
    adecide.src = 'src/js/dois.js'
    joga()
}
}