var dolar = Number(window.prompt('Antes de mais nada, quanto está a cotação de dolar agora?'))

function converter() {
    var res = window.document.getElementById('res')
    var euro = Number(window.prompt('Quantos € você tem na carteira?'))
    var dolarC = euro * dolar
    
    res.innerHTML = `<strong>Tens ${dolarC} dolares.</strong>`
}