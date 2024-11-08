function calcular() {
    var res = window.document.getElementById('res')    
    var produto = window.prompt(`Qual é o produto que você quer comprar?`)
    var preco = window.prompt(`Qual é o preço de um ${produto}?`)
    var desconto = (10/100) * preco
    var total = preco - desconto
    
    res.innerHTML = `<strong>Calculando o desconto de 10% para ${produto}</strong>`
    res.innerHTML += `<p>O preço original era de €${preco}</p>`
    res.innerHTML += `<p>Você acaba de ganhar €${desconto.toFixed(2)} de desconto (-10%)</p>`
    res.innerHTML += `<p>No fim, você vai pagar €${total.toFixed(2)} no produto ${produto}</p>`
}