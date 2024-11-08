function converter() {
    var res = window.document.getElementById('res')
    var graus = Number(window.prompt('Digite a temperatura em graus Celsius (°C)'))
    var fahr = (graus * 1.8) + 32
    var kelvin = (graus + 273.15)
    res.innerHTML = `<strong>A temperatura de ${graus}°C corresponde a...</strong>`
    res.innerHTML += `<br>${fahr}°F (Fahrenheit)` 
    res.innerHTML += `<br>${kelvin}°K (Kelvin)`
}