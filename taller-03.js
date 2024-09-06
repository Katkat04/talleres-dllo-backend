/*Taller 3- Katy Diaz Beltrán - 200142505
Desarrollo backend */
let listavocales = ['a', 'e', 'i', 'o', 'u']
let listaconsonantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
function desglosarString(a ,option) {
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
            if (nums[index] + listanum[index2] === numero) {
                return [index, index2];
            }
        }
    }

}
function conversionRomana(nromano){
    let i = 1
    let v = 5
    let x = 10
    let l = 50 
    let c = 100
    let d = 500
    let m = 1000
    let contador = 0
    for (let index = 0; index < nromano.length; index++) {
        let letra = nromano[index].toLowerCase()
        if(letra==i){
            contador= contador+i
        }
        
    }
}
