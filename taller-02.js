/*Taller-02 Desarrollo Backend 
Katy Julieth Diaz Beltrán - 200142505
*/

listanum=[3,17,-1,4,-19]
function findMax(listanum){
    let elemento = listanum[0]
    for (let index = 0; index < listanum.length; index++) { 
        if(elemento < listanum[index]){
            elemento= listanum[index]
        }
    }
    return elemento
}
findMax(listanum)

function includes(listanum, numero){
    for (let index = 0; index < listanum.length; index++) {
        if (listanum[index] === numero) {
            return true
        }
    }
    return false
}
includes(listanum, 1)

function sum(listanum) {
    let total= 0
    for (let index = 0; index < listanum.length; index++) {
        total += listanum[index]
    }
    return total
}
sum(listanum)

function missingNumbers(listanum) {

    //Encontrar mayor y menor de la lista
    let nlista = []
    let eMayor = listanum[0]
    let eMenor = listanum[0]
    for (let index = 0; index < listanum.length; index++) { 
        if(eMenor > listanum[index]){
            eMenor= listanum[index]
        }else{
            if (eMayor < listanum[index]) {
                eMayor = listanum[index]
            }
        }
    }
    nlista.push(eMenor, eMayor)

    //Encontrar missingNumbers  
    let estamosperdidas=[]
    for (let index = eMenor; index <= eMayor; index++){
        let encontrado = false 
        for (let index2 = 0; index2 < listanum.length; index2++) {
            if(listanum[index2]===index){
                encontrado= true
                break
            }
        }
        if(!encontrado){
            estamosperdidas.push(index)
        }     
    }
    return estamosperdidas
}
missingNumbers(listanum)