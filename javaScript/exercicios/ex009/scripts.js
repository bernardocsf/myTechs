// As variáveis declaradas aqui fora são consideradas GLOBAIS e funcionam dentro do programa inteiro
let contador = 0 
let res = document.querySelector('section#result')

function contar() {
    contador ++  
    res.innerHTML = `<p>O contador está com <mark>${contador}</mark> cliques.</p>`
}

function zerar() {
    contador = 0
    res.innerHTML = null
}