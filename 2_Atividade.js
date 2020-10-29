const lado1 = 1;
const lado2 = 1;
const lado3 = 1;

function classe(lado1,lado2,lado3){
    
    if (lado1 == lado2 && lado1 == lado3 && lado3 == lado2){
        resultado = "O triangulo é Equilátero"
        return resultado;
    
    }  else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        resultado = "O triangulo é Isósceles"
        return resultado;

    } else{
        resultado = "O trinagulo é Escaleno"
        return resultado;

    } 
}

console.log(classe (lado1,lado2,lado3))