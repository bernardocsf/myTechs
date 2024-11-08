// Função que calcula a soma de dois números
function somar(a, b) {
    return a + b;
}

// Função que é chamada ao clicar no botão
function calcularSoma() {
    // Obtendo os valores dos inputs
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    
    // Calculando a soma
    const resultado = somar(numero1, numero2);
    
    // Exibindo o resultado na página
    document.getElementById('resultado').innerHTML = "A soma é: " + resultado;
}