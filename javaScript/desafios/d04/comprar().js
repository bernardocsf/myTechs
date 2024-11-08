function comprar() {
    var product = window.prompt('Qual é o produto que você quer comprar?')
    var price = Number(window.prompt('Quanto custa o produto selecionado?'))
    var money = Number(window.prompt('Quanto dinheiro voce deu?'))
    window.alert(`Você comprou um ${product} que custou € ${price}. 
                    \nDeu € ${money} em dinheiro e vai receber € ${money - price} de troco. 
                    \nVolte sempre`)
}