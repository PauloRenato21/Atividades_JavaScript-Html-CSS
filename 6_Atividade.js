function simples (capInicial, taxaJuros, tempo){
    juros = capInicial * taxaJuros * tempo;
    montante = capInicial + juros
    return montante
}

function composto (capInicial, taxaJuros, tempo){ 
    montante = capInicial * (1 + taxaJuros) ** tempo
    return montante
}

console.log(simples (3.000, 0.5, 2)) // Valor inical investido  // Taxa de juros em 50% em numero decimal  // Tempo em que o capital ficará aplicado 2 anos
console.log("-------")
console.log(composto (10.000, 0.5, 5)) // Valor inical investido  // Taxa de juros em 50% em numero decimal  // Tempo em que o capital ficará aplicado 5 anos