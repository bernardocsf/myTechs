function converter() {
    var res = window.document.getElementById('res')
    var metros = window.prompt(`Digite a uma distância em metros (m)`)
    res.innerHTML = `<p>A distância de  ${metros} metros, corresponde a...</p>`
    res.innerHTML += `<p>${metros / 1000} quilômetros (km)</p>`
    res.innerHTML += `<p>${metros / 100} hectômetros (hm)</p>`
    res.innerHTML += `<p>${metros / 10} decâmetros (dam)</p>`
    res.innerHTML += `<p>${metros * 10} decímetros (dm)</p>`
    res.innerHTML += `<p>${metros * 100} centímetros (cm)</p>`
    res.innerHTML += `<p>${metros * 1000} milímetros (mm)</p>`
}