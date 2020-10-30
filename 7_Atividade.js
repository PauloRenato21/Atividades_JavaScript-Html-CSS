const ax2 = 1;
const bx = -10;
const c = 24;

function baskara (ax2, bx, c){
    delta = (bx ** 2) - 4 * ax2 * c 

    if(delta < 0){
        x = "Delta é negativo"
        return x
    }

    else{
        x = (-bx + Math.sqrt(delta)) / (2 * ax2);
        resultado = x
        y = (-bx - Math.sqrt(delta)) / (2 * ax2);
        resultado = y
        return resultado      
    }
}

console.log(baskara (ax2, bx, c))