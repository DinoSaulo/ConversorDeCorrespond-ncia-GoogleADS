function addMaisa() {
    let x = document.getElementById("myTextarea").value;
    let termosDeBuscaSeparados = []
    termosDeBuscaSeparados = x.split(/[\n|\n\r]/)
    let  finalArray = []

    for(let i = 0; i < termosDeBuscaSeparados.length; i++) {
        let palavrasDosTermosDeBuscaSeparados = termosDeBuscaSeparados[i].split(' ')

        for(let j = 0; j < palavrasDosTermosDeBuscaSeparados.length; j++) {
            finalArray += ('+').concat(palavrasDosTermosDeBuscaSeparados[j]).concat(' ')
            if( j === palavrasDosTermosDeBuscaSeparados.length - 1) finalArray = finalArray.concat('</br>')   
        }
    }

    document.getElementById("demo").innerHTML = finalArray;
}
