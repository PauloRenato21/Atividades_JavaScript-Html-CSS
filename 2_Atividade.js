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

console.log(classe (1,2,3))