const valor = 0.30000000000000004;

function converter (valor){
    valor.toFixed(2).replace(',,') // Converter o sinal de divisao das casas decimais
    resultado = valor.toLocaleString('pt-br', {style: 'currency', currency:'BRL'}) //Converter paara a moeda Real
    return resultado
}

console.log(converter (valor))