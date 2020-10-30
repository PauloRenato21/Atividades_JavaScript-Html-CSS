const capInicial = 3.000; // Valor inical investido 
const taxaJuros = 0.5; // Taxa de juros em 50% em numero decimal
const tempo = 2; // Tempo em que o capital ficará aplicado 2 anos

function simples (capInicial, taxaJuros, tempo){
    juros = capInicial * taxaJuros * tempo;
    montante = capInicial + juros
    return montante
}

function composto (capInicial, taxaJuros, tempo){ 
    montante = capInicial * (1 + taxaJuros) ** tempo
    return montante
}

console.log(simples (capInicial, taxaJuros, tempo))
console.log("-------")
console.log(composto (capInicial, taxaJuros, tempo))