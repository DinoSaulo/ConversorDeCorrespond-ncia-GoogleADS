function addMais() {
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

function addNormal() {
    let x = document.getElementById("myTextarea").value;
    let termosDeBuscaSeparados = []
    termosDeBuscaSeparados = x.split(/[\n|\n\r]/)
    let finalArray = ''

    for ( let i = 0; i < termosDeBuscaSeparados.length; i++) finalArray += termosDeBuscaSeparados[i].concat('</br>')

    document.getElementById("demo").innerHTML = finalArray;
}

function addAspas() {
    let x = document.getElementById("myTextarea").value;
    let termosDeBuscaSeparados = []
    termosDeBuscaSeparados = x.split(/[\n|\n\r]/)
    let finalArray = ''

    for(let i = 0; i < termosDeBuscaSeparados.length; i++) {
        let palavrasDosTermosDeBuscaSeparados = termosDeBuscaSeparados[i].split(' ')
        
        for(let j = 0; j < palavrasDosTermosDeBuscaSeparados.length; j++) {
            if( j === 0) finalArray = finalArray.concat('"') 
            
            if( j === palavrasDosTermosDeBuscaSeparados.length - 1) {
                finalArray = finalArray.concat(palavrasDosTermosDeBuscaSeparados[j])
                finalArray = finalArray.concat('"</br>')
            } else {
                finalArray = finalArray.concat(palavrasDosTermosDeBuscaSeparados[j]).concat(' ')
            }
        }
    }

    document.getElementById("demo").innerHTML = finalArray;
}

function addChaves() {
    let x = document.getElementById("myTextarea").value;
    let termosDeBuscaSeparados = []
    termosDeBuscaSeparados = x.split(/[\n|\n\r]/)
    let finalArray = ''

    for(let i = 0; i < termosDeBuscaSeparados.length; i++) {
        let palavrasDosTermosDeBuscaSeparados = termosDeBuscaSeparados[i].split(' ')
        
        for(let j = 0; j < palavrasDosTermosDeBuscaSeparados.length; j++) {
            if( j === 0) finalArray = finalArray.concat('[') 
            
            if( j === palavrasDosTermosDeBuscaSeparados.length - 1) {
                finalArray = finalArray.concat(palavrasDosTermosDeBuscaSeparados[j])
                finalArray = finalArray.concat(']</br>')
            } else {
                finalArray = finalArray.concat(palavrasDosTermosDeBuscaSeparados[j]).concat(' ')
            }
        }
    }

    document.getElementById("demo").innerHTML = finalArray;
}

function addMenos() {
    let x = document.getElementById("myTextarea").value;
    let termosDeBuscaSeparados = []
    termosDeBuscaSeparados = x.split(/[\n|\n\r]/)
    let  finalArray = []

    for(let i = 0; i < termosDeBuscaSeparados.length; i++) {
        let palavrasDosTermosDeBuscaSeparados = termosDeBuscaSeparados[i].split(' ')

        for(let j = 0; j < palavrasDosTermosDeBuscaSeparados.length; j++) {
            finalArray += ('-').concat(palavrasDosTermosDeBuscaSeparados[j]).concat(' ')
            if( j === palavrasDosTermosDeBuscaSeparados.length - 1) finalArray = finalArray.concat('</br>')   
        }
    }

    document.getElementById("demo").innerHTML = finalArray;
}