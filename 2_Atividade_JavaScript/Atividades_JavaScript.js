var valor1 = 10;
var valor2 = 20;

function soma(valor1,valor2){
    valor = valor1 + valor2;
    return valor
}

function subtrair(valor1, valor2){
    valor = valor1 - valor2
    return valor
}

function multi(valor1, valor2){
    valor = valor1 * valor2
    return valor
}
function divi(valor1, valor2){
    valor = valor1 / valor2
    return valor
}

console.log(soma (valor1, valor2))
console.log("-----------------------")
console.log(subtrair(valor1, valor2))
console.log("-----------------------")
console.log(multi(valor1, valor2))
console.log("-----------------------")
console.log(divi(valor1, valor2))

console.log("============================")

var lado1 = 5;
var lado2 = 5;
var lado3 = 3;

function classi(lado1, lado2, lado3){
    if (lado1, lado2, lado3 == lado1, lado2, lado3){
        triangulo = "Equilátero"
        return triangulo
    
    } else{
        triangulo = "Isósceles"
        return triangulo
    }
}
console.log(classi(lado1, lado2, lado3))