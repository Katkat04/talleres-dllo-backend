//Taller Katy Diaz - Desarrollo Backend 


function convertidorTemp(T){
 return T*(9/5)+32
}
console.log(convertidorTemp(0))

function resolvedor(choice, a,b,c){
    if(choice == 1){
        return x = (-b + (b**2 - 4*a*c)**(1/2))/(2*a)
    }else{
        return x = (-b - (b**2 - 4*a*c)**(1/2))/(2*a)
    }
}
console.log(resolvedor(1,1,5,4))


function mejorParidad(n){
    if(n % 2 == 0){
        console.log("es par")
    }else{
        console.log("es impar")
    }
}
console.log(mejorParidad(5))

function peorParidad(n){
    if(n==1){
        return ("es impar")
    }else if(n == 2){
        return ("es par")
    }else if(n == 3){
        return ("es impar")
    }else if(n == 4){
        return ("es par")
    }else if(n == 5){
        return ("es impar")
    }else if(n == 6){
        return ("es par")
    }else if(n == 7){
        return ("es impar")
    }else if(n == 8){
        return ("es par")
    }else if(n == 9){
        return ("es impar")
    }else if(n == 10){
        return ("es par")
    }
}
console.log(peorParidad(1))