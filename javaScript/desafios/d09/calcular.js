function calcular() {
    var res = window.document.getElementById('res')    
    var nome = window.prompt('Qual é nome do funcionário?')
    var salario = Number(window.prompt(`Qual é o salário de ${nome}?`))
    var aumento = window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`)
    var aumentoCal = salario * (aumento/100)
    var total = salario + aumentoCal
    
    res.innerHTML = `<strong>${nome} recebeu um aumento salarial!</strong>`
    res.innerHTML += `<p>O salário atual era €${salario}</p>`
    res.innerHTML += `<p>Com um aumento de ${aumento}%, o salário vai aumentar €${aumentoCal} no próximo mÊs.</p>`
    res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar €${total}.</p>`
}