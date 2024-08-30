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
}includes(listanum, 1)

