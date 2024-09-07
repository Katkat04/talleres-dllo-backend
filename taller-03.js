/*Taller 3- Katy Diaz Beltrán - 200142505
Desarrollo backend */

function desglosarString(a ,option) {
    let listavocales = ['a', 'e', 'i', 'o', 'u']
    let listaconsonantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
    let cvocales = 0;
    let cconsonantes = 0;

    for (let index = 0; index < a.length; index++) {
        let letra = a[index].toLowerCase()
        if (listavocales.includes(letra)) {
            cvocales++
        } else if (listaconsonantes.includes(letra)) {
            cconsonantes++
        }
    }
    if (option== "vocales"){
        return cvocales
    }else if(option== "consonantes"){
        return cconsonantes
    }
}
desglosarString(a)

listanum=[1,3,2,4,5,6,7,8,9]
function twoSum(listanum, numero){
    for (let index = 0; index < listanum.length; index++) {
        for (let index2 = index + 1; index2 < listanum.length; index2++) {
            if (listanum[index] + listanum[index2] === numero) {
                return [index, index2]; 
            }
        }
    }

}
function conversionRomana(nromano){

    // Numeros romanos
    let i = 1
    let v = 5
    let x = 10
    let l = 50 
    let c = 100
    let d = 500 
    let m = 1000

    let contador = 0
    for (let index = 0; index < nromano.length; index++) {
        let letra = nromano[index]
        if(letra=="I"){
            if(nromano[index + 1] == "V" || nromano[index + 1] == "X"){
                contador = contador - 1
            }else{
                contador = contador + i
            }
            continue
        }
        if(letra == "V"){
            contador = contador + v
            continue
        }
        if(letra == "X"){
            if(nromano[index + 1] == "L" || nromano[index + 1] == "C"){
                contador = contador - 10
            }else{
                contador = contador + x
            }
            continue
        }
        if(letra == "L"){
            contador = contador + l
            continue
        }
        if(letra == "C"){
            if(nromano[index + 1] == "D" || nromano[index + 1] == "M"){
                contador = contador - 100
            }else{
                contador = contador + c
            }
            continue
        }
        if (letra == "D"){
            contador = contador + d
            continue
        }
        if (letra == 'M'){
            contador = contador + m
            continue
        }
    }
    return contador
}