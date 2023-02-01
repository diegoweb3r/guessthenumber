
const modoLivre = document.querySelector('.button-free')
modoLivre.addEventListener("click", function(){
var numeroSecreto = parseInt(Math.random() * 1001);
var i = 0;
while (chute != numeroSecreto) {
    i  = i + 1
    var chute = prompt('Digite um numero entre 0 e 1000')

    if (chute == numeroSecreto) {
        alert('Você acertou! Foram necessarias ' + i + ' tentativas')
    } else if (chute > numeroSecreto) {
        alert('Voce errou! O numero secreto é menor. Numero de tentativas ' +  i)
    } else if (chute < numeroSecreto) {
        alert('Voce errou! o numero secreto é maior. Numero de tentativas ' +  i)
    }
}
});


const modoLimitado = document.querySelector('.button-limited')
modoLimitado.addEventListener("click", function (){
var numeroSecreto = parseInt(Math.random() * 1001);
var i = prompt('Quantas tentativas voce quer tentar?');
t = 0;

while (chute != numeroSecreto & i != 0) {
    t = t + 1

    var chute = prompt('Digite um numero entre 0 e 1000, voce tem ' + i + ' chance(s)')
    i  = i - 1
    if (chute == numeroSecreto) {
        alert('Você acertou! Foram necessarias ' + i + ' tentativas')
    } else if (chute > numeroSecreto) {
        alert('Voce errou! O numero secreto é menor. Tentativas restantes ' +  i)
    } else if (chute < numeroSecreto) {
        alert('Voce errou! o numero secreto é maior. Tentativas restantes ' +  i)
    }

    
}

alert('Suas chances acabaram')
});
